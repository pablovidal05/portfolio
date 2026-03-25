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
      es: "Explora App UI Kit",
      en: "Explora App UI Kit"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2023",
    category: "product-design",
    tags: ["UI Kit", "Product Design", "Design Tokens", "DesignOps", "UX/UI"],
    shortDescription: {
      es: "UI Kit para la app Explora que unificó lenguaje entre diseño y desarrollo, redujo la deuda visual y funcional y aceleró la entrega de nuevas funcionalidades mediante componentes reutilizables y design tokens alineados al código.",
      en: "UI Kit for the Explora app that unified language between design and engineering, reduced visual and functional debt, and accelerated feature delivery through reusable components and code-aligned design tokens."
    },
    fullDescription: {
      es: "**Cómo diseñé el sistema que le permitió a Explora hacer el check-in antes de que el viajero llegara al hotel.**",
      en: "**How I designed the system that allowed Explora to do check-in before the traveler arrived at the hotel.**"
    },
    sectionProblem: {
      es: "¿Cómo hacer que el viajero llegue al hotel con su proceso ya resuelto?",
      en: "How to get the traveler to arrive at the hotel with their process already resolved?"
    },
    contentProblem: {
      es: "Explora gestionaba el check-in de sus viajeros en el momento de llegada al hotel. El proceso era lento, propenso a errores y dependía de que el equipo capturara los datos en ese momento. Sin un sistema común entre diseño y desarrollo, cada nueva pantalla se construía desde cero, acumulando inconsistencias que el viajero terminaba sintiendo.",
      en: "Explora managed the check-in of its travelers at the moment of arrival at the hotel. The process was slow, prone to errors, and depended on the team capturing data at that exact moment. Without a common system between design and development, each new screen was built from scratch, accumulating inconsistencies that the traveler ended up feeling."
    },
    sectionContext: {
      es: "Diseñar dentro del framework existente: cómo crear consistencia sin refactorizar todo",
      en: "Designing within the existing framework: how to build consistency without refactoring everything"
    },
    contentContext: {
      es: "Dos usuarios con necesidades distintas: el viajero que quería llegar al hotel con su proceso ya resuelto, y el equipo de desarrollo que necesitaba componentes con la nomenclatura de su propio framework para no tener que interpretar cada diseño.",
      en: "Two users with different needs: the traveler who wanted to arrive at the hotel with their process already resolved, and the development team who needed components with the nomenclature of their own framework so they wouldn't have to interpret each design."
    },
    sectionAction: {
      es: "De los painpoints del equipo al sistema que habla el lenguaje del developer",
      en: "From team pain points to a system that speaks the developer's language"
    },
    contentAction: {
      es: "Trabajé directamente con el PO y los devs del equipo.",
      en: "I worked directly with the PO and the devs on the team."
    },
    sectionDecision: {
      es: "¿Por qué un UI Kit atómico y no seguir diseñando pantalla por pantalla?",
      en: "Why an atomic UI Kit and not continue designing screen by screen?"
    },
    contentDecision: {
      es: "La decisión más difícil fue mía: saber qué mostrar y qué ocultar en cada paso del flujo. Lo resolví entendiendo con el equipo qué necesitaba realmente el viajero en cada momento, priorizando los datos críticos y dejando fuera lo que estaba fuera del backlog aunque hubiera querido incluirlo. Para los devs, documenté todo con la nomenclatura de su framework, hablando su lenguaje desde el diseño.",
      en: "The most difficult decision was mine: knowing what to show and what to hide at each step of the flow. I solved it by understanding with the team what the traveler really needed at each moment, prioritizing critical data, and leaving out whatever was outside the backlog even if I wanted to include it. For the devs, I documented everything with the nomenclature of their framework, speaking their language starting from the design."
    },
    sectionResult: {
      es: "Lo que antes sucedía con fricción en la recepción, ahora sucede antes de salir de casa",
      en: "What used to happen with friction at reception now happens before leaving home"
    },
    contentResult: {
      es: "El viajero llega al hotel con su proceso completado. El equipo integra componentes sin reuniones de aclaración.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile",
      en: "The traveler arrives at the hotel with their process completed. The team integrates components without clarification meetings.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile"
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
      es: "Buk Design System: Escalamiento y Developer Experience",
      en: "Buk Design System: Scaling and Developer Experience"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2024",
    category: "product-design",
    tags: ["Design System", "Product Design", "Developer Experience", "DesignOps", "UX/UI"],
    shortDescription: {
      es: "Cómo integré componentes de alta complejidad en un SaaS para optimizar el ciclo de desarrollo de producto.",
      en: "Integrating high-complexity components in a mature SaaS to optimize the product development cycle."
    },
    fullDescription: {
      es: "**Me integré al sistema de diseño de Buk para hacerlo crecer con criterio.**",
      en: "**I joined the Buk design system to help it grow thoughtfully.**"
    },
    sectionProblem: {
      es: "¿Cómo hacer crecer un sistema de diseño sin romper lo que ya funciona en producción?",
      en: "How to scale a design system without breaking what works in production?"
    },
    contentProblem: {
      es: "Buk es la plataforma de gestión de personas más usada en LATAM. Con el crecimiento acelerado del producto, el sistema de diseño había acumulado componentes deprecados que seguían en uso activo, inconsistencias entre pantallas y un handoff que generaba fricción constante. El problema no era falta de componentes, era falta de criterio sobre cuáles usar y cuándo.",
      en: "Buk is the most used people management platform in LATAM. With the accelerated growth of the product, the design system had accumulated deprecated components that were still in active use, inconsistencies between screens, and a handoff process that generated constant friction. The problem was not a lack of components, but a lack of criteria on which ones to use and when."
    },
    sectionContext: {
      es: "Diseñar dentro de una arquitectura legacy: cómo agregar sin generar deuda",
      en: "Designing within a legacy architecture: how to add without generating debt"
    },
    contentContext: {
      es: "Los usuarios eran product designers y UX engineers que necesitaban integrar componentes nuevos de forma simple, sin adivinar cuál era el correcto, sin romper lo que ya existía en producción y sin depender de alguien más para entender cómo funcionaba cada pieza.",
      en: "The users were product designers and UX engineers who needed to integrate new components simply, without guessing which one was correct, without breaking what already existed in production, and without depending on someone else to understand how each piece worked."
    },
    sectionAction: {
      es: "De la auditoría de componentes deprecados a la documentación que el equipo realmente usa",
      en: "From auditing deprecated components to documentation the team actually uses"
    },
    contentAction: {
      es: "Me reuní con los UX Engineers y devs del equipo para entender el sistema existente. Ellos me señalaron qué componentes estaban deprecados pero en uso activo.",
      en: "I met with the UX Engineers and devs on the team to understand the existing system. They pointed out which components were deprecated but in active use."
    },
    sectionDecision: {
      es: "¿Por qué criterio técnico sobre libertad visual?",
      en: "Why technical criteria over visual freedom?"
    },
    contentDecision: {
      es: "A partir de eso hice una auditoría del sistema, identifiqué cada caso y definí el sucesor correcto para cada componente deprecado. Documenté cada pieza con sus estados críticos, reglas de uso y referencias directas al código en GitHub. Lo visualmente más atractivo quedó descartado si no encajaba con la arquitectura modular existente.",
      en: "Based on that, I audited the system, identified each case, and defined the correct successor for each deprecated component. I documented each piece with its critical states, usage rules, and direct references to the code in GitHub. What was visually most attractive was discarded if it didn't fit with the existing modular architecture."
    },
    sectionResult: {
      es: "El equipo pasó de buscar el componente correcto a encontrarlo",
      en: "The team went from searching for the right component to finding it"
    },
    contentResult: {
      es: "Los deprecados tenían sucesor claro. El handoff dejó de depender de la memoria de alguien. En un producto que gestiona personas a escala, la consistencia del sistema no es un detalle de diseño, es lo que permite que el producto siga creciendo sin romperse.",
      en: "The deprecated ones had a clear successor. The handoff stopped depending on someone's memory. In a product that manages people at scale, the consistency of the system is not a design detail, it's what allows the product to keep growing without breaking."
    },
    images: [
      "/images/buk/buk-1.png",
      "/images/buk/buk-2.png",
      "/images/buk/buk-3.png",
      "/images/buk/buk-4.png",
      "/images/buk/buk-5.png",
      "/images/buk/buk-6.png",
      "/images/buk/buk-7.png",
      "/images/buk/buk-8.png"
    ]
  },
  {
    id: "11",
    slug: "latam-airlines-recap",
    title: {
      es: "LATAM Airlines — Corporate Partner Recap Platform",
      en: "LATAM Airlines — Corporate Partner Recap Platform"
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2025",
    category: "product-design",
    tags: ["Product Design", "Data Visualization", "B2B", "Salesforce"],
    shortDescription: {
      es: "Transformando datos complejos de ahorro y viajes en una experiencia digital dinámica para +1,600 empresas globales.",
      en: "Transforming complex savings and travel data into a dynamic digital experience for +1,600 global companies."
    },
    fullDescription: {
      es: "**Cómo demostrarle valor a 1.600 empresas en el momento exacto que importaba.**",
      en: "**How to demonstrate value to 1,600 companies at the exact moment it mattered.**"
    },
    sectionProblem: {
      es: "¿Cómo mostrarle a 1.600 gerentes el valor de su contrato cuando deciden renovarlo?",
      en: "How to show 1,600 managers the value of their contract when they decide to renew?"
    },
    contentProblem: {
      es: "Cada año LATAM necesita renovar convenios con sus clientes corporativos. Los gerentes no siempre tienen claro el beneficio obtenido, lo que hace más laborioso el convencimiento y la negociación. La solución que tenían era enviar toda la información por correo, pero la cantidad de datos era tal que iba a quedar como una imagen gigante, estática e imposible de navegar. El valor real del servicio se perdía en el formato.",
      en: "Every year LATAM needs to renew agreements with its corporate clients. Managers do not always clearly see the obtained benefit, making convincing and negotiating more difficult. The solution they had was to send all the information by email, but the amount of data was such that it would end up as a giant, static image, impossible to navigate. The real value of the service was getting lost in the format."
    },
    sectionContext: {
      es: "Diseñar dentro de Salesforce: cómo crear un sistema dinámico sin perder claridad ejecutiva",
      en: "Designing within Salesforce: how to create a dynamic system without losing executive clarity"
    },
    contentContext: {
      es: "Como Product Designer, fui responsable de estructurar y jerarquizar la información para que fuera legible, consistente y escalable tanto en diseño como en desarrollo, desde Figma hasta Salesforce.",
      en: "As a Product Designer, I was responsible for structuring and organizing the information hierarchy so it would be legible, consistent, and scalable in both design and development, from Figma to Salesforce."
    },
    sectionAction: {
      es: "De las reuniones con data y desarrollo al sistema atómico en Figma",
      en: "From meetings with data and development to the atomic system in Figma"
    },
    contentAction: {
      es: "Me reuní con el PO, el equipo de data y desarrollo para entender qué información era crítica para el negocio y acordar que la solución sería una landing en Salesforce.",
      en: "I met with the PO, the data team, and development to understand what information was critical for the business and agreed that the solution would be a landing page on Salesforce."
    },
    sectionDecision: {
      es: "¿Por qué una landing y no un correo?",
      en: "Why a landing page and not an email?"
    },
    contentDecision: {
      es: "Definí la jerarquía de contenidos junto al PO: primero el ahorro e impacto, luego los beneficios clave, luego el detalle. Diseñé un sistema atómico de componentes modulares y reutilizables en Figma, asegurando que cada variable del diseño correspondiera a las variables reales en Salesforce. Participé en dailies con el PO y desarrollo para ajustar decisiones de diseño según las restricciones técnicas de la plataforma.",
      en: "I defined the content hierarchy together with the PO: first savings and impact, then key benefits, then the details. I designed an atomic system of modular and reusable components in Figma, ensuring that each design variable corresponded to the real variables in Salesforce. I participated in dailies with the PO and development to adjust design decisions according to the technical constraints of the platform."
    },
    sectionResult: {
      es: "1.600 empresas, un solo sistema, sin intervención manual",
      en: "1,600 companies, a single system, no manual intervention"
    },
    contentResult: {
      es: "Los gerentes pasaron de recibir un correo ilegible a acceder a su propia información en vivo, con jerarquía clara y desde cualquier dispositivo, en el momento exacto en que debían decidir si renovar su convenio. El equipo técnico pudo reutilizar el sistema para las 1.600 empresas gracias a la alineación de variables y componentes.",
      en: "Managers went from receiving an unreadable email to accessing their own live information, with clear hierarchy and from any device, at the exact moment they had to decide whether to renew their agreement. The technical team was able to reuse the system for the 1,600 companies thanks to the alignment of variables and components."
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
      es: "Vértice",
      en: "Vértice"
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
      es: "Cómo le dimos al equipo de Vértice visibilidad total de cada viajero en el circuito de Torres del Paine",
      en: "How we gave the Vértice team total visibility of each traveler on the Torres del Paine circuit"
    },
    fullDescription: {
      es: "En Torres del Paine no hay margen de error. **Cómo le dimos al equipo de Vértice visibilidad total de cada viajero en el circuito.**",
      en: "In Torres del Paine there is no margin for error. **How we gave the Vértice team total visibility of each traveler on the circuit.**"
    },
    sectionProblem: {
      es: "¿Cómo garantizar que ningún viajero sea un desconocido en ruta?",
      en: "How to ensure no traveler is a stranger on the route?"
    },
    contentProblem: {
      es: "Los operadores turísticos en Torres del Paine tienen una obligación legal: conocer en todo momento quién está en el circuito, en qué estado y qué necesita. El sistema anterior tenía 6 puntos de registro en el recorrido pero solo 4 se completaban, dejando un 33% del circuito sin datos mapeados. La información se pedía a mano en cada sector, se repetía y nadie la completaba. Cuando ocurrió un accidente, el equipo no pudo responder legalmente porque les faltaba información.",
      en: "Tour operators in Torres del Paine have a legal obligation: to know at all times who is on the circuit, in what condition, and what they need. The previous system had 6 registration points along the route, but only 4 were completed, leaving 33% of the circuit without mapped data. Information was requested by hand in each sector, repeated, and no one completed it. When an accident occurred, the team could not respond legally because they lacked information."
    },
    sectionContext: {
      es: "Diseñar dentro de una plataforma limitante: cómo priorizar datos críticos sin perder usabilidad",
      en: "Designing within a limiting platform: how to prioritize critical data without losing usability"
    },
    contentContext: {
      es: "Diseñar un web check-in que centralizara todos los datos críticos de los viajeros, priorizando los campos de seguridad y emergencia, para que el operador saliera al circuito con certeza de que tenía todo lo que la ley exige.",
      en: "Design a web check-in that centralizes all critical traveler data, prioritizing safety and emergency fields, so that the operator goes out to the circuit with certainty of having everything required by law."
    },
    sectionAction: {
      es: "De las conversaciones con la PO al flujo que no deja vacíos de seguridad",
      en: "From conversations with the PO to a flow leaving no security gaps"
    },
    contentAction: {
      es: "Trabajé de la mano con la PO en conversaciones directas para entender el contexto del accidente, qué datos faltaron y por qué eso fue crítico.",
      en: "I worked hand-in-hand with the PO in direct conversations to understand the context of the accident, what data was missing, and why it was critical."
    },
    sectionDecision: {
      es: "¿Por qué un web check-in previo y no el registro en terreno?",
      en: "Why a prior web check-in and not on-site registration?"
    },
    contentDecision: {
      es: "Clasifiqué los campos en críticos para seguridad y operación, como alergias, medicamentos y contactos de emergencia, y secundarios. Diseñé el flujo de 6 pasos en Figma asegurando que los datos críticos no pudieran omitirse, el sistema no avanza sin ellos. Coordiné con el equipo de desarrollo para alinear la nomenclatura del diseño con la del framework desde el inicio.",
      en: "I classified the fields into critical for safety and operations, such as allergies, medications, and emergency contacts, and secondary ones. I designed the 6-step flow in Figma ensuring that critical data could not be omitted; the system doesn't advance without them. I coordinated with the development team to align the design nomenclature with the framework from the start."
    },
    sectionResult: {
      es: "33% del circuito sin datos → cobertura total antes de salir",
      en: "33% of the circuit without data → total coverage before leaving"
    },
    contentResult: {
      es: "El proceso anterior completaba solo 4 de 6 puntos de registro, dejando un 33% del circuito sin datos mapeados. Con el web check-in, los datos críticos se recopilan antes de llegar, garantizando cobertura total desde el inicio. Nadie entra al circuito sin la información de seguridad obligatoria completa.",
      en: "The previous process completed only 4 out of 6 registration points, leaving 33% of the circuit without mapped data. With the web check-in, critical data is collected before arrival, ensuring total coverage from the start. No one enters the circuit without complete mandatory safety information."
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
