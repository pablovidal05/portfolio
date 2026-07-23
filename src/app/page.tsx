"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects, ProjectCategory } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";
import { useLocale } from "@/contexts/LocaleContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardVertical from "@/components/ProjectCardVertical";
import ProjectTabs from "@/components/ProjectTabs";
import FAQSection from "@/components/FAQSection";
import Waves from "@/components/Waves";
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

  // Orden destacado: estos se ven primero (Vertice abajo del bloque visible)
  const FEATURED_ORDER = [
    "consorcio-mi-inversion",
    "copiloto-financiero-conversacional",
    "latam-airlines-recap",
    "buk-design-system-escalamiento",
    "literas-mx",
  ];
  // Grilla vertical de 3 columnas (img → título → resto). Volver al layout
  // horizontal antiguo = poner esto en false.
  const VERTICAL_GRID = true;
  const VISIBLE_COUNT = VERTICAL_GRID ? 6 : 4;

  const filteredProjects = useMemo(() => {
    const pd = projects.filter((project) => project.category === "product-design" || project.slug === "literas-mx");
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
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: "#000" }}
        aria-hidden="true"
      >
        <Waves lineColor="rgba(255, 255, 255, 0.16)" backgroundColor="transparent" />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="page-layout">
          <div className="text-center" style={{ paddingTop: '5rem', paddingBottom: '7rem', justifyItems: "center" }}>
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="crimson-text-title mb-6" style={{ fontSize: '2.5rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400, lineHeight: 1.1 }}>
                <span className="sentient-text" style={{ fontFamily: "'Sentient', serif", fontWeight: 300 }}>{t("hero.works")}</span>
                <br />
                {t("")}
              </h1>
              {/* Sublínea de contexto + CTAs: el visitante que no scrollea sabe quién soy y cómo contactarme */}
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.95rem",
                  marginTop: "0.5rem",
                  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {locale === "es"
                  ? "5+ años · Fintech y B2B SaaS · Design systems + diseño con agentes IA · Chile (remoto)"
                  : "5+ years · Fintech & B2B SaaS · Design systems + AI-agent workflows · Chile (remote)"}
              </p>
              <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: "2.25rem" }}>
                <a
                  href="mailto:p.vidal005@gmail.com"
                  className="hover:opacity-70 transition-all duration-300 inline-flex items-center gap-2 rounded-full"
                  style={{
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                    padding: "14px 32px",
                    background: "#FFFFFF",
                    color: "#111111",
                  }}
                >
                  {locale === "es" ? "Hablemos" : "Let's talk"} →
                </a>
              </div>
              {/* Regla de perfiles: /geo (servicios locales, perfil B) queda SIN link
                  desde el portfolio — se llega solo por link directo (ganchos, IG, WhatsApp).
                  El portfolio es 100% perfil A (Agentic Product Designer). */}
            </div>
          </div>
          <div id="projects-anchor" className="h-0 w-0" />
        </div>

        {/* <ProjectTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} /> */}

        <div className="page-layout">
          {/* Encabezado de sección con chip: diferencia trabajos del blog */}
          <div className="max-w-4xl mx-auto px-4" style={{ paddingBottom: "2rem" }}>
            <span
              className="uppercase inline-block rounded-full"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid #333333",
                background: "rgba(255,255,255,0.05)",
                padding: "6px 14px",
                marginBottom: "1.25rem",
              }}
            >
              {locale === "es" ? "Portafolio" : "Portfolio"}
            </span>
            <h2
              style={{
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                lineHeight: 1.2,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              {locale === "es" ? "Trabajos destacados" : "Selected work"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
              {locale === "es"
                ? "Casos de estudio de producto, fintech y design systems."
                : "Product, fintech and design systems case studies."}
            </p>
          </div>
          {VERTICAL_GRID ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
              style={{ paddingTop: "2rem" }}
            >
              {visibleProjects.map((project, i) => (
                <ProjectCardVertical key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="space-y-48 md:space-y-64" style={{ paddingTop: '2rem' }}>
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}

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

        {/* Blog — banda blanca invertida (contraste estilo Fintoc) */}
        <section style={{ background: "#FFFFFF", marginTop: "8rem", paddingTop: "6rem", paddingBottom: "6rem" }}>
          <div className="page-layout">
            <div className="max-w-4xl mx-auto px-4">
              <div style={{ paddingBottom: "2.5rem" }}>
                <span
                  className="uppercase inline-block rounded-full"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: "#555555",
                    border: "1px solid #E5E5E5",
                    background: "#FAFAFA",
                    padding: "6px 14px",
                    marginBottom: "1.25rem",
                  }}
                >
                  Blog · La Comunidad
                </span>
                <h2
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                    lineHeight: 1.2,
                    color: "#111111",
                  }}
                >
                  {locale === "es" ? "Escrito por la IA, aprobado por el humano" : "Written by AI, approved by a human"}
                </h2>
                <p style={{ color: "#666666", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "36rem" }}>
                  {locale === "es"
                    ? "Bitácora de la dupla humano+IA detrás de estos proyectos. Agentic design, casos reales, cero humo."
                    : "Logbook of the human+AI duo behind these projects. Agentic design, real cases, zero hype."}
                </p>
              </div>

              <ul>
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.slug} style={{ borderTop: "1px solid #EAEAEA", padding: "1.75rem 0" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.05em",
                        color: "#999999",
                      }}
                    >
                      {post.dateLabel} · {post.author}
                    </span>
                    <h3
                      style={{
                        fontWeight: 400,
                        fontSize: "1.15rem",
                        lineHeight: 1.35,
                        margin: "0.5rem 0",
                      }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:opacity-60 transition-opacity"
                        style={{ color: "#111111" }}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p style={{ color: "#666666", fontSize: "0.95rem", maxWidth: "40rem" }}>
                      {post.excerpt}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center" style={{ paddingTop: "3rem" }}>
                <Link
                  href="/blog"
                  className="hover:opacity-60 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer rounded-full"
                  style={{
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                    padding: "14px 32px",
                    background: "#111111",
                    color: "#FFFFFF",
                  }}
                >
                  {locale === "es" ? "Ver el blog" : "Read the blog"} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </div>
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
