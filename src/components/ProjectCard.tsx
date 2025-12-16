"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
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

  // Combinar videos e imágenes en un solo array
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
  
  // Mostrar solo los primeros 3 elementos en la card
  const displayItems = allMedia.slice(0, 3);

  const handleMediaClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // Encontrar el índice en el array completo de allMedia
    const clickedItem = displayItems[index];
    const fullIndex = allMedia.findIndex(
      item => item.src === clickedItem.src && item.type === clickedItem.type
    );
    setCarouselInitialIndex(fullIndex >= 0 ? fullIndex : 0);
    setCarouselOpen(true);
  };

  return (
    <>
      <div className="bg-black border-t border-[#333333] pt-8 pb-8">
        {/* Grid de 3 medios (video + imágenes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" style={{ marginTop: '16px' }}>
          {displayItems.map((item, index) => {
            if (item.type === 'video') {
              return (
                <div
                  key={`video-${project.id}-${index}`}
                  className="aspect-video bg-[#1A1A1A] relative overflow-hidden cursor-pointer"
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
            }

            return (
              <div
                key={`image-${index}`}
                className="aspect-video bg-[#1A1A1A] relative overflow-hidden cursor-pointer"
                onClick={(e) => handleMediaClick(index, e)}
              >
                <Image
                  src={item.src}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  unoptimized
                />
              </div>
            );
          })}
        </div>

        {/* Layout de 3 columnas: Título/Fecha | Contenido | Vacío */}
        <div className="grid grid-cols-12 gap-4" style={{ marginTop: '8px', marginBottom: '96px' }}>
          {/* Columna 1: Título y Fecha */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-normal text-white mb-2" style={{ fontSize: '0.75rem' }}>
              <strong>{title}</strong>
            </h3>
            <div className="text-white" style={{ fontSize: '12px' }}>
              {project.year}
            </div>
          </div>

          {/* Columna 2: Descripción (debajo de la segunda imagen) */}
          <div className="col-span-12 md:col-span-4">
            <p className="font-normal text-white leading-relaxed opacity-90" style={{ fontSize: '0.75rem' }}>
              {description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onReadMore) onReadMore();
              }}
              className="font-normal text-white hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              style={{ marginTop: '8px', fontSize: '0.75rem' }}
            >
              {t("project.readMore")} →
            </button>
          </div>

          {/* Columna 3: Vacía */}
          <div className="col-span-12 md:col-span-4">
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
