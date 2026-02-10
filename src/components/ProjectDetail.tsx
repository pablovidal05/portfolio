"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, CATEGORY_LABELS } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ImageCarousel from "./ImageCarousel";

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

    return (
        <div className="project-overlay page" style={{ paddingTop: '3rem', paddingBottom: '24px', minHeight: '100vh', background: 'transparent' }}>
            <div className="page-layout">
                <div className="page-content" style={{ marginTop: '0', animation: 'none' }}>
                    {/* Header con botón cerrar si hay onClose */}
                    <div className="grid grid-cols-12 gap-4 mb-8">
                        <div className="col-span-12 md:col-span-3"></div>
                        <div className="col-span-12 md:col-span-5 text-center"></div>
                        <div className="col-span-12 md:col-span-4 text-right">
                            {onClose && (
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center justify-center w-8 h-8 bg-transparent border-none text-black cursor-pointer hover:opacity-60 transition-opacity"
                                    aria-label={t("modal.close")}
                                    style={{ fontSize: '1.85em' }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    <br />

                    {/* Título centrado + chip disciplina */}
                    <div className="text-center mb-4">
                        {project.category !== "all" && (
                            <span
                                className="inline-flex items-center px-2 py-0.5"
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    color: "rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                {CATEGORY_LABELS[project.category][locale]}
                            </span>
                        )}
                        <h1 className="font-bold text-black mt-2" style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '1rem', fontFamily: "'Monument Grotesk Variable', var(--font-inter), system-ui, -apple-system, sans-serif" }}>
                            {title}
                        </h1>
                    </div>

                    {/* Subtítulo centrado */}
                    <div className="text-center mb-8">
                        <span style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '0.75rem', fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace" }}>
                            {role.toUpperCase()}
                            <br />
                            {project.year.toUpperCase()}
                        </span>
                    </div>

                    <br />
                    <br />
                    <br />

                    {/* Layout de 2 columnas: Galería | Texto */}
                    <div className="grid grid-cols-12 gap-4">
                        {/* Columna izquierda: Galería combinada de videos e imágenes en 2 columnas */}
                        <div className="col-span-12 md:col-span-6">
                            <div className="grid grid-cols-2 gap-4">
                                {allMedia.map((item, index) => {
                                    if (item.type === 'video') {
                                        return (
                                            <div
                                                key={`media-${index}`}
                                                className="relative w-full aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer"
                                                onClick={(e) => handleMediaClick(index, e)}
                                            >
                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={`media-${index}`}
                                                className="relative w-full aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer"
                                                onClick={(e) => handleMediaClick(index, e)}
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={`${title} - Image ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1200px) 50vw, 600px"
                                                    unoptimized
                                                />
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>

                        {/* Columna derecha: Descripción */}
                        <div className="col-span-12 md:col-span-6">
                            <div className="font-normal text-black leading-relaxed opacity-90" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                                {description.split('\n\n').map((section, sectionIndex) => {
                                    const trimmedSection = section.trim();
                                    if (!trimmedSection) return null;

                                    const lines = trimmedSection.split('\n').filter(line => line.trim());
                                    if (lines.length === 0) return null;

                                    // Función para convertir URLs en enlaces y soportar negrita (**texto**)
                                    const renderTextWithLinks = (text: string) => {
                                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                                        const boldRegex = /\*\*(.*?)\*\*/g;

                                        const parts = text.split(urlRegex);

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

                                    const firstLine = lines[0].trim();
                                    const isTitle = lines.length === 1 && (
                                        firstLine.toUpperCase() === firstLine ||
                                        (firstLine.length < 100 && !firstLine.includes('.'))
                                    );

                                    if (isTitle) {
                                        return (
                                            <div key={sectionIndex} style={{ marginTop: sectionIndex > 0 ? '1rem' : '0', marginBottom: '0.25rem' }}>
                                                <strong style={{ fontSize: '1rem', fontWeight: 600 }}>{renderTextWithLinks(firstLine)}</strong>
                                            </div>
                                        );
                                    } else {
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
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageCarousel
                items={allMedia}
                initialIndex={carouselInitialIndex}
                isOpen={carouselOpen}
                onClose={() => setCarouselOpen(false)}
                title={title}
            />
        </div>
    );
}
