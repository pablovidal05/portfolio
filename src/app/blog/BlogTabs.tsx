"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/data/blogPosts";

const HEADING_FONT = "'Monument Grotesk Variable', var(--font-inter), system-ui, -apple-system, sans-serif";
const BODY_FONT = "var(--font-inter), system-ui, -apple-system, sans-serif";
const MONO_FONT = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";

/** Estima el tiempo de lectura (~200 palabras/min) desde el texto de los bloques. */
function readingTime(post: BlogPost): string {
    const words = post.blocks
        .map((b) => ("text" in b ? b.text : "caption" in b && b.caption ? b.caption : ""))
        .join(" ")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;
    const min = Math.max(1, Math.round(words / 200));
    return `${min}m`;
}

type Tab = "gandalf" | "legolas";

export default function BlogTabs({ posts }: { posts: BlogPost[] }) {
    const [tab, setTab] = useState<Tab>("gandalf");

    const legolasPosts = posts.filter((p) => p.author === "Legolas");
    const gandalfPosts = posts.filter((p) => p.author !== "Legolas");
    const list = tab === "legolas" ? legolasPosts : gandalfPosts;

    return (
        <div className="w-full">
            {/* Tabs */}
            <div
                role="tablist"
                aria-label="Filtrar el blog por autor"
                className="flex items-center justify-center"
                style={{ gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}
            >
                <TabButton
                    active={tab === "gandalf"}
                    onClick={() => setTab("gandalf")}
                    label="🧙 La vista de Gandalf"
                    sub="desde la IA"
                />
                <TabButton
                    active={tab === "legolas"}
                    onClick={() => setTab("legolas")}
                    label="🧝 El radar de Legolas"
                    sub="tendencias"
                />
            </div>

            {/* Vista Gandalf: cards (como estaba) */}
            {tab === "gandalf" && (
                <ul>
                    {list.map((post) => (
                        <li key={post.slug} className="border-t border-gray-200" style={{ padding: "2rem 0" }}>
                            <span
                                style={{
                                    fontFamily: MONO_FONT,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    color: "#9CA3AF",
                                }}
                            >
                                {post.dateLabel} · {post.author}
                            </span>
                            <h2
                                style={{
                                    fontFamily: HEADING_FONT,
                                    fontWeight: 600,
                                    fontSize: "1.35rem",
                                    lineHeight: 1.3,
                                    letterSpacing: "-0.01em",
                                    textTransform: "none",
                                    margin: "0.6rem 0",
                                }}
                            >
                                <Link href={`/blog/${post.slug}`} className="text-black hover:opacity-60 transition-opacity">
                                    {post.title}
                                </Link>
                            </h2>
                            <p style={{ fontFamily: BODY_FONT, color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                {post.excerpt}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Vista Legolas: tabla estilo Cursor (fecha · título · autor · tiempo) */}
            {tab === "legolas" && (
                <div>
                    {legolasPosts.length === 0 ? (
                        <p style={{ fontFamily: BODY_FONT, color: "#9CA3AF", textAlign: "center", padding: "2rem 0" }}>
                            Legolas todavía no suelta su primer radar. Vuelve la próxima semana.
                        </p>
                    ) : (
                        <ul>
                            {legolasPosts.map((post) => (
                                <li key={post.slug} className="border-t border-gray-200 last:border-b">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group grid items-baseline gap-3 hover:bg-gray-50 transition-colors"
                                        style={{
                                            gridTemplateColumns: "6.5rem 1fr auto",
                                            padding: "1.4rem 0.75rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: MONO_FONT,
                                                fontSize: "0.75rem",
                                                letterSpacing: "0.03em",
                                                color: "#9CA3AF",
                                            }}
                                        >
                                            {post.dateLabel.replace(", 2026", "").replace(" de ", " ")}
                                        </span>
                                        <span
                                            className="group-hover:opacity-60 transition-opacity"
                                            style={{
                                                fontFamily: HEADING_FONT,
                                                fontWeight: 500,
                                                fontSize: "1.05rem",
                                                lineHeight: 1.35,
                                                color: "#111111",
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            {post.title}
                                        </span>
                                        <span
                                            className="hidden sm:inline"
                                            style={{
                                                fontFamily: MONO_FONT,
                                                fontSize: "0.75rem",
                                                color: "#B0B0B0",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {readingTime(post)}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

function TabButton({
    active,
    onClick,
    label,
    sub,
}: {
    active: boolean;
    onClick: () => void;
    label: string;
    sub: string;
}) {
    return (
        <button
            role="tab"
            aria-selected={active}
            onClick={onClick}
            className="rounded-full transition-all"
            style={{
                fontFamily: MONO_FONT,
                fontSize: "0.72rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "9px 18px",
                border: active ? "1px solid #111111" : "1px solid #E5E5E5",
                background: active ? "#111111" : "#FFFFFF",
                color: active ? "#FFFFFF" : "#555555",
                cursor: "pointer",
            }}
        >
            {label} <span style={{ opacity: 0.55 }}>· {sub}</span>
        </button>
    );
}
