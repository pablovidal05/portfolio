export interface Experience {
  title: {
    es: string;
    en: string;
  };
  company: {
    es: string;
    en: string;
  };
  date: {
    es: string;
    en: string;
  };
}

export interface Profile {
  name: {
    es: string;
    en: string;
  };
  bio: {
    es: string;
    en: string;
  };
  email: string;
  experience: Experience[];
  skills: string[];
}

export const profile: Profile = {
  name: {
    es: "Pablo Vidal",
    en: "Pablo Vidal"
  },
  bio: {
    es: "Soy Product Designer con más de 5 años de experiencia en agencias y empresas tecnológicas. Me especializo en design systems, flujos transaccionales y optimización de conversión en productos B2B y e-commerce: he escalado design systems en SaaS, rediseñado experiencias de compra de alto volumen y diseñado interfaces para plataformas de datos. Manejo el ciclo completo —ideación, diseño, implementación y testeo— en colaboración directa con ingeniería, con foco en performance, usabilidad y decisiones basadas en datos. Hoy mi foco está en productos financieros: convertir sistemas complejos en experiencias simples y confiables.",
    en: "I'm a Product Designer with over 5 years of experience in agencies and tech companies. I specialize in design systems, transactional flows, and conversion optimization for B2B and e-commerce products: I've scaled design systems in SaaS, redesigned high-volume purchase experiences, and designed interfaces for data platforms. I handle the complete cycle —ideation, design, implementation, and testing— working directly with engineering, focused on performance, usability, and data-driven decisions. Today my focus is financial products: turning complex systems into simple, trustworthy experiences."
  },
  email: "p.vidal005@gmail.com",
  experience: [
    {
      title: {
        es: "UX Specialist",
        en: "UX Specialist"
      },
      company: {
        es: "McCann",
        en: "McCann"
      },
      date: {
        es: "2025",
        en: "2025"
      }
    },
    {
      title: {
        es: "Product Designer",
        en: "Product Designer"
      },
      company: {
        es: "Eleva",
        en: "Eleva"
      },
      date: {
        es: "2024 - 2025",
        en: "2024 - 2025"
      }
    },
    {
      title: {
        es: "UX UI Designer",
        en: "UX UI Designer"
      },
      company: {
        es: "Agencia Cebra",
        en: "Agencia Cebra"
      },
      date: {
        es: "2023 - 2024",
        en: "2023 - 2024"
      }
    }
  ],
  skills: [
    "Product Design",
    "Design Systems",
    "UX/UI Design",
    "User Research",
    "Prototyping",
    "A/B Testing",
    "CRO",
    "Growth Design",
    "AI Workflows (Claude Code)",
    "E-commerce Design",
    "Shopify",
    "Webflow"
  ]
};

