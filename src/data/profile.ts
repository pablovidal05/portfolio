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
    es: "Soy Diseñador Digital con base UX/UI y más de 5 años de experiencia en agencias y empresas tecnológicas. Estoy especializado en growth design para web, e-commerce y email marketing, creando sistemas visuales claros, escalables y orientados a conversión. Manejo el ciclo completo: ideación, diseño, implementación y testeo, entregando piezas listas para producción en WordPress, Shopify y Webflow. Trabajo con enfoque en performance (CRO), usabilidad y mejoras continuas basadas en datos.",
    en: "I'm a Digital Designer with a UX/UI foundation and over 5 years of experience in agencies and tech companies. I specialize in growth design for web, e-commerce, and email marketing, creating clear, scalable, conversion-oriented visual systems. I handle the complete cycle: ideation, design, implementation, and testing, delivering production-ready pieces in WordPress, Shopify, and Webflow. I work with a focus on performance (CRO), usability, and continuous data-driven improvements."
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
    "UX/UI Design",
    "Growth Design",
    "E-commerce Design",
    "Email Marketing",
    "WordPress",
    "Shopify",
    "Webflow",
    "CRO",
    "Design Systems",
    "Prototyping",
    "User Research",
    "A/B Testing"
  ]
};

