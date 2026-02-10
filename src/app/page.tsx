"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { projects, ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectTabs from "@/components/ProjectTabs";
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

  const filteredProjects = useMemo(() => {
    // Solo mostrar proyectos de product-design
    return projects.filter((project) => project.category === "product-design");
  }, [activeCategory]);

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
          <div className="space-y-24 md:space-y-32" style={{ paddingTop: '2rem' }}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
