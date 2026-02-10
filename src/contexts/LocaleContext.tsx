"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, defaultLocale } from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const translations: Record<Locale, Record<string, string>> = {
  es: {
    "nav.home": "Inicio",
    "nav.info": "Info",
    "nav.projects": "Proyectos",
    "hero.selected": "",
    "hero.works": "Product Designer para productos digitales B2B y plataformas SaaS",
    "project.readMore": "Leer Más",
    "project.watch": "Ver",
    "info.title": "Info",
    "info.experience": "Experiencia",
    "info.skills": "Habilidades",
    "footer.contact": "Contacto",
    "breadcrumbs.home": "Inicio",
    "breadcrumbs.projects": "Proyectos",
    "modal.close": "Cerrar"
  },
  en: {
    "nav.home": "Home",
    "nav.info": "Info",
    "nav.projects": "Projects",
    "hero.selected": "Scalable design solutions",
    "hero.works": "Product Design & Design Systems",
    "hero.shortDescription": "Designer specialized in B2B conversion optimization and systemic scalability. Design aligned with business goals and engineering technical language.",
    "project.readMore": "Read More",
    "project.watch": "Watch",
    "info.title": "Info",
    "info.experience": "Experience",
    "info.skills": "Skills",
    "footer.contact": "Contact",
    "breadcrumbs.home": "Home",
    "breadcrumbs.projects": "Projects",
    "modal.close": "Close"
  }
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update URL without page reload
    const path = window.location.pathname;
    if (newLocale === defaultLocale) {
      window.history.pushState({}, "", path.replace(/^\/(es|en)/, "") || "/");
    } else {
      const cleanPath = path.replace(/^\/(es|en)/, "") || "/";
      window.history.pushState({}, "", `/${newLocale}${cleanPath}`);
    }
  };

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

