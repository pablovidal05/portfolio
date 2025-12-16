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
      es: "Rediseño de la experiencia B2B dentro de un e-commerce de literas, enfocado en mejorar la conversión de compras al por mayor. El sitio funcionaba correctamente para retail, pero presentaba altos niveles de abandono en pedidos de gran volumen debido a fricción en el flujo, falta de claridad y ausencia de un camino B2B definido.\n\nEnfoque de Diseño\n\nLa solución se centró en redefinir cómo se detecta y acompaña la intención B2B dentro de un entorno originalmente pensado para retail. En lugar de empujar a los usuarios de alto volumen hacia el checkout tradicional, el diseño los guía progresivamente hacia flujos asistidos mediante jerarquía visual, CTAs estratégicos y contenido contextual.\nEsto implicó repensar la arquitectura de información, el copy y la estructura de páginas clave, asegurando siempre la viabilidad técnica y la posibilidad de iterar rápidamente en producción.\n\nInvestigación y Toma de Decisiones\n\nA partir del análisis de Google Analytics, Hotjar y conversaciones reales de WhatsApp, identifiqué puntos críticos de abandono, patrones de duda y señales claras de intención de compra al por mayor. Los datos mostraban un alto interés inicial seguido de abandono rápido, principalmente causado por incertidumbre en precios, logística y tiempos de respuesta.\n\nEstos insights guiaron directamente las decisiones de layout, tono de comunicación y ubicación de elementos B2B, priorizando claridad, reducción de fricción y preparación del equipo comercial antes del contacto directo.\n\nDiseñé y estructuré:\n\n- Una landing B2B dedicada, integrada a la arquitectura del e-commerce y pensada para capturar y calificar leads de alto volumen.\n\n- CTAs B2B en páginas de producto para redirigir compradores mayoristas hacia flujos asistidos.\n\n- Un sistema simple de captura de leads, combinando formularios cortos y descarga de catálogo para entregar contexto previo a ventas.\n\n- Componentes modulares en Figma, diseñados para escalar el modelo a futuros casos de uso B2B.\n\n- Un esquema de contenido estructurado que permite gestionar información B2B de forma flexible y reutilizable.\n\n- Todas las soluciones fueron implementadas directamente sobre la plataforma, priorizando velocidad, mantenibilidad y capacidad de iteración basada en datos reales.\n\nColaboración y Restricciones\n\nTrabajé en conjunto con los equipos de ventas y desarrollo, equilibrando necesidades de negocio como precios manuales, descuentos por volumen y logística variable con una experiencia clara y consistente para el usuario. Las decisiones se tomaron priorizando impacto en conversión, viabilidad técnica y rapidez de implementación, asegurando que cada solución pudiera evolucionar sin complejidad operativa adicional.\n\nDurante el primer mes post-implementación, el nuevo flujo B2B permitió convertir pedidos mayoristas que previamente no cerraban, alcanzando una tasa de conversión aproximada del 25% en leads B2B de alto volumen.\n\n- El tiempo promedio de respuesta de cotización se redujo en más de un 50%.\n\n- Los leads llegaron con información clave definida (volumen, ubicación y requerimientos), reduciendo errores manuales en cotizaciones en torno a un 30%.\n\n- Se observó una mejora clara en la continuidad de conversación post-cotización, pasando de abandonos tempranos a interacciones activas orientadas al cierre.\n\nReflexión\n\nEste proyecto me llevó a diseñar más allá de la interfaz, entendiendo cómo el UX impacta directamente en procesos comerciales reales. Diseñar un flujo B2B dentro de un entorno retail fortaleció mi criterio estratégico y mi capacidad de simplificar sistemas complejos.\n\nLa experiencia de diseñar e implementar directamente en producción me permitió crear soluciones que no solo se ven bien, sino que funcionan de forma eficiente, medible y escalable.\n\n👉 https://literas.mx/",
      en: "B2B experience redesign within a bunk beds e-commerce, focused on improving wholesale purchase conversion. The site worked correctly for retail, but showed high abandonment levels in large volume orders due to flow friction, lack of clarity and absence of a defined B2B path.\n\nDesign Approach\n\nThe solution focused on redefining how B2B intent is detected and accompanied within an environment originally designed for retail. Instead of pushing high-volume users toward traditional checkout, the design progressively guides them toward assisted flows through visual hierarchy, strategic CTAs and contextual content.\nThis involved rethinking information architecture, copy and structure of key pages, always ensuring technical feasibility and the ability to iterate quickly in production.\n\nResearch and Decision Making\n\nFrom the analysis of Google Analytics, Hotjar and real WhatsApp conversations, I identified critical abandonment points, doubt patterns and clear signals of wholesale purchase intent. The data showed high initial interest followed by rapid abandonment, mainly caused by uncertainty in prices, logistics and response times.\n\nThese insights directly guided decisions on layout, communication tone and location of B2B elements, prioritizing clarity, friction reduction and preparation of the commercial team before direct contact.\n\nI designed and structured:\n\n- A dedicated B2B landing, integrated into the e-commerce architecture and designed to capture and qualify high-volume leads.\n\n- B2B CTAs on product pages to redirect wholesale buyers toward assisted flows.\n\n- A simple lead capture system, combining short forms and catalog download to provide prior context to sales.\n\n- Modular components in Figma, designed to scale the model to future B2B use cases.\n\n- A structured content scheme that allows managing B2B information flexibly and reusable.\n\n- All solutions were implemented directly on the platform, prioritizing speed, maintainability and ability to iterate based on real data.\n\nCollaboration and Constraints\n\nI worked together with sales and development teams, balancing business needs such as manual pricing, volume discounts and variable logistics with a clear and consistent experience for the user. Decisions were made prioritizing conversion impact, technical feasibility and implementation speed, ensuring each solution could evolve without additional operational complexity.\n\nDuring the first month post-implementation, the new B2B flow allowed converting wholesale orders that previously did not close, reaching an approximate conversion rate of 25% in high-volume B2B leads.\n\n- Average quotation response time was reduced by more than 50%.\n\n- Leads arrived with defined key information (volume, location and requirements), reducing manual errors in quotations by around 30%.\n\n- A clear improvement was observed in post-quotation conversation continuity, moving from early abandonments to active interactions oriented toward closing.\n\nReflection\n\nThis project led me to design beyond the interface, understanding how UX directly impacts real commercial processes. Designing a B2B flow within a retail environment strengthened my strategic judgment and my ability to simplify complex systems.\n\nThe experience of designing and implementing directly in production allowed me to create solutions that not only look good, but work efficiently, measurably and scalably.\n\n👉 https://literas.mx/"
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
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

