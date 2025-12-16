"use client";

import { ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";

interface ProjectTabsProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export default function ProjectTabs({ activeCategory, onCategoryChange }: ProjectTabsProps) {
  const { locale } = useLocale();

  const categories: { key: ProjectCategory; label: { es: string; en: string } }[] = [
    { key: "all", label: { es: "Todos", en: "All" } },
    { key: "product-design", label: { es: "Product Design", en: "Product Design" } },
    { key: "ecommerce-landings", label: { es: "E-commerce & Landings pages", en: "E-commerce & Landing pages" } },
    { key: "graphic-design", label: { es: "Diseño gráfico", en: "Graphic Design" } },
  ];

  return (
    <div className="flex flex-wrap gap-4" style={{ marginTop: '2rem', marginBottom: '24px' }}>
      {categories.map((category) => (
        <button
          key={category.key}
          id={`tab-${category.key}`}
          onClick={() => onCategoryChange(category.key)}
          className={`text-base font-normal transition-all duration-300 ${
            activeCategory === category.key
              ? "text-white border-b-2 border-white pb-1"
              : "text-white/60 hover:text-white/80"
          }`}
          style={{ 
            fontSize: '0.875rem',
            paddingBottom: activeCategory === category.key ? '4px' : '0',
            borderBottomWidth: activeCategory === category.key ? '1px' : '0',
          }}
        >
          {category.label[locale]}
        </button>
      ))}
    </div>
  );
}

