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
    <div
      className="sticky top-[3.5rem] z-[90] bg-black/95 backdrop-blur-xl -mx-8 px-8 border-b border-white/10"
      style={{
        marginTop: '2rem',
        marginBottom: '2rem',
        width: 'calc(100% + 4rem)'
      }}
    >
      <div
        id="project-tabs-container"
        className="overflow-x-auto no-scrollbar flex flex-nowrap gap-8 py-5"
      >
        {categories.map((category) => (
          <button
            key={category.key}
            id={`tab-${category.key}`}
            onClick={() => {
              onCategoryChange(category.key);

              // Smooth scroll to top of projects section
              setTimeout(() => {
                const headerHeight = 56; // 3.5rem (height of fixed navigation)
                const anchor = document.getElementById('projects-anchor');
                if (anchor) {
                  const rect = anchor.getBoundingClientRect();
                  const absoluteTop = rect.top + window.pageYOffset;

                  window.scrollTo({
                    top: absoluteTop - headerHeight - 16, // Extra breathing room
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }}
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
  );
}

