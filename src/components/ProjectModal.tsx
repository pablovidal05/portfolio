"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Project, CATEGORY_LABELS } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ImageCarousel from "./ImageCarousel";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const { locale, t } = useLocale();
  const title = project.title[locale];
  const role = project.role[locale];
  const description = project.fullDescription[locale];
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselInitialIndex, setCarouselInitialIndex] = useState(0);

  // Combinar videos e imágenes en un solo array (para el carrusel)
  const videos = project.videos || [];
  const allMedia: Array<{ type: 'video' | 'image'; src: string }> = [];

  // Agregar todos los videos primero
  videos.forEach(video => {
    allMedia.push({ type: 'video', src: video });
  });

  // Agregar todas las imágenes después
  project.images.forEach(image => {
    allMedia.push({ type: 'image', src: image });
  });

  const handleMediaClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselInitialIndex(index);
    setCarouselOpen(true);
  };

  // const projectUrl = typeof window !== 'undefined' 
  //   ? `${window.location.origin}/case-study/${project.slug}`
  //   : '';

  // const handleShare = async () => {
  //   const shareData = {
  //     title: title,
  //     text: description.substring(0, 200) + '...',
  //     url: projectUrl,
  //   };

  //   try {
  //     if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
  //       await navigator.share(shareData);
  //     } else {
  //       // Fallback: copiar al portapapeles
  //       await navigator.clipboard.writeText(projectUrl);
  //       setShareSuccess(true);
  //       setTimeout(() => setShareSuccess(false), 2000);
  //     }
  //   } catch (shareError) {
  //     // Si el usuario cancela o hay error, intentar copiar al portapapeles
  //     try {
  //       await navigator.clipboard.writeText(projectUrl);
  //       setShareSuccess(true);
  //       setTimeout(() => setShareSuccess(false), 2000);
  //     } catch (clipboardError) {
  //       console.error('Error al compartir:', clipboardError);
  //     }
  //   }
  // };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] overflow-y-auto project-overlay page modal-overlay"
      onClick={onClose}
      style={{ paddingTop: '3rem', paddingBottom: '24px', cursor: 'pointer' }}
    >
      <div
        className="relative max-w-full"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ pointerEvents: 'auto', cursor: 'default' }}
      >
        <div className="page-layout">
          <div className="page-content modal-content">
            {/* Header con botón cerrar: 3 columnas */}
            <div className="grid grid-cols-12 gap-4 mb-8">
              {/* Columna 1: Vacía (span 3) */}
              <div className="col-span-12 md:col-span-3"></div>

              {/* Columna 2: Centrada (span 5) */}
              <div className="col-span-12 md:col-span-5 text-center"></div>

              {/* Columna 3: Botón cerrar a la derecha (span 4) */}
              <div className="col-span-12 md:col-span-4 text-right">
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
              <span style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '0.75rem', fontFamily: "'Monument Grotesk Mono Variable', 'Courier New', monospace" }}>
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

                      // Primero dividimos por URLs
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

                        // Si no es URL, procesamos la negrita
                        const boldParts = part.split(boldRegex);
                        if (boldParts.length > 1) {
                          return boldParts.map((boldPart, boldIndex) => {
                            // Los índices impares en boldParts son los contenidos entre **
                            if (boldIndex % 2 === 1) {
                              return <strong key={`bold-${index}-${boldIndex}`} style={{ fontWeight: 600 }}>{boldPart}</strong>;
                            }
                            return boldPart;
                          });
                        }

                        return part;
                      });
                    };

                    // Detectar si es un título (línea única, corta, sin punto, o todo mayúsculas)
                    const firstLine = lines[0].trim();
                    const isTitle = lines.length === 1 && (
                      firstLine.toUpperCase() === firstLine ||
                      (firstLine.length < 100 && !firstLine.includes('.'))
                    );

                    if (isTitle) {
                      // Renderizar como título
                      return (
                        <div key={sectionIndex} style={{ marginTop: sectionIndex > 0 ? '1rem' : '0', marginBottom: '0.25rem' }}>
                          <strong style={{ fontSize: '1rem', fontWeight: 600 }}>{renderTextWithLinks(firstLine)}</strong>
                        </div>
                      );
                    } else {
                      // Renderizar como párrafo normal
                      return (
                        <div key={sectionIndex} style={{ marginTop: sectionIndex > 0 ? '0.5rem' : '0', marginBottom: '0' }}>
                          {lines.map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            if (!trimmedLine) return null;

                            // Detectar si es un bullet point o lista
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
      </div>

      {/* Carrusel de imágenes y videos */}
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
