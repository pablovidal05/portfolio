"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { projects, ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectTabs from "@/components/ProjectTabs";
import FAQSection from "@/components/FAQSection";
import { Project } from "@/data/projects";

const VALID_CATEGORIES: ProjectCategory[] = ["all", "product-design", "ecommerce-landings", "graphic-design"];

function SearchParamsHandler({
  onCategoryChange
}: {
  onCategoryChange: (category: ProjectCategory) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") as ProjectCategory | null;
    if (categoryFromUrl && VALID_CATEGORIES.includes(categoryFromUrl)) {
      onCategoryChange(categoryFromUrl);
    } else {
      onCategoryChange("all");
    }
  }, [searchParams, onCategoryChange]);

  return null;
}

function HomeContent() {
  const { locale, t } = useLocale();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [showAll, setShowAll] = useState(false);

  // Inicializar desde URL en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category") as ProjectCategory | null;

      if (category && VALID_CATEGORIES.includes(category)) {
        setActiveCategory(category);
      }
    }
  }, []);

  // Sincronizar URL cuando cambia la categoría
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    const params = new URLSearchParams();
    if (category !== "all") {
      params.set("category", category);
    }
    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.replace(newUrl, { scroll: false });
  };

  // Orden destacado: estos 4 se ven primero (Vertice + Explora abajo del bloque visible)
  const FEATURED_ORDER = [
    "consorcio-mi-inversion",
    "copiloto-financiero-conversacional",
    "latam-airlines-recap",
    "buk-design-system-escalamiento",
  ];
  const VISIBLE_COUNT = 4;

  const filteredProjects = useMemo(() => {
    const pd = projects.filter((project) => project.category === "product-design");
    const rank = (slug: string) => {
      const i = FEATURED_ORDER.indexOf(slug);
      return i === -1 ? 999 : i;
    };
    return [...pd].sort((a, b) => rank(a.slug) - rank(b.slug));
  }, [activeCategory]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, VISIBLE_COUNT);
  const hasMore = filteredProjects.length > VISIBLE_COUNT;

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsHandler
          onCategoryChange={setActiveCategory}
        />
      </Suspense>
      <div className="min-h-screen bg-black flex flex-col">
        <div className="page-layout">
          <div className="text-center" style={{ paddingTop: '5rem', paddingBottom: '7rem', justifyItems: "center" }}>
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="crimson-text-title mb-6" style={{ fontSize: '2.5rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, lineHeight: 1.1 }}>
                <span className="sentient-text" style={{ fontFamily: "'Sentient', serif", fontWeight: 300 }}>{t("hero.works")}</span>
                <br />
                {t("")}
              </h1>
            </div>
          </div>
          <div id="projects-anchor" className="h-0 w-0" />
        </div>

        {/* <ProjectTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} /> */}

        <div className="page-layout">
          <div className="space-y-48 md:space-y-64" style={{ paddingTop: '2rem' }}>
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {hasMore && !showAll && (
            <div className="flex justify-center" style={{ paddingTop: '4rem' }}>
              <button
                onClick={() => setShowAll(true)}
                className="text-white hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border border-[#333333] rounded-full"
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                  padding: "14px 32px",
                }}
              >
                {locale === "es" ? "Ver más proyectos" : "View more projects"} ↓
              </button>
            </div>
          )}
        </div>

        <FAQSection />
      </div>
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
