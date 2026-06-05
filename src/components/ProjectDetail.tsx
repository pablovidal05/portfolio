"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, CATEGORY_LABELS } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ImageCarousel from "./ImageCarousel";

const AccordionSection = ({ title, children, defaultOpen = true, id, className, onOpen }: { title: string, children: React.ReactNode, defaultOpen?: boolean, id?: string, className?: string, onOpen?: () => void }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div id={id} className={`bg-[#F8F9FA] rounded-[20px] mb-6 overflow-hidden scroll-mt-24 ${className || ''}`}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen && onOpen) onOpen();
                }}
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

const ShareButton = () => {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm bg-white w-[200px]"
        >
            {copied ? (
                <>
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>¡Enlace copiado!</span>
                </>
            ) : (
                <>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <span>Copiar enlace</span>
                </>
            )}
        </button>
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

    const activeSections = [
        { key: 'problem', title: project.sectionProblem, content: project.contentProblem },
        { key: 'context', title: project.sectionContext, content: project.contentContext },
        { key: 'action', title: project.sectionAction, content: project.contentAction },
        { key: 'decision', title: project.sectionDecision, content: project.contentDecision },
        { key: 'result', title: project.sectionResult, content: project.contentResult },
    ].filter(s => s.title && s.content);

    const [activeSectionKey, setActiveSectionKey] = useState<string>(activeSections[0]?.key || '');

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

    if (project.customSectionMedia) {
        Object.values(project.customSectionMedia).forEach(mediaList => {
            mediaList.forEach(media => {
                if (!allMedia.some(m => m.src === media.src)) {
                    allMedia.push(media);
                }
            });
        });
    }

    const handleMediaClick = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCarouselInitialIndex(index);
        setCarouselOpen(true);
    };

    const remainingMedia = allMedia.slice(1);
    const sectionMedia: Record<string, typeof allMedia> = {};
    activeSections.forEach(s => sectionMedia[s.key] = []);

    const mediaToDistribute = project.customSectionMedia 
        ? remainingMedia.filter(m => {
            let isCustom = false;
            Object.values(project.customSectionMedia!).forEach(list => {
                if (list.some(cm => cm.src === m.src)) isCustom = true;
            });
            return !isCustom;
        })
        : remainingMedia;

    const sectionsForDistribution = project.customSectionMedia 
        ? activeSections.filter(s => !project.customSectionMedia![s.key])
        : activeSections;

    mediaToDistribute.forEach((media, idx) => {
        if (sectionsForDistribution.length > 0) {
            const sectionKey = sectionsForDistribution[idx % sectionsForDistribution.length].key;
            sectionMedia[sectionKey].push(media);
        }
    });

    if (project.customSectionMedia) {
        Object.entries(project.customSectionMedia).forEach(([key, list]) => {
            if (sectionMedia[key] !== undefined) {
                sectionMedia[key] = [...list];
            }
        });
    }

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
                                    onCanPlay={(e) => {
                                        if (item.src.includes('buk-2.webm')) {
                                            e.currentTarget.playbackRate = 1.5;
                                        }
                                    }}
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
        <div className="bg-white text-black min-h-screen pb-24 flex flex-col items-center w-full" style={{ paddingTop: '6rem' }}>
            {/* Header & Hero container - Centered */}
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

                    <h1 className="font-bold text-black leading-tight mb-6 text-[2.5rem] md:text-[3rem] lg:text-[2.8rem]" style={{ fontFamily: "'Monument Grotesk Variable', var(--font-inter), system-ui, -apple-system, sans-serif", letterSpacing: '-0.02em' }}>
                        {title}
                    </h1>

                    {project.kpiSubtitle && (
                        <div className="font-medium mb-8 rounded-lg inline-block" style={{ fontSize: "1.1rem", color: "#059669", backgroundColor: "rgba(16, 185, 129, 0.1)", padding: "12px 20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                            {project.kpiSubtitle[locale]}
                        </div>
                    )}

                    <div className="text-gray-500 flex items-center justify-center gap-2" style={{ fontSize: '1rem', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                        <span>Role: <strong className="text-gray-700">{role}</strong></span>
                        <span className="text-gray-300 mx-1">•</span>
                        <span>Year: <strong className="text-gray-700">{project.year}</strong></span>
                    </div>

                </div>

                {/* Hero Image / Video debajo del título (MOBILE ONLY) */}
                {allMedia.length > 0 && (
                    <div className="block lg:hidden mb-12 w-full relative aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer shadow-sm" onClick={(e) => handleMediaClick(0, e)}>
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
            </div>

            {/* 3-Column Layout for TOC (Left Aligned) and Content (Centered) */}
            <div className="w-full page-layout mt-8 sm:mt-12 flex flex-col lg:flex-row xl:justify-between gap-8 lg:gap-28 xl:gap-28 items-start">

                {/* Left Column: Table of Contents (Sticky) */}
                {activeSections.length > 0 && (
                    <div className="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-24 mb-12 lg:mb-0 pr-6 border-r border-gray-200">
                        {/* TOC Box */}
                        <div className="mb-12">
                            {/* <h3 className="font-bold text-black text-xl mb-4">Table of contents</h3> */}
                            <ul className="space-y-4" style={{ paddingTop: '8px' }}>
                                {activeSections.map(section => (
                                    <li key={section.key} className="flex items-start">
                                        {/* <span className="text-gray-400 mr-3 mt-[1px] font-mono font-light select-none" style={{ fontSize: '1.1rem', lineHeight: '1.2', paddingTop: '8px' }}>└</span> */}
                                        <a
                                            href={`#${section.key}`}
                                            className={`transition-colors text-[1.05rem] leading-snug ${activeSectionKey === section.key ? 'text-[#3b82f6]' : 'text-gray-400'}`}
                                            style={{ paddingTop: '8px' }}
                                            onClick={(e) => {
                                                setActiveSectionKey(section.key);
                                            }}
                                        >
                                            {getLocalizedValue(section.title)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Share Section */}
                        <div className="px-2">
                            <h3 className="font-bold text-gray-800 text-lg mb-4" style={{ paddingTop: '24px', paddingBottom: '8px' }}>Share</h3>
                            <div className="flex flex-col gap-4">
                                <ShareButton />
                            </div>
                        </div>
                    </div>
                )}

                {/* Center Column: Contenido con Accordions */}
                <div className="flex-1 w-full max-w-[768px] mx-auto lg:mx-0 xl:mx-auto pb-8">

                    {/* Hero Image / Video debajo del título (DESKTOP ONLY) */}
                    {allMedia.length > 0 && (
                        <div className="hidden lg:block mb-12 w-full relative aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer shadow-sm" onClick={(e) => handleMediaClick(0, e)}>
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

                    <div className="flex flex-col gap-8" style={{ paddingTop: '48px' }}>
                        {activeSections.map((section, idx) => {
                            const titleStr = getLocalizedValue(section.title);
                            const contentStr = getLocalizedValue(section.content);
                            const mediaList = sectionMedia[section.key] || [];

                            return (
                                <AccordionSection key={section.key} id={section.key} title={titleStr} defaultOpen={idx === 0} onOpen={() => setActiveSectionKey(section.key)}>
                                    <div className="font-normal text-gray-700 leading-relaxed text-base lg:text-[0.9rem]" style={{ fontSize: '1rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {renderTextBlocks(contentStr)}
                                    </div>
                                    {renderMediaGrid(mediaList)}
                                </AccordionSection>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Dummy para centrar perfectamente el contenido central en desktop grande */}
                <div className="hidden xl:block w-[280px] flex-shrink-0" />
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
