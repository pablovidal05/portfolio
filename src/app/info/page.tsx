"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { useLocale } from "@/contexts/LocaleContext";

export default function InfoPage() {
  const { locale } = useLocale();
  const bio = profile.bio[locale];
  
  const titles = locale === "es" 
    ? ["Diseñador Digital", "Product Designer", "Diseñador Web"]
    : ["Digital Designer", "Product Designer", "Web Designer"];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 300); // Duración de la animación de salida
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [titles.length]);

  // Reemplazar "Diseñador Digital" o "Digital Designer" con la versión animada
  const renderAnimatedBio = () => {
    const searchText = locale === "es" ? "Diseñador Digital" : "Digital Designer";
    const parts = bio.split(searchText);
    
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span 
            className="inline-block"
            style={{
              transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateY(-10px)' : 'translateY(0)'
            }}
          >
            {titles[currentTitleIndex]}
          </span>
          {parts[1]}
        </>
      );
    }
    return bio;
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="page-layout">
        <div className="page-content">
          {/* Título similar a "Trabajos Seleccionados" */}
          <div className="text-center" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
            <div>
              <h1 className="crimson-text-title" style={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400, lineHeight: 1.1 }}>
                <span className="sentient-text" style={{ fontFamily: "'Sentient', serif", fontStyle: 'italic', fontWeight: 300 }}>
                  {locale === "es" ? "Hola, soy un" : "Hello, I'm a"}
                </span>
                <br />
                {locale === "es" ? "Product Design chileno!" : "Chilean Product Designer!"}
              </h1>
            </div>
          </div>

          {/* Layout de 3 columnas: About | Experience | Contact */}
          <div className="pt-8">
            <div className="grid grid-cols-12 gap-8 md:gap-12">
              {/* Columna izquierda: About */}
              <div className="col-span-12 md:col-span-4" style={{ paddingRight: '48px' }}>
                <div className="mb-6">
                  <h2 className="text-white/60 text-xs uppercase tracking-wider mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    {locale === "es" ? "ACERCA DE" : "ABOUT"}
                  </h2>
                  <div className="h-px bg-[#333333]" style={{ width: '100%', marginBottom: '1.5rem' }}></div>
                </div>
                <div className="space-y-4">
                  <p 
                    className="font-normal text-white leading-relaxed"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {renderAnimatedBio()}
                  </p>
                </div>
              </div>

              {/* Columna central: Experience */}
              <div className="col-span-12 md:col-span-4">
                <div className="mb-6">
                  <h2 className="text-white/60 text-xs uppercase tracking-wider mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    {locale === "es" ? "EXPERIENCIA" : "EXPERIENCE"}
                  </h2>
                  <div className="h-px bg-[#333333]" style={{ width: '100%', marginBottom: '1.5rem' }}></div>
                </div>
                <div className="space-y-4">
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <div className="text-white font-normal mb-1" style={{ fontSize: '0.875rem' }}>
                        {exp.title[locale]}
                      </div>
                      <div className="text-white/60 font-normal" style={{ fontSize: '0.75rem' }}>
                        → {exp.company[locale]}, {exp.date[locale]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna derecha: Contact */}
              <div className="col-span-12 md:col-span-4">
                <div className="mb-6">
                  <h2 className="text-white/60 text-xs uppercase tracking-wider mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    {locale === "es" ? "CONTACTO" : "CONTACT"}
                  </h2>
                  <div className="h-px bg-[#333333]" style={{ width: '60%', marginBottom: '1.5rem' }}></div>
                </div>
                <div className="space-y-4">
                  <div className="mb-4">
                    <div className="text-white/60 font-normal mb-1" style={{ fontSize: '0.75rem' }}>
                      01. {locale === "es" ? "Email" : "Email"}
                    </div>
                    <div className="text-white font-normal" style={{ fontSize: '0.875rem' }}>
                      <a 
                        href={`mailto:${profile.email}`}
                        className="hover:opacity-70 transition-opacity"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-white/60 font-normal mb-1" style={{ fontSize: '0.75rem' }}>
                      02. LinkedIn
                    </div>
                    <div className="text-white font-normal" style={{ fontSize: '0.875rem' }}>
                      <a 
                        href="https://www.linkedin.com/in/pablovidalg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        @pablovidalg
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-white/60 font-normal mb-1" style={{ fontSize: '0.75rem' }}>
                      03. GitHub
                    </div>
                    <div className="text-white font-normal" style={{ fontSize: '0.875rem' }}>
                      <a 
                        href="https://github.com/pablovidal05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        @pablovidal05
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

