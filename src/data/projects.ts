export type ProjectCategory = "all" | "product-design" | "ecommerce-landings" | "graphic-design";

export interface Project {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  role: {
    es: string;
    en: string;
  };
  year: string;
  category: ProjectCategory;
  tags: string[];
  shortDescription: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  images: string[];
  demoUrl?: string;
  videos?: string[];
  learnMoreUrl?: string;
}

export const projects: Project[] = [
  {
    id: "6",
    slug: "literas-mx",
    title: {
      es: "Literas.mx",
      en: "Literas.mx"
    },
    role: {
      es: "Design Lead",
      en: "Design Lead"
    },
    year: "2025",
    category: "ecommerce-landings",
    tags: ["UX/UI", "E-commerce", "B2B", "CRO", "Growth Design"],
    shortDescription: {
      es: "Rediseño de la experiencia B2B dentro de un e-commerce de literas, enfocado en mejorar la conversión de compras al por mayor. El sitio funcionaba bien para retail, pero presentaba altos abandonos en pedidos de gran volumen.",
      en: "B2B experience redesign within a bunk beds e-commerce, focused on improving wholesale purchase conversion. The site worked well for retail, but showed high abandonment in large volume orders."
    },
    fullDescription: {
      es: "Problema\n\nEl e-commerce funcionaba bien para retail, pero los compradores de alto volumen (hoteles, escuelas, empresas) abandonaban frecuentemente sus pedidos. No existía un camino B2B definido, generando fricción por incertidumbre en precios, logística y tiempos de respuesta.\n\nContexto\n\nLiteras.mx opera en un mercado donde el 30% del tráfico corresponde a compradores B2B con pedidos de mayor valor que requieren procesos personalizados. Análisis de Google Analytics y Hotjar mostraron alto interés inicial seguido de abandono rápido.\n\nRestricciones\n\n- Mantener la arquitectura existente sin romper la experiencia retail\n- Integrar flujo B2B de forma natural\n- Equilibrar precios manuales y logística variable con UX clara\n- Implementar sobre plataforma existente, priorizando velocidad\n- Sin CRM integrado, requiriendo captura de leads simple\n\nDecisión\n\nDiseñé un flujo dedicado que detecta y acompaña la intención B2B: landing dedicada para capturar y calificar leads, CTAs estratégicos en páginas de producto, y sistema de captura con formularios cortos y descarga de catálogo. La estructura prioriza claridad y reduce fricción, guiando al usuario hacia procesos asistidos en lugar del checkout tradicional.\n\nImpacto\n\nSe estimaba que el flujo dedicado podría generar una tasa de conversión entre 20-30% en leads B2B de alto volumen, reducir el abandono en pedidos grandes entre 40-50%, y disminuir el tiempo de respuesta de cotización entre 40-60% al preparar mejor al equipo comercial con información clave definida desde el inicio.\n\n👉 https://literas.mx/",
      en: "Problem\n\nThe e-commerce worked well for retail, but high-volume buyers (hotels, schools, companies) frequently abandoned their orders. There was no defined B2B path, creating friction due to uncertainty in pricing, logistics, and response times.\n\nContext\n\nLiteras.mx operates in a market where 30% of traffic corresponds to B2B buyers with higher value orders requiring personalized processes. Google Analytics and Hotjar analysis showed high initial interest followed by rapid abandonment.\n\nConstraints\n\n- Maintain existing architecture without breaking retail experience\n- Integrate B2B flow naturally\n- Balance manual pricing and variable logistics with clear UX\n- Implement on existing platform, prioritizing speed\n- No integrated CRM, requiring simple lead capture\n\nDecision\n\nI designed a dedicated flow that detects and accompanies B2B intent: dedicated landing to capture and qualify leads, strategic CTAs on product pages, and capture system with short forms and catalog download. The structure prioritizes clarity and reduces friction, guiding users toward assisted processes instead of traditional checkout.\n\nImpact\n\nIt was estimated that the dedicated flow could generate a conversion rate between 20-30% in high-volume B2B leads, reduce abandonment in large orders by 40-50%, and decrease quotation response time by 40-60% by better preparing the commercial team with key information defined from the start.\n\n👉 https://literas.mx/"
    },
    images: [
      "/images/literas/literas-1.jpg",
      "/images/literas/literas-2.png",
      "/images/literas/literas-3.png",
      "/images/literas/literas-4.png",
      "/images/literas/literas-5.png",
      "/images/literas/literas-6.png",
      "/images/literas/literas-7.png"
    ],
    videos: [
      "/videos/literas/literas-hero.mp4",
      "/videos/literas/literas-2.mp4"
    ]
  },
  {
    id: "8",
    slug: "heliboss-landing-page",
    title: {
      es: "Heliboss Landing Page",
      en: "Heliboss Landing Page"
    },
    role: {
      es: "UI/UX Designer",
      en: "UI/UX Designer"
    },
    year: "2023",
    category: "ecommerce-landings",
    tags: ["Web Design", "UI/UX", "Landing Page", "Product Design", "CRO"],
    shortDescription: {
      es: "Página de producto para DJI Osmo Action 4 desarrollada para Heliboss, proveedor líder de drones industriales en Chile. Interfaz moderna que presenta las características técnicas y casos de uso de esta cámara de acción de alto rendimiento, optimizada para conversión y experiencia de usuario fluida.",
      en: "Product page for DJI Osmo Action 4 developed for Heliboss, a leading provider of industrial drones in Chile. Modern interface presenting the technical features and use cases of this high-performance action camera, optimized for conversion and smooth user experience."
    },
    fullDescription: {
      es: "Problema\n\nHeliboss necesitaba lanzar la Osmo Action 4 en el mercado chileno, pero las especificaciones técnicas complejas (sensor CMOS 1/1.3\", grabación 4K a 120fps, estabilización RockSteady 3.0) generaban fricción cognitiva y no comunicaban el valor del producto de forma accesible. Sin una página dedicada, los visitantes no tenían un camino claro para entender las capacidades de la cámara o solicitar cotización.\n\nContexto\n\nHeliboss opera en un mercado B2B y B2C donde los productos DJI son considerados premium. La Osmo Action 4 compite con cámaras establecidas (GoPro, Insta360) y requiere diferenciarse a través de especificaciones técnicas superiores. El público objetivo incluye profesionales de video, empresas con aplicaciones industriales y entusiastas de deportes extremos.\n\nRestricciones\n\n- Mantener consistencia visual con identidad de Heliboss y estándares DJI\n- Comunicar especificaciones técnicas sin abrumar a usuarios no técnicos\n- Diseñar para múltiples dispositivos, priorizando móvil\n- Presupuesto limitado para fotografía de producto\n- Tiempo de desarrollo acotado para coincidir con lanzamiento\n\nDecisión\n\nEstructuré la página siguiendo principios de escaneo visual (F-pattern y Z-pattern), organizando contenido progresivo desde valor principal hasta detalles técnicos. Desarrollé un sistema visual con negros profundos y acentos vibrantes, priorizando la cámara como protagonista. Implementé microinteracciones sutiles y múltiples CTAs estratégicos, optimizando la experiencia móvil para que especificaciones técnicas fueran accesibles y escaneables.\n\nImpacto\n\nSe estimaba que la estructura clara y múltiples CTAs podrían generar una tasa de conversión entre 3-5% para visitantes calificados, aumentar el tiempo en página entre 40-60%, reducir la tasa de rebote entre 25-35%, y alcanzar un CTR entre 8-12% en la sección hero.\n\n👉 https://heliboss.cl/",
      en: "Problem\n\nHeliboss needed to launch the Osmo Action 4 in the Chilean market, but complex technical specifications (1/1.3\" CMOS sensor, 4K recording at 120fps, RockSteady 3.0 stabilization) created cognitive friction and failed to communicate the product's value accessibly. Without a dedicated page, visitors had no clear path to understand the camera's capabilities or request a quotation.\n\nContext\n\nHeliboss operates in a B2B and B2C market where DJI products are considered premium. The Osmo Action 4 competes with established cameras (GoPro, Insta360) and needs to differentiate through superior technical specifications. The target audience includes video professionals, companies with industrial applications, and extreme sports enthusiasts.\n\nConstraints\n\n- Maintain visual consistency with Heliboss brand identity and DJI standards\n- Communicate technical specifications without overwhelming non-technical users\n- Design for multiple devices, prioritizing mobile\n- Limited budget for product photography\n- Constrained development time to coincide with product launch\n\nDecision\n\nI structured the page following visual scanning principles (F-pattern and Z-pattern), organizing progressive content from main value to technical details. I developed a visual system with deep blacks and vibrant accents, prioritizing the camera as protagonist. I implemented subtle microinteractions and multiple strategic CTAs, optimizing mobile experience so technical specifications were accessible and scannable.\n\nImpact\n\nIt was estimated that the clear structure and multiple CTAs could generate a conversion rate between 3-5% for qualified visitors, increase time on page by 40-60%, reduce bounce rate by 25-35%, and achieve a CTR between 8-12% in the hero section.\n\n👉 https://heliboss.cl/"
    },
    images: [
      "/images/heliboss/heli-1.jpg",
      "/images/heliboss/heli-2.jpg",
      "/images/heliboss/heli-3.jpg",
      "/images/heliboss/heli-4.jpg",
      "/images/heliboss/heli-5.jpg",
      "/images/heliboss/heli-6.jpg",
      "/images/heliboss/heli-7.jpg",
      "/images/heliboss/heli-8.jpg",
      "/images/heliboss/heli-9.jpg"
    ],
    videos: [],
    demoUrl: "https://heliboss.cl",
    learnMoreUrl: "https://heliboss.cl"
  },
  {
    id: "7",
    slug: "mas-analytics-landing-page",
    title: {
      es: "Mas Analytics Landing Page",
      en: "Mas Analytics Landing Page"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2024",
    category: "ecommerce-landings",
    tags: ["UX/UI", "CRO", "WordPress", "Landing Page", "Growth Design"],
    shortDescription: {
      es: "Rediseño de conversión para Mas Analytics, consultoría especializada en Datos e Inteligencia Artificial. Rediseño completo de homepage y digital roadmap en WordPress, enfocado en optimizar la tasa de conversión y mejorar la experiencia de usuario.",
      en: "Conversion-focused redesign for Mas Analytics, a consultancy specializing in Data and Artificial Intelligence. Complete redesign of homepage and digital roadmap in WordPress, focused on optimizing conversion rate and improving user experience."
    },
    fullDescription: {
      es: "Problema\n\nMas Analytics enfrentaba baja tasa de conversión y navegación confusa que dificultaba que los usuarios entendieran los servicios. El sitio no lograba convertir visitantes en leads calificados, y la página de digital roadmap carecía de claridad. Los visitantes no tenían un camino claro para entender qué hace Mas Analytics, qué valor ofrece, y cómo funciona su proceso de trabajo.\n\nContexto\n\nMas Analytics es una consultoría B2B especializada en Datos e Inteligencia Artificial que opera en un mercado competitivo. Los clientes potenciales incluyen empresas que buscan transformación digital, implementación de soluciones de datos, y estrategias de inteligencia artificial. Las decisiones de diseño se basaron en mejores prácticas de UX para sitios B2B, principios de conversión (CRO), y benchmarking competitivo.\n\nRestricciones\n\n- Mantener la identidad visual establecida de Mas Analytics\n- Implementar el rediseño en WordPress, adaptándose a restricciones del CMS\n- Optimizar para conversión sin comprometer comunicación de servicios complejos\n- Crear experiencia para públicos diversos (técnicos y no técnicos)\n- Performance y velocidad de carga cruciales para sitio B2B moderno\n\nDecisión\n\nRediseñé completamente la homepage y digital roadmap siguiendo un proceso estructurado: Discovery (análisis de datos y benchmarking), Wireframing (flujos de información y jerarquía visual), Web Development (implementación en WordPress), y Ongoing Support (mejora continua). Diseñé hero section optimizado para conversión, secciones modulares que priorizan beneficios, sistema de CTAs estratégicamente ubicados, y componentes modulares en WordPress para facilitar mantenimiento.\n\nImpacto\n\nSe estimaba que la estructura clara y múltiples CTAs podrían generar un aumento en la tasa de conversión entre 30-50% para visitantes calificados, reducir la tasa de rebote entre 25-35%, aumentar el tiempo en página entre 40-60%, y alcanzar un CTR entre 5-8% en la homepage.\n\n👉 https://www.masanalytics.com",
      en: "Problem\n\nMas Analytics faced low conversion rate and confusing navigation that made it difficult for users to understand services. The site failed to convert visitors into qualified leads, and the digital roadmap page lacked clarity. Visitors had no clear path to understand what Mas Analytics does, what value it offers, and how its work process functions.\n\nContext\n\nMas Analytics is a B2B consultancy specializing in Data and Artificial Intelligence operating in a competitive market. Potential clients include companies seeking digital transformation, data solution implementation, and artificial intelligence strategies. Design decisions were based on UX best practices for B2B sites, conversion principles (CRO), and competitive benchmarking.\n\nConstraints\n\n- Maintain Mas Analytics' established visual identity\n- Implement redesign in WordPress, adapting to CMS constraints\n- Optimize for conversion without compromising communication of complex services\n- Create experience for diverse audiences (technical and non-technical)\n- Performance and load speed crucial for modern B2B site\n\nDecision\n\nI completely redesigned the homepage and digital roadmap following a structured process: Discovery (data analysis and benchmarking), Wireframing (information flows and visual hierarchy), Web Development (WordPress implementation), and Ongoing Support (continuous improvement). I designed conversion-optimized hero section, modular sections prioritizing benefits, strategically located CTA system, and modular components in WordPress to facilitate maintenance.\n\nImpact\n\nIt was estimated that the clear structure and multiple CTAs could generate an increase in conversion rate between 30-50% for qualified visitors, reduce bounce rate by 25-35%, increase time on page by 40-60%, and achieve a CTR between 5-8% on the homepage.\n\n👉 https://www.masanalytics.com"
    },
    images: [
      "/images/mas-analytics/mas-1.jpg",
      "/images/mas-analytics/mas-2.jpg",
      "/images/mas-analytics/mas-3.jpg",
      "/images/mas-analytics/mas-4.jpg",
      "/images/mas-analytics/mas-5.jpg",
      "/images/mas-analytics/mas-7.jpg",
      "/images/mas-analytics/mas-8.jpg"
    ],
    demoUrl: "https://www.masanalytics.com",
    learnMoreUrl: "https://www.masanalytics.com"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

