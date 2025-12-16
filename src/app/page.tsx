"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { projects, ProjectCategory } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ProjectTabs from "@/components/ProjectTabs";
import { Project } from "@/data/projects";

function HomeContent() {
  const { locale } = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Leer categoría desde la URL o usar "all" por defecto
  const categoryFromUrl = searchParams.get("category") as ProjectCategory | null;
  const validCategories: ProjectCategory[] = ["all", "product-design", "ecommerce-landings", "graphic-design"];
  const initialCategory = categoryFromUrl && validCategories.includes(categoryFromUrl) 
    ? categoryFromUrl 
    : "all";
  
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(initialCategory);
  
  // Sincronizar estado con URL cuando cambia la URL (solo al montar o cuando cambia searchParams)
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") as ProjectCategory | null;
    if (categoryFromUrl && validCategories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else if (!categoryFromUrl) {
      setActiveCategory("all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  
  // Abrir/cerrar modal según el parámetro "project" en la URL
  useEffect(() => {
    const projectSlug = searchParams.get("project");

    if (projectSlug) {
      const projectFromSlug = projects.find((p) => p.slug === projectSlug);
      if (projectFromSlug) {
        setSelectedProject(projectFromSlug);
        setIsModalOpen(true);
      }
    } else {
      setIsModalOpen(false);
      setSelectedProject(null);
    }
  }, [searchParams]);

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
     const params = new URLSearchParams(searchParams.toString());
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
    const params = new URLSearchParams(searchParams.toString());
    params.delete("project");
    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.replace(newUrl, { scroll: false });
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
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
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
