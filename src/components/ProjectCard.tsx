"use client";

import { useState } from "react";
import Link from "next/link";
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
  const displayItems = allMedia.slice(0, 2);

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
      <div
        className="bg-black border-t border-[#333333] relative"
        style={{ paddingTop: "24px", paddingBottom: "80px", marginBottom: "20px" }}
      >
        {/* Enlace superpuesto en mobile para hacer toda la card clickeable hacia el detalle */}
        <Link
          href={`/${project.slug}`}
          className="absolute inset-0 z-10 block md:hidden cursor-pointer"
          aria-label={`Ver detalle de ${title}`}
        />
        {/* Structure: 1 column < 850px, 3 columns >= 850px */}
        <div
          className="grid grid-cols-1 min-[850px]:grid-cols-3"
          style={{ columnGap: "04px", rowGap: "0px", marginTop: "04px" }}
        >

          {/* Column 1: Content */}
          <div className="flex flex-col h-full order-2 min-[850px]:order-1">
            <div>
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
              <div className="text-white mb-6" style={{ fontSize: "0.75rem", color: "#c2c2c2ff" }}>
                {project.year}
              </div>
              <h2 className="text-white font-bold mb-1" style={{ fontSize: "1.5rem", paddingTop: "10px", paddingBottom: "10px" }}>
                {title}
              </h2>

              {/*project.kpiSubtitle && (
                 <div className="font-medium mb-4 rounded inline-block" style={{ fontSize: "0.85rem", color: "#10B981", backgroundColor: "rgba(16, 185, 129, 0.1)", padding: "6px 10px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                    {project.kpiSubtitle[locale]}
                 </div>
              )*/}


              <p
                className="text-white leading-relaxed opacity-90 font-normal"
                style={{ fontSize: "0.85rem" }}
              >
                {description}
              </p>

              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-1" style={{ marginTop: "16px" }}>
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      style={{
                        fontSize: "0.72rem",
                        color: "#8a8a8a",
                        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 min-[850px]:mt-auto pt-0 min-[850px]:pt-8">
              <Link
                href={`/${project.slug}`}
                className="text-white hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer font-normal self-start relative z-20"
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  paddingTop: "24px"
                }}
              >
                {t("project.readMore")} →
              </Link>
            </div>
          </div>

          {/* Columns 2 & 3: Images */}
          {displayItems.map((item, index) => (
            <Link
              key={item.type === "video" ? `video-${project.id}-${index}` : `image-${index}`}
              href={`/${project.slug}`}
              className={`
                aspect-video min-[850px]:aspect-[4/3] bg-[#1A1A1A] block relative overflow-hidden transition-opacity w-full relative z-20 order-1 min-[850px]:order-2
                ${index >= 1 ? "hidden min-[850px]:block" : ""}
              `}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`${title} - ${index + 1}`}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 849px) 100vw, 33vw"
                  unoptimized
                />
              )}
            </Link>
          ))}
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
