export type ProjectCategory = "all" | "product-design" | "ecommerce-landings" | "graphic-design";

export const CATEGORY_LABELS: Record<ProjectCategory, { es: string; en: string }> = {
  all: { es: "Todos", en: "All" },
  "product-design": { es: "Diseño de producto", en: "Product Design" },
  "ecommerce-landings": { es: "E-commerce y landings", en: "E-commerce & Landings" },
  "graphic-design": { es: "Diseño gráfico", en: "Graphic Design" },
};

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
  kpiSubtitle?: {
    es: string;
    en: string;
  };
  sectionProblem?: { es: string; en: string };
  contentProblem?: { es: string; en: string };
  sectionContext?: { es: string; en: string };
  contentContext?: { es: string; en: string };
  sectionAction?: { es: string; en: string };
  contentAction?: { es: string; en: string };
  sectionDecision?: { es: string; en: string };
  contentDecision?: { es: string; en: string };
  sectionResult?: { es: string; en: string };
  contentResult?: { es: string; en: string };
  images: string[];
  demoUrl?: string;
  videos?: string[];
  learnMoreUrl?: string;
  hidden?: boolean;
  customSectionMedia?: Record<string, { type: 'video' | 'image'; src: string }[]>;
}

export const allProjects: Project[] = ([
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
      es: "",
      en: ""
    },
    sectionProblem: { es: "Problema", en: "Problem" },
    contentProblem: {
      es: "Comprar literas online es riesgoso para el usuario: ¿cabe en el espacio? ¿es resistente? ¿cuánto cuesta enviarla? Esto generaba alto abandono de carrito, especialmente en compradores de alto volumen (hoteles, escuelas, empresas) que necesitaban múltiples unidades. El e-commerce funcionaba para retail, pero no tenía un camino B2B definido, generando fricción por incertidumbre en precios, logística y tiempos de respuesta.",
      en: "Buying bunk beds online is risky for users: Will it fit the space? Is it durable? How much does shipping cost? This generated high cart abandonment, especially for high-volume buyers (hotels, schools, companies) needing multiple units. The e-commerce worked for retail, but had no defined B2B path, creating friction due to uncertainty in pricing, logistics, and response times."
    },
    sectionContext: { es: "Contexto", en: "Context" },
    contentContext: {
      es: "Producto físico grande con medidas variables, margen sensible a costos de logística, y devoluciones costosas. Se observó que una porción relevante del tráfico mostraba comportamientos típicos de compradores B2B: múltiples visitas a fichas de producto, consultas sobre volúmenes, abandono en checkout después de agregar múltiples unidades. Análisis de comportamiento mostraron alto interés inicial seguido de abandono rápido en la fase de consideración.",
      en: "Large physical product with variable dimensions, margin sensitive to logistics costs, and expensive returns. It was observed that a relevant portion of traffic showed typical B2B buyer behaviors: multiple visits to product pages, inquiries about volumes, abandonment at checkout after adding multiple units. Behavior analysis showed high initial interest followed by rapid abandonment in the consideration phase."
    },
    sectionAction: { es: "Restricciones", en: "Constraints" },
    contentAction: {
      es: "- Mantener la arquitectura existente sin romper la experiencia retail (mayoría del tráfico)\n- Logística externa con costos variables según ubicación y volumen\n- Medidas variables que requieren validación antes de compra\n- Usuarios con poca confianza en compras online de muebles grandes\n- Sin CRM integrado, requiriendo captura de leads simple pero efectiva\n- Implementar sobre plataforma existente, priorizando velocidad sobre sofisticación",
      en: "- Maintain existing architecture without breaking retail experience (majority of traffic)\n- External logistics with variable costs depending on location and volume\n- Variable dimensions requiring validation before purchase\n- Users with low confidence in online purchases of large furniture\n- No integrated CRM, requiring simple but effective lead capture\n- Implement on existing platform, prioritizing speed over sophistication"
    },
    sectionDecision: { es: "Decisión", en: "Decision" },
    contentDecision: {
      es: "Sistema: Diseñé componentes modulares (landing B2B, CTAs estratégicos, formularios de captura) que operan como una capa adicional sin romper el sistema retail existente. La solución intercepta usuarios de alto volumen antes del checkout tradicional, redirigiéndolos hacia procesos asistidos.\n\nTrade-off: Prioricé velocidad de implementación sobre automatización completa. En lugar de construir un sistema de cotización automático (requería integración compleja), opté por un flujo de captura de leads que prepara al equipo comercial con información clave, orientado a reducir tiempo de respuesta según benchmarks de flujos asistidos B2B.\n\nÉtica: Evité patrones oscuros como contadores de stock falsos o precios ocultos. El flujo B2B comunica claramente que los precios son negociables y que el proceso requiere contacto humano, generando confianza antes de la transacción. Mostré costos de envío y logística de forma transparente, sacrificando fricción inicial pero ganando confianza.\n\nPerformance: La estructura prioriza claridad y reduce fricción, guiando al usuario hacia procesos asistidos. Landing B2B dedicada para capturar y calificar leads, CTAs estratégicos en páginas de producto que detectan intención de alto volumen, y sistema de captura con formularios cortos + descarga de catálogo que entrega contexto previo a ventas.\n\nEscalabilidad: Componentes modulares diseñados en Figma permiten adaptar el modelo a futuros casos de uso B2B sin complejidad operativa adicional, facilitando iteración basada en comportamiento observable.",
      en: "System: I designed modular components (B2B landing, strategic CTAs, capture forms) that operate as an additional layer without breaking the existing retail system. The solution intercepts high-volume users before traditional checkout, redirecting them toward assisted processes.\n\nTrade-off: I prioritized implementation speed over complete automation. Instead of building an automatic quotation system (requiring complex integration), I opted for a lead capture flow that prepares the commercial team with key information, oriented to reduce response time according to benchmarks of assisted B2B flows.\n\nEthics: I avoided dark patterns like fake stock counters or hidden prices. The B2B flow clearly communicates that prices are negotiable and the process requires human contact, generating trust before the transaction. I showed shipping and logistics costs transparently, sacrificing initial friction but gaining trust.\n\nPerformance: The structure prioritizes clarity and reduces friction, guiding users toward assisted processes. Dedicated B2B landing to capture and qualify leads, strategic CTAs on product pages that detect high-volume intent, and capture system with short forms + catalog download that provides prior context to sales.\n\nScalability: Modular components designed in Figma allow adapting the model to future B2B use cases without additional operational complexity, facilitating iteration based on observable behavior."
    },
    sectionResult: { es: "Impacto", en: "Impact" },
    contentResult: {
      es: "El diseño estaba orientado a mover métricas de e-commerce según buenas prácticas de flujos asistidos y e-commerce B2B: reducir abandono en pedidos grandes en rangos de 40-50%, aumentar checkout completion en compradores B2B, generar tasa de conversión en rangos de 20-30% en leads de alto volumen según benchmarks del sector, y disminuir tiempo de respuesta de cotización en rangos de 40-60% al preparar mejor al equipo comercial. El diseño fue construido para mover esas métricas y reducir riesgo de devoluciones costosas.\n\n👉 https://literas.mx/",
      en: "The design was oriented to move e-commerce metrics according to best practices of assisted flows and B2B e-commerce: reduce abandonment in large orders in ranges of 40-50%, increase checkout completion in B2B buyers, generate conversion rate in ranges of 20-30% in high-volume leads according to industry benchmarks, and decrease quotation response time in ranges of 40-60% by better preparing the commercial team. The design was built to move those metrics and reduce risk of expensive returns.\n\n👉 https://literas.mx/"
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
      es: "",
      en: ""
    },
    sectionProblem: { es: "Problema", en: "Problem" },
    contentProblem: {
      es: "Heliboss enfrentaba un problema crítico de conversión y revenue: usuarios interesados en cámaras de acción entraban al sitio, no encontraban diferenciación clara frente a alternativas más conocidas (GoPro, Insta360), y salían a comparar fuera del e-commerce sin volver, rompiendo el funnel de conversión. La fuga de tráfico hacia comparadores externos generaba pérdida de leads calificados y oportunidades de revenue en un producto de alto valor.",
      en: "Heliboss faced a critical conversion and revenue issue: users interested in action cameras entered the site, didn't find clear differentiation against more established alternatives (GoPro, Insta360), and left to compare externally without returning, breaking the conversion funnel. Traffic leakage to external comparators generated loss of qualified leads and revenue opportunities in a high-value product."
    },
    sectionContext: { es: "Contexto", en: "Context" },
    contentContext: {
      es: "Heliboss opera como marca e-commerce product-led vendiendo productos premium DJI en un mercado competitivo. La Osmo Action 4 es un producto técnico de alto valor que requiere claridad inmediata para evitar abandono. La landing no es solo una página, sino una capa de control del journey que busca evitar que el usuario salga a comparar fuera del e-commerce, funcionando como sistema anti-fuga de tráfico. El trabajo real es convertir tráfico de lanzamiento en pipeline comercial real, no solo mostrar especificaciones.",
      en: "Heliboss operates as a product-led e-commerce brand selling premium DJI products in a competitive market. The Osmo Action 4 is a high-value technical product requiring immediate clarity to avoid abandonment. The landing is not just a page, but a journey control layer that seeks to prevent users from leaving to compare externally, functioning as an anti-traffic leakage system. The real job is to convert launch traffic into real commercial pipeline, not just display specifications."
    },
    sectionAction: { es: "Restricciones", en: "Constraints" },
    contentAction: {
      es: "- Mantener consistencia visual con identidad de Heliboss y estándares DJI (riesgo de diluir marca)\n- Comunicar especificaciones técnicas sin abrumar (riesgo de rebote en usuarios no técnicos)\n- Diseñar para múltiples dispositivos, priorizando móvil (riesgo de perder conversión móvil)\n- Presupuesto limitado para fotografía de producto (riesgo de no comunicar calidad premium)\n- Tiempo de desarrollo acotado para coincidir con lanzamiento (riesgo de perder oportunidad de mercado)",
      en: "- Maintain visual consistency with Heliboss brand identity and DJI standards (risk of diluting brand)\n- Communicate technical specifications without overwhelming (risk of bounce in non-technical users)\n- Design for multiple devices, prioritizing mobile (risk of losing mobile conversion)\n- Limited budget for product photography (risk of not communicating premium quality)\n- Constrained development time to coincide with product launch (risk of losing market opportunity)"
    },
    sectionDecision: { es: "Decisión", en: "Decision" },
    contentDecision: {
      es: "Sistema de captura de intención: Hero comunica valor inmediato (4K, estabilización avanzada) para capturar atención antes de que el usuario considere comparar externamente. Secciones progresivas resuelven objeciones de forma estructurada: precio → compatibilidad → rendimiento → confianza, reduciendo ansiedad técnica y riesgo percibido de comprar tecnología cara sin contacto humano.\n\nReducción de comparación externa: La estructura prioriza diferenciación clara frente a competidores (GoPro, Insta360) comunicando ventajas técnicas de forma accesible, evitando que el usuario necesite salir del sitio para entender el valor. Múltiples CTAs estratégicos ubicados en momentos de intención para capturar leads antes de que se vayan a comparar.\n\nControl de ansiedad técnica: Información técnica organizada en módulos que responden dudas específicas (compatibilidad, rendimiento, casos de uso) sin sobrecarga, reduciendo el miedo a equivocarse o desperdiciar dinero en una compra de alto valor.\n\nTrade-off: Prioricé claridad y velocidad de carga sobre animaciones pesadas, orientado a no perder usuarios móviles que representan porción relevante del tráfico. La optimización móvil fue diseñada como driver de revenue, no solo como adaptación técnica.\n\nEscalabilidad: Componentes modulares diseñados para facilitar actualización de especificaciones o agregar nuevos productos DJI sin esfuerzo de desarrollo adicional, permitiendo iteración rápida basada en comportamiento observable.",
      en: "Intent capture system: Hero communicates immediate value (4K, advanced stabilization) to capture attention before users consider external comparison. Progressive sections resolve objections in structured manner: price → compatibility → performance → trust, reducing technical anxiety and perceived risk of buying expensive technology without human contact.\n\nExternal comparison reduction: The structure prioritizes clear differentiation against competitors (GoPro, Insta360) communicating technical advantages accessibly, preventing users from needing to leave the site to understand value. Multiple strategic CTAs located at intent moments to capture leads before they go to compare.\n\nTechnical anxiety control: Technical information organized in modules that answer specific doubts (compatibility, performance, use cases) without overload, reducing fear of making mistakes or wasting money on a high-value purchase.\n\nTrade-off: I prioritized clarity and load speed over heavy animations, oriented to not lose mobile users representing a relevant portion of traffic. Mobile optimization was designed as a revenue driver, not just a technical adaptation.\n\nScalability: Modular components designed to facilitate updating specifications or adding new DJI products without additional development effort, allowing rapid iteration based on observable behavior."
    },
    sectionResult: { es: "Impacto", en: "Impact" },
    contentResult: {
      es: "El diseño estaba orientado a mover métricas de conversión según benchmarks de landing pages de productos premium: generar tasa de conversión de visitas a leads en rangos de 3-5% para visitantes calificados, alcanzar CTR en CTAs principales en rangos de 8-12% en la sección hero y 5-8% en secciones secundarias, reducir tasa de rebote en rangos de 25-35% especialmente en la sección hero, y aumentar tiempo en página en rangos de 40-60% indicando mayor engagement y consideración del producto. Estas métricas buscan convertir tráfico de lanzamiento en pipeline comercial real, transformando visitas en leads calificados que el equipo comercial puede cerrar, no solo engagement o tiempo en página.\n\n👉 https://heliboss.cl/",
      en: "The design was oriented to move conversion metrics according to premium product landing page benchmarks: generate visit-to-lead conversion rate in ranges of 3-5% for qualified visitors, achieve CTR on main CTAs in ranges of 8-12% in the hero section and 5-8% in secondary sections, reduce bounce rate in ranges of 25-35% especially in the hero section, and increase time on page in ranges of 40-60% indicating greater engagement and product consideration. These metrics seek to convert launch traffic into real commercial pipeline, transforming visits into qualified leads that the commercial team can close, not just engagement or time on page.\n\n👉 https://heliboss.cl/"
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
      es: "",
      en: ""
    },
    sectionProblem: { es: "Problema", en: "Problem" },
    contentProblem: {
      es: "Mas Analytics enfrentaba baja tasa de conversión y navegación confusa que dificultaba que los usuarios entendieran los servicios. El sitio no lograba convertir visitantes en leads calificados, y la página de digital roadmap carecía de claridad. Los visitantes no tenían un camino claro para entender qué hace Mas Analytics, qué valor ofrece, y cómo funciona su proceso de trabajo.",
      en: "Mas Analytics faced low conversion rate and confusing navigation that made it difficult for users to understand services. The site failed to convert visitors into qualified leads, and the digital roadmap page lacked clarity. Visitors had no clear path to understand what Mas Analytics does, what value it offers, and how its work process functions."
    },
    sectionContext: { es: "Contexto", en: "Context" },
    contentContext: {
      es: "Mas Analytics es una consultoría B2B especializada en Datos e Inteligencia Artificial que opera en un mercado competitivo. Los clientes potenciales incluyen empresas que buscan transformación digital, implementación de soluciones de datos, y estrategias de inteligencia artificial. Las decisiones de diseño se basaron en mejores prácticas de UX para sitios B2B, principios de conversión (CRO), y benchmarking competitivo.",
      en: "Mas Analytics is a B2B consultancy specializing in Data and Artificial Intelligence operating in a competitive market. Potential clients include companies seeking digital transformation, data solution implementation, and artificial intelligence strategies. Design decisions were based on UX best practices for B2B sites, conversion principles (CRO), and competitive benchmarking."
    },
    sectionAction: { es: "Restricciones", en: "Constraints" },
    contentAction: {
      es: "- Mantener la identidad visual establecida de Mas Analytics\n- Implementar el rediseño en WordPress, adaptándose a restricciones del CMS\n- Optimizar para conversión sin comprometer comunicación de servicios complejos\n- Crear experiencia para públicos diversos (técnicos y no técnicos)\n- Performance y velocidad de carga cruciales para sitio B2B moderno",
      en: "- Maintain Mas Analytics' established visual identity\n- Implement redesign in WordPress, adapting to CMS constraints\n- Optimize for conversion without compromising communication of complex services\n- Create experience for diverse audiences (technical and non-technical)\n- Performance and load speed crucial for modern B2B site"
    },
    sectionDecision: { es: "Decisión", en: "Decision" },
    contentDecision: {
      es: "Rediseñé completamente la homepage y digital roadmap siguiendo un proceso estructurado: Discovery (análisis de datos y benchmarking), Wireframing (flujos de información y jerarquía visual), Web Development (implementación en WordPress), y Ongoing Support (mejora continua). Diseñé hero section optimizado para conversión, secciones modulares que priorizan beneficios, sistema de CTAs estratégicamente ubicados, y componentes modulares en WordPress para facilitar mantenimiento.",
      en: "I completely redesigned the homepage and digital roadmap following a structured process: Discovery (data analysis and benchmarking), Wireframing (information flows and visual hierarchy), Web Development (WordPress implementation), and Ongoing Support (continuous improvement). I designed conversion-optimized hero section, modular sections prioritizing benefits, strategically located CTA system, and modular components in WordPress to facilitate maintenance."
    },
    sectionResult: { es: "Impacto", en: "Impact" },
    contentResult: {
      es: "Se estimaba que la estructura clara y múltiples CTAs podrían generar un aumento en la tasa de conversión entre 30-50% para visitantes calificados, reducir la tasa de rebote entre 25-35%, aumentar el tiempo en página entre 40-60%, y alcanzar un CTR entre 5-8% en la homepage.\n\n👉 https://www.masanalytics.com",
      en: "It was estimated that the clear structure and multiple CTAs could generate an increase in conversion rate between 30-50% for qualified visitors, reduce bounce rate by 25-35%, increase time on page by 40-60%, and achieve a CTR between 5-8% on the homepage.\n\n👉 https://www.masanalytics.com"
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
  },
  {
    id: "9",
    slug: "explora-app-ui-kit",
    title: {
      es: "Cómo le dimos a Explora un sistema que permite lanzar features sin empezar desde cero",
      en: "How we gave Explora a system that lets them launch features without starting from scratch"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2023",
    category: "product-design",
    tags: ["UI Kit", "Product Design", "Design Tokens", "DesignOps", "UX/UI"],
    shortDescription: {
      es: "Cada pantalla nueva se construía desde cero. Eso frenaba al equipo y el viajero lo sentía.",
      en: "Every new screen was built from scratch. That slowed the team down and the traveler felt it."
    },
    fullDescription: {
      es: "**Cómo diseñé el sistema que le permitió a Explora lanzar features más rápido y hacer el check-in antes de que el viajero llegara al hotel.**",
      en: "**How I designed the system that allowed Explora to launch features faster and do check-in before the traveler arrived at the hotel.**"
    },
    sectionProblem: {
      es: "El problema: sin sistema común, cada pantalla nueva era deuda nueva",
      en: "The problem: without a common system, every new screen was new debt"
    },
    contentProblem: {
      es: "Explora gestionaba el check-in de sus viajeros en el momento de llegada al hotel. El proceso era lento, propenso a errores y dependía de que el equipo capturara los datos en ese momento. Sin un sistema común entre diseño y desarrollo, cada nueva pantalla se construía desde cero, acumulando inconsistencias que el viajero terminaba sintiendo.",
      en: "Explora managed the check-in of its travelers at the moment of arrival at the hotel. The process was slow, prone to errors, and depended on the team capturing data at that exact moment. Without a common system between design and development, each new screen was built from scratch, accumulating inconsistencies that the traveler ended up feeling."
    },
    sectionContext: {
      es: "Dos usuarios, un mismo problema: nada estaba estandarizado",
      en: "Two users, one problem: nothing was standardized"
    },
    contentContext: {
      es: "El viajero quería llegar al hotel con su proceso ya resuelto. El equipo de desarrollo necesitaba componentes con la nomenclatura de su propio framework para no tener que interpretar cada diseño. Los dos sufrían lo mismo: falta de estándar.",
      en: "The traveler wanted to arrive at the hotel with their process already resolved. The development team needed components with the nomenclature of their own framework so they wouldn't have to interpret each design. Both suffered the same thing: lack of standard."
    },
    sectionAction: {
      es: "Lo que hice: componentes con el lenguaje del equipo, listos para usar sin reuniones",
      en: "What I did: components in the team's language, ready to use without meetings"
    },
    contentAction: {
      es: "Trabajé directamente con el PO y los devs para entender cómo construían. Documenté cada componente con la nomenclatura exacta de su framework para que pudieran implementarlo sin tener que interpretar el diseño. Prioricé los datos críticos del viajero y dejé fuera lo que estaba fuera del backlog aunque hubiera querido incluirlo.",
      en: "I worked directly with the PO and devs to understand how they built. I documented each component with the exact nomenclature of their framework so they could implement it without having to interpret the design. I prioritized the traveler's critical data and left out what was outside the backlog even if I wanted to include it."
    },
    sectionDecision: {
      es: "¿Por qué un sistema de componentes y no seguir diseñando pantalla por pantalla?",
      en: "Why a component system and not continue designing screen by screen?"
    },
    contentDecision: {
      es: "Diseñar pantalla por pantalla funcionaba para una feature. No funcionaba para un producto que necesitaba crecer. Cada pantalla nueva sin sistema era deuda nueva: inconsistencias visuales, interpretaciones distintas entre diseño y desarrollo, y tiempo perdido en reuniones de aclaración. Un sistema de componentes resuelve eso una vez y escala para siempre.",
      en: "Designing screen by screen worked for one feature. It didn't work for a product that needed to grow. Every new screen without a system was new debt: visual inconsistencies, different interpretations between design and development, and time lost in clarification meetings. A component system solves that once and scales forever."
    },
    sectionResult: {
      es: "40% menos tiempo de maquetación. Features que tardaban semanas, ahora en días.",
      en: "40% less layout time. Features that took weeks, now in days."
    },
    contentResult: {
      es: "El equipo dejó de construir pantallas desde cero. Con componentes reutilizables y tokens alineados al código, el tiempo de maquetación se redujo un 40%. El viajero llega al hotel con su proceso completado antes de salir de casa.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile",
      en: "The team stopped building screens from scratch. With reusable components and code-aligned tokens, layout time was reduced by 40%. The traveler arrives at the hotel with their process completed before leaving home.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile"
    },
    images: [
      "/images/explora/explora-1.png",
      "/images/explora/explora-2.png",
      "/images/explora/explora-3.png",
      "/images/explora/explora-4.png",
      "/images/explora/explora-5.png",
      "/images/explora/explora-6.png",
      "/images/explora/explora-7.png",
      "/images/explora/explora-8.png",
      "/images/explora/explora-9.png",
      "/images/explora/explora-10.png"
    ],
    demoUrl: "https://testing-viajero.pgo-explora.com/#/profile",
    learnMoreUrl: "https://testing-viajero.pgo-explora.com/#/profile"
  },
  {
    id: "10",
    slug: "buk-design-system-escalamiento",
    title: {
      es: "Cómo unifiqué el módulo de formularios de Buk antes de que el parche se volviera estándar",
      en: "How I unified Buk's forms module before the patch became the standard"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2025",
    category: "product-design",
    tags: ["Design System", "Product Design", "DesignOps", "UX/UI", "Componentes", "Handoff"],
    kpiSubtitle: {
      es: "72 vistas impactadas · De 8 interpretaciones a 1 sistema · ~9 hrs/semana recuperadas por el equipo",
      en: "72 impacted views · From 8 interpretations to 1 system · ~9 hrs/week recovered by the team"
    },
    shortDescription: {
      es: "El formulario era el componente padre en Buk. Sin reglas claras, cada UX Engineer parcheaba con lo que creía correcto, creando un riesgo para 72 vistas en producción.",
      en: "The form was the parent component in Buk. Without clear rules, each UX Engineer patched it with what they thought was right, creating a risk for 72 live views."
    },
    fullDescription: {
      es: "",
      en: ""
    },
    sectionProblem: {
      es: "El Riesgo",
      en: "The Risk"
    },
    contentProblem: {
      es: "Cualquier cambio podía romper 72 vistas en producción.\n\nEl formulario era el componente padre — sin reglas claras, cada UX Engineer parcheaba con lo que creía correcto.",
      en: "Any change could break 72 live views in production.\n\nThe form was the parent component — without clear rules, each UX Engineer patched it with what they thought was right."
    },
    sectionContext: {
      es: "El Problema",
      en: "The Problem"
    },
    contentContext: {
      es: "Nadie estaba haciendo algo mal a propósito.\n\nEl equipo usaba componentes similares indistintamente porque no existía un criterio documentado de cuándo usar cada uno — y el resultado fueron 8 versiones distintas del mismo patrón conviviendo en producción.\n\nLos 3 componentes afectados vivían todos dentro del mismo formulario padre:\n\n• File Upload\n• Añadir Participantes\n• Opciones Avanzadas",
      en: "Nobody was doing anything wrong on purpose.\n\nThe team used similar components interchangeably because there was no documented criteria on when to use each — resulting in 8 different versions of the same pattern coexisting in production.\n\nThe 3 affected components all lived inside the same parent form:\n\n• File Upload\n• Add Participants\n• Advanced Options"
    },
    sectionAction: {
      es: "Las Decisiones",
      en: "The Decisions"
    },
    contentAction: {
      es: "El desafío no era rediseñar — era documentar qué hace cada componente, cuándo usarlo y qué está permitido dentro de él.\n\nOpciones Avanzadas se incrustaba con cualquier HTML sin límites — normar su contenido y definir que solo vive en formularios completos (nunca modales) fue la decisión clave.\n\nAñadir Participantes y Select2 se veían igual pero tenían lógica distinta: uno filtra por scope y detecta al usuario actual, el otro no. El equipo los usaba indistintamente sin saberlo.\n\nFile Upload no tenía criterio de uso — cada implementación era una interpretación diferente.",
      en: "The challenge was not to redesign — it was to document what each component does, when to use it, and what is allowed inside it.\n\nAdvanced Options was embedded with any HTML without limits — regulating its content and defining that it only lives in complete forms (never modals) was the key decision.\n\nAdd Participants and Select2 looked the same but had different logic: one filters by scope and detects the current user, the other does not. The team used them interchangeably without knowing.\n\nFile Upload had no usage criteria — each implementation was a different interpretation."
    },
    sectionDecision: {
      es: "El Sistema Resultante",
      en: "The Resulting System"
    },
    contentDecision: {
      es: "El entregable no fueron 3 componentes rediseñados.\n\nFue un contrato: qué hace cada uno, cuándo usarlo, qué está permitido dentro y qué no.\n\nAhora el equipo no adivina — busca y encuentra.",
      en: "The deliverable wasn't 3 redesigned components.\n\nIt was a contract: what each does, when to use it, what is allowed inside, and what is not.\n\nNow the team doesn't guess — they search and find."
    },
    sectionResult: {
      es: "Resultado",
      en: "Result"
    },
    contentResult: {
      es: "72 vistas con criterio unificado\nDe 8 interpretaciones a 1 sistema documentado\n~9 hrs/semana que el equipo deja de perder adivinando\n\n ",
      en: "72 views with unified criteria\nFrom 8 interpretations to 1 documented system\n~9 hrs/week the team stops losing by guessing\n\nView documentation in Figma →"
    },
    images: [
      "/images/buk/buk-3.png",
      "/images/buk/buk-4.png",
      "/images/buk/buk-5.png",
      "/images/buk/buk-6.png",
      "/images/buk/buk-7.png",
      "/images/buk/buk-8.png"
    ],
    videos: [
      "/images/buk/buk-1.mp4"
    ],
    customSectionMedia: {
      problem: [
        { type: 'video', src: '/images/buk/buk-2.webm' },
        { type: 'image', src: '/images/buk/buk-5.png' }
      ],
      context: [
        { type: 'image', src: '/images/buk/buk-6.png' },
        { type: 'video', src: '/images/buk/buk-3.webm' }
      ],
      action: [
        { type: 'image', src: '/images/buk/buk-3.png' },
        { type: 'image', src: '/images/buk/buk-7.png' }
      ],
      decision: [
        { type: 'image', src: '/images/buk/buk-4.png' },
        { type: 'image', src: '/images/buk/buk-8.png' }
      ],
      result: [
        { type: 'video', src: '/images/buk/buk-8.webm' }
      ]
    }
  },
  {
    id: "11",
    slug: "latam-airlines-recap",
    title: {
      es: "Cómo ayudé a LATAM a demostrarle valor a 1.600 empresas en el momento exacto que importaba",
      en: "How I helped LATAM demonstrate value to 1,600 companies at the exact moment it mattered"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2026",
    category: "product-design",
    tags: ["Product Design", "Data Visualization", "B2B", "Salesforce", "Design System"],
    shortDescription: {
      es: "El valor del contrato se perdía en un correo ilegible. 1.600 gerentes necesitaban verlo claro justo cuando decidían renovar.",
      en: "Contract value was getting lost in an unreadable email. 1,600 managers needed to see it clearly right when they decided to renew."
    },
    fullDescription: {
      es: "**Cada año LATAM renueva contratos con 1.600 empresas. Diseñé el sistema que hacía que ese momento fuera una decisión fácil.**",
      en: "**Every year LATAM renews contracts with 1,600 companies. I designed the system that made that moment an easy decision.**"
    },
    sectionProblem: {
      es: "El riesgo: el valor real del servicio se perdía en el formato",
      en: "The risk: the real value of the service was getting lost in the format"
    },
    contentProblem: {
      es: "Cada año LATAM necesita renovar convenios con sus clientes corporativos. Los gerentes no siempre tienen claro el beneficio obtenido, lo que hace más laborioso el convencimiento y la negociación. La solución que tenían era enviar toda la información por correo, pero la cantidad de datos era tal que iba a quedar como una imagen gigante, estática e imposible de navegar.",
      en: "Every year LATAM needs to renew agreements with its corporate clients. Managers don't always clearly see the benefit obtained, making convincing and negotiating harder. The solution they had was to send all the information by email, but the amount of data was such that it would end up as a giant, static image impossible to navigate."
    },
    sectionContext: {
      es: "Lo que quería el gerente: ver el valor de su contrato sin tener que pedirle reportes a nadie",
      en: "What the manager wanted: see the value of their contract without asking anyone for reports"
    },
    contentContext: {
      es: "El usuario era un gerente corporativo que tenía que responder una pregunta ante su propia jefatura: ¿valió la pena tener a LATAM como proveedor de viajes este año? Para eso necesitaba ver ahorros, beneficios y comportamiento de viaje de forma clara, rápida y desde cualquier dispositivo.",
      en: "The user was a corporate manager who had to answer a question to their own leadership: was it worth having LATAM as a travel provider this year? For that, they needed to see savings, benefits, and travel behavior clearly, quickly, and from any device."
    },
    sectionAction: {
      es: "Lo que hice: jerarquía clara, componentes listos para 1.600 empresas distintas",
      en: "What I did: clear hierarchy, components ready for 1,600 different companies"
    },
    contentAction: {
      es: "Me reuní con el PO, el equipo de data y desarrollo para entender qué información era crítica para el negocio. Definí la jerarquía de contenidos junto al PO: primero el ahorro e impacto, luego los beneficios clave, luego el detalle. Diseñé componentes modulares y reutilizables en Figma, asegurando que cada variable del diseño correspondiera a las variables reales en Salesforce. Participé en dailies ajustando decisiones de diseño según las restricciones técnicas de la plataforma.",
      en: "I met with the PO, data team, and development to understand what information was critical for the business. I defined the content hierarchy with the PO: first savings and impact, then key benefits, then the details. I designed modular, reusable components in Figma, ensuring each design variable corresponded to real Salesforce variables. I participated in dailies adjusting design decisions based on the platform's technical constraints."
    },
    sectionDecision: {
      es: "¿Por qué una landing y no un correo?",
      en: "Why a landing page and not an email?"
    },
    contentDecision: {
      es: "Un correo con toda esa información iba a quedar como una imagen gigante, estática e ilegible. Una landing personalizada por cliente permitía navegar, filtrar y encontrar el dato que importaba en segundos. La restricción era Salesforce Marketing Cloud, que limitaba lo que se podía hacer dinámicamente. Trabajamos dentro de eso sin perder claridad ejecutiva.",
      en: "An email with all that information would end up as a giant, static, unreadable image. A client-personalized landing page allowed navigating, filtering, and finding the relevant data in seconds. The constraint was Salesforce Marketing Cloud, which limited what could be done dynamically. We worked within that without losing executive clarity."
    },
    sectionResult: {
      es: "1.600 reportes personalizados entregados sin intervención manual. Cero trabajo repetido.",
      en: "1,600 personalized reports delivered without manual intervention. Zero repeated work."
    },
    contentResult: {
      es: "Cada gerente accedió a su propio reporte en vivo, desde cualquier dispositivo, justo cuando tenía que decidir si renovar. El equipo técnico no tuvo que tocar nada manualmente para ninguna de las 1.600 empresas.",
      en: "Each manager accessed their own live report, from any device, right when they had to decide whether to renew. The technical team didn't have to manually touch anything for any of the 1,600 companies."
    },
    images: [
      "/images/latam/latam-1.png",
      "/images/latam/latam-2.png",
      "/images/latam/latam-3.png",
      "/images/latam/latam-4.png",
      "/images/latam/latam-5.png",
      "/images/latam/latam-6.png",
      "/images/latam/latam-7.png",
      "/images/latam/latam-8.png",
      "/images/latam/latam-9.png",
      "/images/latam/latam-10.png"
    ]
  },
  {
    id: "12",
    slug: "vertice",
    title: {
      es: "En Torres del Paine no hay margen de error. Cómo le dimos al equipo de Vértice visibilidad total de cada viajero en el circuito.",
      en: "In Torres del Paine there is no margin for error. How we gave the Vértice team total visibility of every traveler on the circuit."
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2024",
    category: "product-design",
    tags: ["UX/UI", "Web Check-in", "Product Design", "Torres del Paine"],
    hidden: true,
    shortDescription: {
      es: "El 33% del circuito quedaba sin datos registrados. Un accidente lo dejó en evidencia.",
      en: "33% of the circuit had no registered data. An accident made it evident."
    },
    fullDescription: {
      es: "**En Torres del Paine no hay margen de error. Cómo le dimos al equipo de Vértice visibilidad total de cada viajero en el circuito.**",
      en: "**In Torres del Paine there is no margin for error. How we gave the Vértice team total visibility of every traveler on the circuit.**"
    },
    sectionProblem: {
      es: "El riesgo: el 33% del circuito sin datos y una obligación legal sin cumplir",
      en: "The risk: 33% of the circuit without data and a legal obligation unmet"
    },
    contentProblem: {
      es: "Los operadores turísticos en Torres del Paine tienen una obligación legal: conocer en todo momento quién está en el circuito, en qué estado y qué necesita. El sistema anterior tenía 6 puntos de registro en el recorrido pero solo 4 se completaban, dejando un 33% del circuito sin datos mapeados. La información se pedía a mano en cada sector, se repetía y nadie la completaba. Cuando ocurrió un accidente, el equipo no pudo responder legalmente porque les faltaba información.",
      en: "Tour operators in Torres del Paine have a legal obligation: to know at all times who is on the circuit, in what condition, and what they need. The previous system had 6 registration points along the route, but only 4 were completed, leaving 33% of the circuit without mapped data. Information was requested by hand in each sector, repeated, and no one completed it. When an accident occurred, the team could not respond legally because they lacked information."
    },
    sectionContext: {
      es: "Lo que necesitaba el operador: saber quién está en el circuito, en qué estado, antes de salir",
      en: "What the operator needed: know who is on the circuit, in what condition, before leaving"
    },
    contentContext: {
      es: "El operador necesitaba salir al circuito con certeza. El viajero necesitaba saber que alguien tenía su información si algo salía mal. Los dos dependían de que los datos llegaran completos antes de comenzar.",
      en: "The operator needed to leave for the circuit with certainty. The traveler needed to know that someone had their information if something went wrong. Both depended on data arriving complete before starting."
    },
    sectionAction: {
      es: "Lo que hice: datos críticos obligatorios, flujo que no avanza sin ellos",
      en: "What I did: mandatory critical data, a flow that doesn't advance without them"
    },
    contentAction: {
      es: "Trabajé con la PO para entender qué datos faltaron en el accidente y por qué. Clasifiqué los campos en críticos, como alergias, medicamentos y contactos de emergencia, y secundarios. Diseñé el flujo en Figma asegurando que los datos críticos no pudieran omitirse. El sistema no avanza sin ellos. Coordiné con desarrollo para alinear la nomenclatura del diseño con la del framework desde el inicio.",
      en: "I worked with the PO to understand what data was missing during the accident and why. I classified fields into critical, such as allergies, medications, and emergency contacts, and secondary. I designed the flow in Figma ensuring critical data could not be omitted. The system doesn't advance without them. I coordinated with development to align design nomenclature with the framework from the start."
    },
    sectionDecision: {
      es: "¿Por qué un web check-in previo y no el registro en terreno?",
      en: "Why a prior web check-in and not on-site registration?"
    },
    contentDecision: {
      es: "El registro en terreno dependía de que alguien lo pidiera, de que el viajero lo completara y de que el sistema lo guardara. Tres puntos de falla. Un web check-in previo elimina los tres: el viajero completa su información antes de llegar, con tiempo, sin presión y desde cualquier dispositivo. El operador sale al circuito con todo ya resuelto.",
      en: "On-site registration depended on someone requesting it, the traveler completing it, and the system saving it. Three failure points. A prior web check-in eliminates all three: the traveler completes their information before arriving, with time, without pressure, and from any device. The operator leaves for the circuit with everything already resolved."
    },
    sectionResult: {
      es: "De 4 de 6 puntos registrados a cobertura total. Nadie sale al circuito sin sus datos completos.",
      en: "From 4 out of 6 registered points to total coverage. No one leaves for the circuit without complete data."
    },
    contentResult: {
      es: "El proceso anterior completaba solo 4 de 6 puntos de registro, dejando un 33% del circuito sin datos mapeados. Con el web check-in, los datos críticos se recopilan antes de llegar, garantizando cobertura total desde el inicio. Nadie entra al circuito sin la información de seguridad obligatoria completa. El sistema está en desarrollo para la primera temporada.",
      en: "The previous process completed only 4 out of 6 registration points, leaving 33% of the circuit without mapped data. With the web check-in, critical data is collected before arrival, ensuring total coverage from the start. No one enters the circuit without complete mandatory safety information. The system is in development for the first season."
    },
    images: []
  }
] as Project[]).sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));

export const projects: Project[] = allProjects.filter(p => !p.hidden);

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return allProjects.map((project) => project.slug);
}
