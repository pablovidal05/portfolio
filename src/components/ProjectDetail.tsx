"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, CATEGORY_LABELS } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ImageCarousel from "./ImageCarousel";

const AccordionSection = ({ title, children, defaultOpen = true }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-[#F8F9FA] rounded-[20px] mb-6 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center text-left transition-opacity hover:opacity-70 focus:outline-none"
                style={{ padding: '20px' }}
            >
                <div className="flex-shrink-0 mr-6 flex items-center justify-center w-6 h-6" style={{ paddingRight: '10px' }}>
                    <svg
                        className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <h3 className="font-bold text-black m-0 p-0 text-xl tracking-tight" style={{ fontWeight: 600 }}>
                    {title}
                </h3>
            </button>

            {isOpen && (
                <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
                    <div className="w-full border-t border-gray-200/50 pt-5">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

interface ProjectDetailProps {
    project: Project;
    onClose?: () => void; // Optional: for back navigation or if used in a modal context
}

export default function ProjectDetail({
    project,
    onClose,
}: ProjectDetailProps) {
    const { locale, t } = useLocale();
    const title = project.title[locale];
    const role = project.role[locale];
    const description = project.fullDescription[locale];
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [carouselInitialIndex, setCarouselInitialIndex] = useState(0);

    const getLocalizedValue = (val: string | { es: string; en: string } | undefined): string => {
        if (!val) return "";
        return typeof val === "string" ? val : val[locale];
    };

    // Combinar videos e imágenes en un solo array (para el carrusel)
    const videos = project.videos || [];
    const allMedia: Array<{ type: 'video' | 'image'; src: string }> = [];

    videos.forEach(video => {
        allMedia.push({ type: 'video', src: video });
    });

    project.images.forEach(image => {
        allMedia.push({ type: 'image', src: image });
    });

    const handleMediaClick = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCarouselInitialIndex(index);
        setCarouselOpen(true);
    };

    const activeSections = [
        { key: 'problem', title: project.sectionProblem, content: project.contentProblem },
        { key: 'context', title: project.sectionContext, content: project.contentContext },
        { key: 'action', title: project.sectionAction, content: project.contentAction },
        { key: 'decision', title: project.sectionDecision, content: project.contentDecision },
        { key: 'result', title: project.sectionResult, content: project.contentResult },
    ].filter(s => s.title && s.content);

    const remainingMedia = allMedia.slice(1);
    const sectionMedia: Record<string, typeof allMedia> = {};
    activeSections.forEach(s => sectionMedia[s.key] = []);

    remainingMedia.forEach((media, idx) => {
        const sectionKey = activeSections[idx % activeSections.length].key;
        sectionMedia[sectionKey].push(media);
    });

    const renderTextBlocks = (text: string) => {
        if (!text) return null;
        return text.split('\n\n').map((section, sectionIndex) => {
            const trimmedSection = section.trim();
            if (!trimmedSection) return null;

            const lines = trimmedSection.split('\n').filter(line => line.trim());
            if (lines.length === 0) return null;

            const renderTextWithLinks = (textContent: string) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const boldRegex = /\*\*(.*?)\*\*/g;
                const parts = textContent.split(urlRegex);

                return parts.map((part, index) => {
                    if (urlRegex.test(part)) {
                        return (
                            <a
                                key={`link-${index}`}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:opacity-70 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {part}
                            </a>
                        );
                    }
                    const boldParts = part.split(boldRegex);
                    if (boldParts.length > 1) {
                        return boldParts.map((boldPart, boldIndex) => {
                            if (boldIndex % 2 === 1) {
                                return <strong key={`bold-${index}-${boldIndex}`} style={{ fontWeight: 600 }}>{boldPart}</strong>;
                            }
                            return boldPart;
                        });
                    }
                    return part;
                });
            };

            return (
                <div key={sectionIndex} style={{ marginTop: sectionIndex > 0 ? '0.5rem' : '0', marginBottom: '0' }}>
                    {lines.map((line, lineIndex) => {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) return null;
                        const isBullet = trimmedLine.startsWith('-') || trimmedLine.match(/^\d+\./);
                        return (
                            <div
                                key={lineIndex}
                                style={{
                                    marginBottom: lineIndex < lines.length - 1 ? '0.25rem' : '0',
                                    paddingLeft: isBullet ? '0.75rem' : '0'
                                }}
                            >
                                {renderTextWithLinks(trimmedLine)}
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    const renderMediaGrid = (mediaList: typeof allMedia) => {
        if (!mediaList || mediaList.length === 0) return null;
        return (
            <div className={`grid gap-4 mt-8 ${mediaList.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`} style={{ marginTop: '1.5rem' }}>
                {mediaList.map((item, localIndex) => {
                    // Find original index for carousel
                    const originalIndex = allMedia.findIndex(m => m.src === item.src);

                    return (
                        <div
                            key={`media-${localIndex}`}
                            className="relative w-full aspect-video bg-[#1A1A1A] rounded-xl overflow-hidden cursor-pointer"
                            onClick={(e) => handleMediaClick(originalIndex >= 0 ? originalIndex : 0, e)}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={`${title} - section image`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1200px) 50vw, 600px"
                                    unoptimized
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="bg-white text-black min-h-screen pb-24 flex flex-col items-center" style={{ paddingTop: '6rem' }}>
            {/* The single unified width container */}
            <div className="w-full max-w-[800px] px-5 sm:px-8">

                {/* Header Centrado a lo Zapier */}
                <div className="text-center mb-20 flex flex-col items-center" style={{ marginBottom: '4rem', gap: '1rem' }}>

                    {/* Top bar: Volver + Categoría */}
                    <div className="flex items-center justify-center gap-3 mb-5">
                        {onClose ? (
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium border-b border-transparent hover:border-black"
                                style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace", fontSize: '0.85rem' }}
                            >
                                ← Volver
                            </button>
                        ) : (
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium border-b border-transparent hover:border-black"
                                style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace", fontSize: '0.85rem' }}
                            >
                                ← Volver
                            </Link>
                        )}

                        {project.category !== "all" && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500 font-medium uppercase" style={{ fontSize: '0.85rem', fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace" }}>
                                    {CATEGORY_LABELS[project.category][locale]}
                                </span>
                            </>
                        )}
                    </div>

                    <h1 className="font-bold text-black leading-tight mb-6 text-[2.5rem] md:text-[3rem]" style={{ fontFamily: "'Monument Grotesk Variable', var(--font-inter), system-ui, -apple-system, sans-serif", letterSpacing: '-0.02em' }}>
                        {title}
                    </h1>

                    <div className="text-gray-500 flex items-center justify-center gap-2" style={{ fontSize: '1rem', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                        <span>Role: <strong className="text-gray-700">{role}</strong></span>
                        <span className="text-gray-300 mx-1">•</span>
                        <span>Year: <strong className="text-gray-700">{project.year}</strong></span>
                    </div>

                </div>

                {/* Hero Image / Video debajo del título */}
                {allMedia.length > 0 && (
                    <div className="mb-16 w-full relative aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer shadow-sm" onClick={(e) => handleMediaClick(0, e)} style={{ marginBottom: "2rem" }}>
                        {allMedia[0].type === 'video' ? (
                            <video
                                src={allMedia[0].src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={allMedia[0].src}
                                alt={`${title} - Hero`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                unoptimized
                            />
                        )}
                    </div>
                )}

                {/* Contenido en un layout de 1 columna con Accordions */}
                <div className="mx-auto flex flex-col gap-8" style={{ maxWidth: '768px', paddingBottom: '2rem' }}>
                    {activeSections.map((section, idx) => {
                        const titleStr = getLocalizedValue(section.title);
                        const contentStr = getLocalizedValue(section.content);
                        const mediaList = sectionMedia[section.key] || [];

                        return (
                            <AccordionSection key={section.key} title={titleStr} defaultOpen={true}>
                                <div className="font-normal text-gray-700 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {renderTextBlocks(contentStr)}
                                </div>
                                {renderMediaGrid(mediaList)}
                            </AccordionSection>
                        );
                    })}
                </div>
            </div>


            <ImageCarousel
                items={allMedia}
                initialIndex={carouselInitialIndex}
                isOpen={carouselOpen}
                onClose={() => setCarouselOpen(false)}
                title={title}
            />
        </div >
    );
}
