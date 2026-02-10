"use client";

import { ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";

interface ProjectTabsProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function ProjectTabs({ activeCategory, onCategoryChange }: ProjectTabsProps) {
  const { locale } = useLocale();

  const categories: { key: ProjectCategory; label: { es: string; en: string }; hidden?: boolean }[] = [
    { key: "all", label: { es: "Todos", en: "All" } },
    { key: "product-design", label: { es: "Product Design", en: "Product Design" } },
    { key: "ecommerce-landings", label: { es: "E-commerce & Landings pages", en: "E-commerce & Landing pages" }, hidden: true },
    { key: "graphic-design", label: { es: "Diseño gráfico", en: "Graphic Design" }, hidden: true },
  ];

  return (
    <div
      className="sticky top-[3.5rem] z-50 bg-black/80 backdrop-blur-md border-b border-white/10 w-full"
      style={{
        marginTop: '0rem',
        marginBottom: '2rem'
      }}
    >
      <div className="page-layout">
        <div
          id="project-tabs-container"
          className="overflow-x-auto no-scrollbar flex flex-nowrap gap-8 py-4"
        >
          {categories.filter(cat => !cat.hidden).map((category) => (
            <button
              key={category.key}
              id={`tab-${category.key}`}
              onClick={() => onCategoryChange(category.key)}
              className={`text-base font-normal transition-all duration-300 cursor-pointer flex-shrink-0 whitespace-nowrap ${activeCategory === category.key
                ? "text-white border-b-2 border-white"
                : "text-white/60 hover:text-white/80"
                }`}
              style={{
                fontSize: '0.875rem',
                paddingBottom: '4px',
                borderBottomWidth: activeCategory === category.key ? '1px' : '0',
              }}
            >
              {category.label[locale]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

