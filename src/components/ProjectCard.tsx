"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, CATEGORY_LABELS } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  onReadMore?: () => void;
}

export default function ProjectCard({ project, onReadMore }: ProjectCardProps) {
  const { locale, t } = useLocale();
  const title = project.title[locale];
  const description = project.shortDescription[locale];
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselInitialIndex, setCarouselInitialIndex] = useState(0);

  // Combinar videos e imágenes; mostrar hasta 3 en desktop, solo 1 en mobile (< 850px)
  const videos = project.videos || [];
  const allMedia: Array<{ type: 'video' | 'image'; src: string }> = [];
  videos.forEach(video => allMedia.push({ type: 'video', src: video }));
  project.images.forEach(image => allMedia.push({ type: 'image', src: image }));
  const displayItems = allMedia.slice(0, 3);

  const handleMediaClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const fullIndex = allMedia.findIndex(
      (item) => item.src === displayItems[index].src && item.type === displayItems[index].type
    );
    setCarouselInitialIndex(fullIndex >= 0 ? fullIndex : 0);
    setCarouselOpen(true);
  };

  const categoryLabel = project.category !== "all" ? CATEGORY_LABELS[project.category][locale] : null;

  return (
    <>
      <div className="bg-black border-t border-[#333333] pt-8 pb-8">
        {/* Grid: 1 columna < 850px (solo primera visible), 3 columnas >= 850px */}
        <div
          className="grid grid-cols-1 min-[850px]:grid-cols-3 gap-4 mb-12"
          style={{ marginTop: "16px" }}
        >
          {displayItems.map((item, index) => (
            <div
              key={item.type === "video" ? `video-${project.id}-${index}` : `image-${index}`}
              className={`
                aspect-video bg-[#1A1A1A] relative overflow-hidden cursor-pointer w-full
                ${index >= 1 ? "hidden min-[850px]:block" : ""}
              `}
              onClick={(e) => handleMediaClick(index, e)}
            >
              {item.type === "video" ? (
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
                  alt={`${title} - ${index + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-80"
                  sizes="(max-width: 849px) 100vw, 33vw"
                  unoptimized
                />
              )}
            </div>
          ))}
        </div>

        {/* Layout: Título + chip disciplina | Descripción */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16" style={{ marginTop: "8px", marginBottom: "96px" }}>
          <div className="flex-1 max-w-sm">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {categoryLabel && (
                <span
                  className="inline-flex items-center rounded text-white/100"
                  style={{ fontSize: "0.75rem", fontWeight: 500, color: "#c2c2c2", paddingBottom: "7.5px" }}
                >
                  {categoryLabel}
                </span>
              )}
            </div>
            <h3 className="text-white font-bold" style={{ fontSize: "1rem" }}>
              {title}
            </h3>
            <div className="text-white" style={{ fontSize: "0.75rem", color: "#c2c2c2" }}>
              {project.year}
            </div>
          </div>

          <div className="flex-[2]">
            <p
              className="text-white leading-relaxed opacity-90 font-normal max-w-2xl"
              style={{ fontSize: "0.85rem" }}
            >
              {description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onReadMore) onReadMore();
              }}
              className="text-white hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer font-normal mt-2"
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                fontFamily: "'Monument Grotesk Mono Variable', 'Courier New', monospace"
              }}
            >
              {t("project.readMore")} →
            </button>
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
    </>
  );
}
