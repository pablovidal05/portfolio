"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { projects, ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ProjectTabs from "@/components/ProjectTabs";
import { Project } from "@/data/projects";

const VALID_CATEGORIES: ProjectCategory[] = ["all", "product-design", "ecommerce-landings", "graphic-design"];

function SearchParamsHandler({ 
  onCategoryChange, 
  onProjectChange 
}: { 
  onCategoryChange: (category: ProjectCategory) => void;
  onProjectChange: (project: Project | null) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") as ProjectCategory | null;
    if (categoryFromUrl && VALID_CATEGORIES.includes(categoryFromUrl)) {
      onCategoryChange(categoryFromUrl);
    } else {
      onCategoryChange("all");
    }

    const projectSlug = searchParams.get("project");
    if (projectSlug) {
      const projectFromSlug = projects.find((p) => p.slug === projectSlug);
      onProjectChange(projectFromSlug || null);
    } else {
      onProjectChange(null);
    }
  }, [searchParams, onCategoryChange, onProjectChange]);

  return null;
}

function HomeContent() {
  const { locale } = useLocale();
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  
  // Inicializar desde URL en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category") as ProjectCategory | null;
      
      if (category && VALID_CATEGORIES.includes(category)) {
        setActiveCategory(category);
      }
      
      const projectSlug = params.get("project");
      if (projectSlug) {
        const projectFromSlug = projects.find((p) => p.slug === projectSlug);
        if (projectFromSlug) {
          setSelectedProject(projectFromSlug);
          setIsModalOpen(true);
        }
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

  const handleReadMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);

    // Actualizar la URL para que el modal tenga un enlace único por proyecto
    const params = new URLSearchParams();
    params.set("project", project.slug);
    if (activeCategory !== "all") {
      params.set("category", activeCategory);
    }
    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.replace(newUrl, { scroll: false });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);

    // Limpiar el parámetro de proyecto de la URL al cerrar el modal
    const params = new URLSearchParams();
    if (activeCategory !== "all") {
      params.set("category", activeCategory);
    }
    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.replace(newUrl, { scroll: false });
  };

  const handleProjectFromUrl = (project: Project | null) => {
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else {
      setSelectedProject(null);
      setIsModalOpen(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsHandler 
          onCategoryChange={setActiveCategory}
          onProjectChange={handleProjectFromUrl}
        />
      </Suspense>
      <div className="min-h-screen bg-black">
        <div className="page-layout">
          <div className="page-content">
            <div className="text-center" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
              <div>
                <h1 className="crimson-text-title" style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400, lineHeight: 1.1 }}>
                  <span className="sentient-text" style={{ fontFamily: "'Sentient', serif", fontStyle: 'italic', fontWeight: 300 }}>{locale === "es" ? "Trabajos" : "Works"}</span>
                  <br />
                  {locale === "es" ? "Seleccionados" : "Selected"}
                </h1>
              </div>
            </div>
            <ProjectTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
            <div className="space-y-24 md:space-y-32">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onReadMore={() => handleReadMore(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
