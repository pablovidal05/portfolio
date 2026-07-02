"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";

// Card vertical para grilla de 3 columnas en home (img → número/meta → título → resto).
// Reversible: flag VERTICAL_GRID en src/app/page.tsx vuelve al layout horizontal.
export default function ProjectCardVertical({ project, index }: { project: Project; index: number }) {
    const { locale } = useLocale();
    const number = String(index + 1).padStart(2, "0");
    const cover = project.images?.[0];

    return (
        <Link href={`/${project.slug}`} className="group block">
            <div className="relative w-full aspect-video bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#1F1F1F]">
                {cover && (
                    <Image
                        src={cover}
                        alt={project.title[locale]}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                )}
            </div>

            <div style={{ paddingTop: "1.25rem" }}>
                <div
                    className="flex items-center gap-3"
                    style={{
                        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                        color: "rgba(255,255,255,0.45)",
                    }}
                >
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{number}</span>
                    <span>{project.year}</span>
                </div>

                <h3
                    className="text-white group-hover:opacity-70 transition-opacity"
                    style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        margin: "0.6rem 0 0.5rem",
                    }}
                >
                    {project.title[locale]}
                </h3>

                <p
                    style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {project.shortDescription[locale]}
                </p>

                <span
                    className="inline-flex items-center gap-2 text-white group-hover:opacity-70 transition-opacity"
                    style={{
                        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginTop: "0.9rem",
                    }}
                >
                    {locale === "es" ? "Leer más" : "Read more"} →
                </span>
            </div>
        </Link>
    );
}
