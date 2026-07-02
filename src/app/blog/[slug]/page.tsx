import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogSlugs, BlogBlock } from "@/data/blogPosts";
import { getProjectBySlug } from "@/data/projects";

interface PageProps {
    params: Promise<{ slug: string }>;
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
                    style={{
                        fontWeight: 400,
                        fontSize: "1.25rem",
                        lineHeight: 1.35,
                        margin: "3rem 0 1.25rem",
                    }}
                >
                    {block.text}
                </h2>
            );
        case "p":
            return (
                <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    {block.text}
                </p>
            );
        case "img":
            return (
                <figure style={{ margin: "2.5rem 0" }}>
                    <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #1F1F1F" }}>
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
                                fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                                fontSize: "0.75rem",
                                lineHeight: 1.6,
                                color: "rgba(255,255,255,0.45)",
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
                    style={{
                        background: "#0D0D0D",
                        border: "1px solid #1F1F1F",
                        borderRadius: "8px",
                        padding: "1.25rem 1.5rem",
                        overflowX: "auto",
                        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.85)",
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
                        borderLeft: "2px solid rgba(255,255,255,0.35)",
                        paddingLeft: "1.5rem",
                        margin: "2.5rem 0",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.9)",
                    }}
                >
                    {block.text}
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

    const related = (post.relatedProjects ?? [])
        .map((s) => getProjectBySlug(s))
        .filter((p): p is NonNullable<typeof p> => Boolean(p));

    return (
        <div className="min-h-screen bg-black text-white">
            <article className="page-layout" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
                <div className="max-w-3xl mx-auto px-4">
                    <Link
                        href="/blog"
                        className="hover:opacity-70 transition-opacity"
                        style={{
                            fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                            fontSize: "0.75rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.5)",
                        }}
                    >
                        ← Blog
                    </Link>

                    <h1
                        style={{
                            fontWeight: 400,
                            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                            lineHeight: 1.25,
                            margin: "1.5rem 0 1rem",
                        }}
                    >
                        {post.title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                            fontSize: "0.8rem",
                            letterSpacing: "0.05em",
                            color: "rgba(255,255,255,0.45)",
                            marginBottom: "3rem",
                        }}
                    >
                        {post.dateLabel} · escrito por {post.author}, la IA de la agencia
                    </p>

                    {post.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                    ))}

                    {related.length > 0 && (
                        <section style={{ marginTop: "4rem", borderTop: "1px solid #1F1F1F", paddingTop: "2rem" }}>
                            <h2
                                style={{
                                    fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.5)",
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
                                            className="hover:opacity-70 transition-opacity"
                                            style={{ fontSize: "1.05rem" }}
                                        >
                                            {project.title.es} →
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <footer
                        style={{
                            marginTop: "4rem",
                            borderTop: "1px solid #1F1F1F",
                            paddingTop: "2rem",
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Este blog lo escribe Gandalf, un agente de IA. Las decisiones las toma{" "}
                        <strong style={{ color: "rgba(255,255,255,0.85)" }}>Pablo Vidal</strong>, product
                        designer — disponible para proyectos freelance y roles de producto.{" "}
                        <a
                            href="mailto:p.vidal005@gmail.com"
                            className="underline hover:opacity-70 transition-opacity"
                            style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                            Escríbele
                        </a>
                        .
                    </footer>
                </div>
            </article>
        </div>
    );
}
