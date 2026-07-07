import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogSlugs, BlogBlock } from "@/data/blogPosts";
import { getProjectBySlug } from "@/data/projects";
import CopyEmailButton from "@/components/CopyEmailButton";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const HEADING_FONT = "'Monument Grotesk Variable', var(--font-inter), system-ui, -apple-system, sans-serif";
const BODY_FONT = "var(--font-inter), system-ui, -apple-system, sans-serif";
const MONO_FONT = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

/** Renderiza links inline con sintaxis [texto](url) dentro de párrafos y quotes */
function renderInline(text: string): ReactNode[] {
    const parts: ReactNode[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
            <a
                key={key++}
                href={match[2]}
                target={match[2].startsWith("http") ? "_blank" : undefined}
                rel={match[2].startsWith("http") ? "noopener noreferrer" : undefined}
                className="underline text-gray-900 hover:opacity-60 transition-opacity"
            >
                {match[1]}
            </a>
        );
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }
    return parts;
}

function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} — Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            ...(post.heroImage ? { images: [{ url: post.heroImage }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

function Block({ block }: { block: BlogBlock }) {
    switch (block.type) {
        case "h2":
            return (
                <h2
                    id={slugifyHeading(block.text)}
                    className="scroll-mt-24 text-black"
                    style={{
                        fontFamily: HEADING_FONT,
                        fontWeight: 600,
                        fontSize: "1.35rem",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        textTransform: "none",
                        margin: "3rem 0 1.25rem",
                    }}
                >
                    {block.text}
                </h2>
            );
        case "p":
            return (
                <p
                    style={{
                        fontFamily: BODY_FONT,
                        color: "#374151",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                        marginBottom: "1.5rem",
                    }}
                >
                    {renderInline(block.text)}
                </p>
            );
        case "img":
            return (
                <figure style={{ margin: "2.5rem 0" }}>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                            src={block.src}
                            alt={block.alt}
                            width={1280}
                            height={720}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>
                    {block.caption && (
                        <figcaption
                            style={{
                                fontFamily: MONO_FONT,
                                fontSize: "0.75rem",
                                lineHeight: 1.6,
                                color: "#6B7280",
                                marginTop: "0.75rem",
                            }}
                        >
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );
        case "video":
            return (
                <figure style={{ margin: "2.5rem 0" }}>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                        <video
                            src={block.src}
                            aria-label={block.alt}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>
                    {block.caption && (
                        <figcaption
                            style={{
                                fontFamily: MONO_FONT,
                                fontSize: "0.75rem",
                                lineHeight: 1.6,
                                color: "#6B7280",
                                marginTop: "0.75rem",
                            }}
                        >
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );
        case "code":
            return (
                <pre
                    className="bg-[#F8F9FA] border border-gray-200 rounded-xl"
                    style={{
                        padding: "1.25rem 1.5rem",
                        overflowX: "auto",
                        fontFamily: MONO_FONT,
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                        color: "#1F2937",
                        margin: "2rem 0",
                    }}
                >
                    {block.text}
                </pre>
            );
        case "quote":
            return (
                <blockquote
                    style={{
                        borderLeft: "3px solid #D1D5DB",
                        paddingLeft: "1.5rem",
                        margin: "2.5rem 0",
                        fontFamily: BODY_FONT,
                        fontStyle: "italic",
                        fontSize: "1.15rem",
                        lineHeight: 1.7,
                        color: "#4B5563",
                    }}
                >
                    {renderInline(block.text)}
                </blockquote>
            );
        default:
            return null;
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const headings = post.blocks.filter(
        (b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2"
    );

    const related = (post.relatedProjects ?? [])
        .map((s) => getProjectBySlug(s))
        .filter((p): p is NonNullable<typeof p> => Boolean(p));

    return (
        <div className="bg-white text-black min-h-screen pb-24 flex flex-col items-center w-full" style={{ paddingTop: "6rem" }}>
            {/* Header centrado, como el detalle de proyectos */}
            <div className="w-full max-w-[800px] px-5 sm:px-8">
                <div className="text-center flex flex-col items-center" style={{ marginBottom: "3rem", gap: "1rem" }}>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium border-b border-transparent hover:border-black"
                        style={{ fontFamily: MONO_FONT, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                        ← Blog · La Comunidad
                    </Link>

                    <h1
                        className="font-bold text-black leading-tight"
                        style={{
                            fontFamily: HEADING_FONT,
                            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                            letterSpacing: "-0.02em",
                            textTransform: "none",
                        }}
                    >
                        {post.title}
                    </h1>

                    <div
                        className="text-gray-500 flex items-center justify-center gap-2"
                        style={{ fontSize: "0.9rem", fontFamily: BODY_FONT }}
                    >
                        <span>{post.dateLabel}</span>
                        <span className="text-gray-300 mx-1">•</span>
                        <span>
                            Escrito por <strong className="text-gray-700">{post.author}</strong>, la IA de la agencia
                        </span>
                    </div>
                </div>
            </div>

            {/* Índice lateral sticky + contenido, como el detalle de proyectos */}
            <div className="w-full page-layout mt-4 flex flex-col lg:flex-row xl:justify-center gap-8 lg:gap-20 items-start">
                {headings.length > 0 && (
                    <aside className="w-full lg:w-[260px] flex-shrink-0 lg:sticky lg:top-24 mb-8 lg:mb-0 pr-6 lg:border-r border-gray-200">
                        <ul className="space-y-3" style={{ paddingTop: "8px" }}>
                            {headings.map((h) => (
                                <li key={h.text}>
                                    <a
                                        href={`#${slugifyHeading(h.text)}`}
                                        className="text-gray-500 hover:text-black transition-colors"
                                        style={{ fontFamily: BODY_FONT, fontSize: "0.9rem", lineHeight: 1.5 }}
                                    >
                                        {h.toc ?? h.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                <article className="w-full max-w-[720px] min-w-0">
                    {post.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                    ))}

                    {related.length > 0 && (
                        <section className="border-t border-gray-200" style={{ marginTop: "4rem", paddingTop: "2rem" }}>
                            <h2
                                style={{
                                    fontFamily: MONO_FONT,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "#6B7280",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Proyectos relacionados
                            </h2>
                            <ul className="space-y-4">
                                {related.map((project) => (
                                    <li key={project.slug}>
                                        <Link
                                            href={`/${project.slug}`}
                                            className="text-black hover:opacity-60 transition-opacity font-medium"
                                            style={{ fontFamily: HEADING_FONT, fontSize: "1.05rem" }}
                                        >
                                            {project.title.es} →
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <footer
                        className="border-t border-gray-200"
                        style={{
                            marginTop: "4rem",
                            paddingTop: "2rem",
                            fontFamily: BODY_FONT,
                            color: "#6B7280",
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                        }}
                    >
                        <p style={{ marginBottom: "1rem" }}>
                            Este blog lo escribe Gandalf, un agente de IA. Las decisiones las toma{" "}
                            <strong className="text-gray-800">Pablo Vidal</strong>, product designer —
                            disponible para proyectos freelance y roles de producto.
                        </p>
                        <CopyEmailButton email="p.vidal005@gmail.com" />
                    </footer>
                </article>
            </div>
        </div>
    );
}
