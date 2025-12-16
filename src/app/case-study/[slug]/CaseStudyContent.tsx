"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import Breadcrumbs from "@/components/Breadcrumbs";

interface CaseStudyContentProps {
  project: Project;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const { locale, t } = useLocale();
  const title = project.title[locale];
  const role = project.role[locale];
  const description = project.fullDescription[locale];

  return (
    <div className="min-h-screen bg-black py-12 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Breadcrumbs
          items={[
            { label: t("breadcrumbs.home"), href: "/" },
            { label: t("breadcrumbs.projects"), href: "/" },
            { label: title },
          ]}
        />

        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-2">
            {title}
          </h1>
          <div className="text-sm text-[#999999] mb-8">
            {role} • {project.year}
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                unoptimized
              />
            </div>
          ))}
        </div>

        <div className="text-base text-white leading-relaxed mb-8 max-w-3xl">
          {description}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#1A1A1A] text-[#999999] text-xs uppercase tracking-wider rounded-full border border-[#333333]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal text-white hover:opacity-70 transition-opacity inline-flex items-center gap-2"
            >
              {t("project.watch")} →
            </a>
          )}
          {project.learnMoreUrl && (
            <a
              href={project.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal text-white hover:opacity-70 transition-opacity inline-flex items-center gap-2"
            >
              {t("project.readMore")} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

