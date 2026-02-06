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
      es: "Problema\n\nComprar literas online es riesgoso para el usuario: ¿cabe en el espacio? ¿es resistente? ¿cuánto cuesta enviarla? Esto generaba alto abandono de carrito, especialmente en compradores de alto volumen (hoteles, escuelas, empresas) que necesitaban múltiples unidades. El e-commerce funcionaba para retail, pero no tenía un camino B2B definido, generando fricción por incertidumbre en precios, logística y tiempos de respuesta.\n\nContexto\n\nProducto físico grande con medidas variables, margen sensible a costos de logística, y devoluciones costosas. Se observó que una porción relevante del tráfico mostraba comportamientos típicos de compradores B2B: múltiples visitas a fichas de producto, consultas sobre volúmenes, abandono en checkout después de agregar múltiples unidades. Análisis de comportamiento mostraron alto interés inicial seguido de abandono rápido en la fase de consideración.\n\nRestricciones\n\n- Mantener la arquitectura existente sin romper la experiencia retail (mayoría del tráfico)\n- Logística externa con costos variables según ubicación y volumen\n- Medidas variables que requieren validación antes de compra\n- Usuarios con poca confianza en compras online de muebles grandes\n- Sin CRM integrado, requiriendo captura de leads simple pero efectiva\n- Implementar sobre plataforma existente, priorizando velocidad sobre sofisticación\n\nDecisión\n\nSistema: Diseñé componentes modulares (landing B2B, CTAs estratégicos, formularios de captura) que operan como una capa adicional sin romper el sistema retail existente. La solución intercepta usuarios de alto volumen antes del checkout tradicional, redirigiéndolos hacia procesos asistidos.\n\nTrade-off: Prioricé velocidad de implementación sobre automatización completa. En lugar de construir un sistema de cotización automático (requería integración compleja), opté por un flujo de captura de leads que prepara al equipo comercial con información clave, orientado a reducir tiempo de respuesta según benchmarks de flujos asistidos B2B.\n\nÉtica: Evité patrones oscuros como contadores de stock falsos o precios ocultos. El flujo B2B comunica claramente que los precios son negociables y que el proceso requiere contacto humano, generando confianza antes de la transacción. Mostré costos de envío y logística de forma transparente, sacrificando fricción inicial pero ganando confianza.\n\nPerformance: La estructura prioriza claridad y reduce fricción, guiando al usuario hacia procesos asistidos. Landing B2B dedicada para capturar y calificar leads, CTAs estratégicos en páginas de producto que detectan intención de alto volumen, y sistema de captura con formularios cortos + descarga de catálogo que entrega contexto previo a ventas.\n\nEscalabilidad: Componentes modulares diseñados en Figma permiten adaptar el modelo a futuros casos de uso B2B sin complejidad operativa adicional, facilitando iteración basada en comportamiento observable.\n\nImpacto\n\nEl diseño estaba orientado a mover métricas de e-commerce según buenas prácticas de flujos asistidos y e-commerce B2B: reducir abandono en pedidos grandes en rangos de 40-50%, aumentar checkout completion en compradores B2B, generar tasa de conversión en rangos de 20-30% en leads de alto volumen según benchmarks del sector, y disminuir tiempo de respuesta de cotización en rangos de 40-60% al preparar mejor al equipo comercial. El diseño fue construido para mover esas métricas y reducir riesgo de devoluciones costosas.\n\n👉 https://literas.mx/",
      en: "Problem\n\nBuying bunk beds online is risky for users: Will it fit the space? Is it durable? How much does shipping cost? This generated high cart abandonment, especially for high-volume buyers (hotels, schools, companies) needing multiple units. The e-commerce worked for retail, but had no defined B2B path, creating friction due to uncertainty in pricing, logistics, and response times.\n\nContext\n\nLarge physical product with variable dimensions, margin sensitive to logistics costs, and expensive returns. It was observed that a relevant portion of traffic showed typical B2B buyer behaviors: multiple visits to product pages, inquiries about volumes, abandonment at checkout after adding multiple units. Behavior analysis showed high initial interest followed by rapid abandonment in the consideration phase.\n\nConstraints\n\n- Maintain existing architecture without breaking retail experience (majority of traffic)\n- External logistics with variable costs depending on location and volume\n- Variable dimensions requiring validation before purchase\n- Users with low confidence in online purchases of large furniture\n- No integrated CRM, requiring simple but effective lead capture\n- Implement on existing platform, prioritizing speed over sophistication\n\nDecision\n\nSystem: I designed modular components (B2B landing, strategic CTAs, capture forms) that operate as an additional layer without breaking the existing retail system. The solution intercepts high-volume users before traditional checkout, redirecting them toward assisted processes.\n\nTrade-off: I prioritized implementation speed over complete automation. Instead of building an automatic quotation system (requiring complex integration), I opted for a lead capture flow that prepares the commercial team with key information, oriented to reduce response time according to benchmarks of assisted B2B flows.\n\nEthics: I avoided dark patterns like fake stock counters or hidden prices. The B2B flow clearly communicates that prices are negotiable and the process requires human contact, generating trust before the transaction. I showed shipping and logistics costs transparently, sacrificing initial friction but gaining trust.\n\nPerformance: The structure prioritizes clarity and reduces friction, guiding users toward assisted processes. Dedicated B2B landing to capture and qualify leads, strategic CTAs on product pages that detect high-volume intent, and capture system with short forms + catalog download that provides prior context to sales.\n\nScalability: Modular components designed in Figma allow adapting the model to future B2B use cases without additional operational complexity, facilitating iteration based on observable behavior.\n\nImpact\n\nThe design was oriented to move e-commerce metrics according to best practices of assisted flows and B2B e-commerce: reduce abandonment in large orders in ranges of 40-50%, increase checkout completion in B2B buyers, generate conversion rate in ranges of 20-30% in high-volume leads according to industry benchmarks, and decrease quotation response time in ranges of 40-60% by better preparing the commercial team. The design was built to move those metrics and reduce risk of expensive returns.\n\n👉 https://literas.mx/"
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
      es: "Problema\n\nHeliboss enfrentaba un problema crítico de conversión y revenue: usuarios interesados en cámaras de acción entraban al sitio, no encontraban diferenciación clara frente a alternativas más conocidas (GoPro, Insta360), y salían a comparar fuera del e-commerce sin volver, rompiendo el funnel de conversión. La fuga de tráfico hacia comparadores externos generaba pérdida de leads calificados y oportunidades de revenue en un producto de alto valor.\n\nContexto\n\nHeliboss opera como marca e-commerce product-led vendiendo productos premium DJI en un mercado competitivo. La Osmo Action 4 es un producto técnico de alto valor que requiere claridad inmediata para evitar abandono. La landing no es solo una página, sino una capa de control del journey que busca evitar que el usuario salga a comparar fuera del e-commerce, funcionando como sistema anti-fuga de tráfico. El trabajo real es convertir tráfico de lanzamiento en pipeline comercial real, no solo mostrar especificaciones.\n\nRestricciones\n\n- Mantener consistencia visual con identidad de Heliboss y estándares DJI (riesgo de diluir marca)\n- Comunicar especificaciones técnicas sin abrumar (riesgo de rebote en usuarios no técnicos)\n- Diseñar para múltiples dispositivos, priorizando móvil (riesgo de perder conversión móvil)\n- Presupuesto limitado para fotografía de producto (riesgo de no comunicar calidad premium)\n- Tiempo de desarrollo acotado para coincidir con lanzamiento (riesgo de perder oportunidad de mercado)\n\nDecisión\n\nSistema de captura de intención: Hero comunica valor inmediato (4K, estabilización avanzada) para capturar atención antes de que el usuario considere comparar externamente. Secciones progresivas resuelven objeciones de forma estructurada: precio → compatibilidad → rendimiento → confianza, reduciendo ansiedad técnica y riesgo percibido de comprar tecnología cara sin contacto humano.\n\nReducción de comparación externa: La estructura prioriza diferenciación clara frente a competidores (GoPro, Insta360) comunicando ventajas técnicas de forma accesible, evitando que el usuario necesite salir del sitio para entender el valor. Múltiples CTAs estratégicos ubicados en momentos de intención para capturar leads antes de que se vayan a comparar.\n\nControl de ansiedad técnica: Información técnica organizada en módulos que responden dudas específicas (compatibilidad, rendimiento, casos de uso) sin sobrecarga, reduciendo el miedo a equivocarse o desperdiciar dinero en una compra de alto valor.\n\nTrade-off: Prioricé claridad y velocidad de carga sobre animaciones pesadas, orientado a no perder usuarios móviles que representan porción relevante del tráfico. La optimización móvil fue diseñada como driver de revenue, no solo como adaptación técnica.\n\nEscalabilidad: Componentes modulares diseñados para facilitar actualización de especificaciones o agregar nuevos productos DJI sin esfuerzo de desarrollo adicional, permitiendo iteración rápida basada en comportamiento observable.\n\nImpacto\n\nEl diseño estaba orientado a mover métricas de conversión según benchmarks de landing pages de productos premium: generar tasa de conversión de visitas a leads en rangos de 3-5% para visitantes calificados, alcanzar CTR en CTAs principales en rangos de 8-12% en la sección hero y 5-8% en secciones secundarias, reducir tasa de rebote en rangos de 25-35% especialmente en la sección hero, y aumentar tiempo en página en rangos de 40-60% indicando mayor engagement y consideración del producto. Estas métricas buscan convertir tráfico de lanzamiento en pipeline comercial real, transformando visitas en leads calificados que el equipo comercial puede cerrar, no solo engagement o tiempo en página.\n\n👉 https://heliboss.cl/",
      en: "Problem\n\nHeliboss faced a critical conversion and revenue issue: users interested in action cameras entered the site, didn't find clear differentiation against more established alternatives (GoPro, Insta360), and left to compare externally without returning, breaking the conversion funnel. Traffic leakage to external comparators generated loss of qualified leads and revenue opportunities in a high-value product.\n\nContext\n\nHeliboss operates as a product-led e-commerce brand selling premium DJI products in a competitive market. The Osmo Action 4 is a high-value technical product requiring immediate clarity to avoid abandonment. The landing is not just a page, but a journey control layer that seeks to prevent users from leaving to compare externally, functioning as an anti-traffic leakage system. The real job is to convert launch traffic into real commercial pipeline, not just display specifications.\n\nConstraints\n\n- Maintain visual consistency with Heliboss brand identity and DJI standards (risk of diluting brand)\n- Communicate technical specifications without overwhelming (risk of bounce in non-technical users)\n- Design for multiple devices, prioritizing mobile (risk of losing mobile conversion)\n- Limited budget for product photography (risk of not communicating premium quality)\n- Constrained development time to coincide with product launch (risk of losing market opportunity)\n\nDecision\n\nIntent capture system: Hero communicates immediate value (4K, advanced stabilization) to capture attention before users consider external comparison. Progressive sections resolve objections in structured manner: price → compatibility → performance → trust, reducing technical anxiety and perceived risk of buying expensive technology without human contact.\n\nExternal comparison reduction: The structure prioritizes clear differentiation against competitors (GoPro, Insta360) communicating technical advantages accessibly, preventing users from needing to leave the site to understand value. Multiple strategic CTAs located at intent moments to capture leads before they go to compare.\n\nTechnical anxiety control: Technical information organized in modules that answer specific doubts (compatibility, performance, use cases) without overload, reducing fear of making mistakes or wasting money on a high-value purchase.\n\nTrade-off: I prioritized clarity and load speed over heavy animations, oriented to not lose mobile users representing a relevant portion of traffic. Mobile optimization was designed as a revenue driver, not just a technical adaptation.\n\nScalability: Modular components designed to facilitate updating specifications or adding new DJI products without additional development effort, allowing rapid iteration based on observable behavior.\n\nImpact\n\nThe design was oriented to move conversion metrics according to premium product landing page benchmarks: generate visit-to-lead conversion rate in ranges of 3-5% for qualified visitors, achieve CTR on main CTAs in ranges of 8-12% in the hero section and 5-8% in secondary sections, reduce bounce rate in ranges of 25-35% especially in the hero section, and increase time on page in ranges of 40-60% indicating greater engagement and product consideration. These metrics seek to convert launch traffic into real commercial pipeline, transforming visits into qualified leads that the commercial team can close, not just engagement or time on page.\n\n👉 https://heliboss.cl/"
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
    year: "2022",
    category: "product-design",
    tags: ["UI Kit", "Product Design", "Design Tokens", "DesignOps", "UX/UI"],
    shortDescription: {
      es: "UI Kit para la app Explora que unificó lenguaje entre diseño y desarrollo, redujo la deuda visual y funcional y aceleró la entrega de nuevas funcionalidades mediante componentes reutilizables y design tokens alineados al código.",
      en: "UI Kit for the Explora app that unified language between design and engineering, reduced visual and functional debt, and accelerated feature delivery through reusable components and code-aligned design tokens."
    },
    fullDescription: {
      es: "Problema\n\nLa app Explora crecía de forma desordenada: cada nueva feature se diseñaba y desarrollaba casi desde cero, generando deuda técnica, componentes duplicados y una experiencia inconsistente entre pantallas. No existía una fuente única de verdad ni un lenguaje común entre diseño y desarrollo, lo que añadía fricción al handoff y retrasaba el time-to-market.\n\nContexto\n\nExplora es una plataforma con múltiples perfiles de usuario y flujos complejos (viajes, perfil, estados de reserva, notificaciones). El análisis con el equipo de ingeniería mostró que una parte relevante del tiempo se perdía interpretando diseños estáticos o recreando componentes que ya existían con otros nombres. El reto no era solo visual: el sistema debía alinearse con la arquitectura de código y la realidad operativa del equipo.\n\nRestricciones\n\n- Compatibilidad con el framework de desarrollo existente, sin refactorización total.\n- Soportar varios perfiles de usuario dentro de la misma app sin perder coherencia de marca.\n- Implementar el sistema mientras el producto seguía lanzando nuevas features.\n- Gestionar la resistencia inicial a invertir tiempo en \"ordenar\" en lugar de construir cosas nuevas.\n\nDecisión\n\nSistema: Lideré un mapeo de stakeholders y flujos clave, y a partir de ahí definí un UI Kit atómico donde la piedra angular fue la nomenclatura compartida. Diseñé tokens de diseño (color, tipografía, espaciado, estados) que se alinean uno a uno con las variables del framework de desarrollo, reduciendo ambigüedades en el handoff. Los componentes se documentaron con estados críticos (error, carga, vacío) y ejemplos de uso.\n\nTrade-off: Priorizamos consistencia, claridad y velocidad sobre exploraciones visuales más disruptivas. Opté por una estructura de componentes rígida pero altamente parametrizable: menos libertad visual ad-hoc, a cambio de más velocidad de implementación y menor riesgo de errores en producción.\n\nÉtica y transparencia: Definimos patrones claros de feedback para el usuario (mensajes, estados vacíos, errores de red) que evitan la sensación de app \"rota\" y mejoran la confianza en los flujos más sensibles.\n\nImpacto\n\nEl sistema fue diseñado para reducir tiempos de desarrollo y deuda de interfaz: se estimó un ahorro de 40–50 % en tiempo de maquetación gracias a componentes preconstruidos y tokens alineados al código, una reducción significativa de inconsistencias visuales reportadas en QA y menos reuniones de aclaración entre diseño y desarrollo. El resultado es una base escalable que permite lanzar nuevas vistas y flujos en días en lugar de semanas, manteniendo coherencia de marca y experiencia.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile",
      en: "Problem\n\nThe Explora app was growing in a chaotic way: every new feature was designed and built almost from scratch, generating technical debt, duplicated components, and an inconsistent experience across screens. There was no single source of truth or shared language between design and engineering, which added friction to handoff and slowed time-to-market.\n\nContext\n\nExplora is a platform with multiple user profiles and complex flows (trips, profile, reservation states, notifications). Analysis with the engineering team showed that a relevant part of their time was lost interpreting static designs or recreating components that already existed under different names. The challenge was not only visual: the system needed to align with the existing code architecture and the team's operational reality.\n\nConstraints\n\n- Remain compatible with the current development framework without a full refactor.\n- Support several user profiles within the same app while keeping brand coherence.\n- Implement the system while the product continued shipping new features.\n- Overcome initial resistance to investing time in \"tidying up\" instead of launching new things.\n\nDecision\n\nSystem: I led a stakeholder and key-flow mapping and from there defined an atomic UI Kit where the core was shared nomenclature. I designed design tokens (color, typography, spacing, states) that map one-to-one to the framework's variables, reducing ambiguity in handoff. Components were documented with critical states (error, loading, empty) and usage examples.\n\nTrade-off: We prioritized consistency, clarity and speed over more disruptive visual explorations. I opted for a rigid but highly parameterized component structure: less ad-hoc visual freedom in exchange for faster implementation and lower risk of production errors.\n\nEthics and transparency: We defined clear feedback patterns for users (messages, empty states, network errors) that avoid the feeling of a \"broken\" app and improve trust in the most sensitive flows.\n\nImpact\n\nThe system was designed to reduce development time and interface debt: it was estimated to save 40–50% of layout time thanks to prebuilt components and code-aligned tokens, significantly reduce visual inconsistencies reported in QA, and drastically cut clarification meetings between design and engineering. The result is a scalable base that allows Explora to launch new views and flows in days instead of weeks while maintaining brand and experience coherence.\n\n👉 https://testing-viajero.pgo-explora.com/#/profile"
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
    year: "2023",
    category: "product-design",
    tags: ["Design System", "Product Design", "Developer Experience", "DesignOps", "UX/UI"],
    shortDescription: {
      es: "Cómo integré componentes de alta complejidad en un SaaS de alta complejidad para optimizar el ciclo de desarrollo de producto.",
      en: "Integrating high-complexity components in a mature SaaS to optimize the product development cycle."
    },
    fullDescription: {
      es: "El Desafío: Evolucionar un sistema sin romper la arquitectura legacy\n\nEl sistema de formularios de Buk necesitaba capacidades avanzadas (FileUpload, Participants Select) que el framework base no contemplaba. El reto no era solo \"diseñar los componentes\", sino integrarlos sin generar inconsistencias visuales o errores técnicos en cientos de pantallas que ya estaban en producción.\n\nContexto: El Design System como producto para ingeniería\n\nMis usuarios finales fueron los UX Engineers y diseñadores que mantienen la plataforma. El objetivo fue eliminar la fricción técnica al añadir piezas que facilitaran la gestión de documentos y equipos, transformando una necesidad de negocio en una solución sistémica y escalable.\n\nRestricciones: Criterio técnico sobre libertad visual\n\nRetro-compatibilidad absoluta: Los nuevos componentes debían coexistir con los antiguos sin forzar refactorizaciones masivas.\n\nAlineación con el Framework: Cada decisión debía ser programable 1:1, sacrificando exploración visual disruptiva en favor de una estabilidad total del software.\n\nDensidad de Información: El diseño debía funcionar en contextos SaaS críticos (gestión de personas), donde la claridad operativa es más importante que la estética.\n\nEstrategia: Anatomía técnica y lógica de estados\n\nEn lugar de entregar pantallas, entregué una arquitectura de componentes:\n\nAnatomía con Intención: Descompuse cada campo en sus elementos mínimos (Labels, Inputs, Helper texts) para asegurar que la lógica de estados fuera predecible para desarrollo.\n\nReglas de Uso (Do/Don't): Implementé normas rígidas, como el uso de ancho completo para el FileUpload, con el fin de prevenir errores de jerarquía visual y facilitar la lectura en formularios densos.\n\nHandoff de Alta Fidelidad: Documenté la implementación mediante mapeos de HTML y referencias directas a GitHub, reduciendo la ambigüedad técnica al mínimo.\n\nImpacto Proyectado: Escalabilidad y ROI de Producto\n\nEl sistema fue diseñado para mover métricas de eficiencia operativa:\n\n-25% en tiempo de implementación de nuevos formularios complejos mediante componentes \"plug-and-play\".\n\nEliminación de deuda técnica al estandarizar la captura de datos y archivos en toda la plataforma.\n\n0% de regresiones visuales en el despliegue inicial, garantizando la estabilidad del producto legacy.",
      en: "The Challenge: Evolving a system without breaking legacy architecture\n\nBuk's form system required advanced capabilities (FileUpload, Participants Select) that the base framework did not support. The challenge wasn't just 'designing the components,' but integrating them without creating visual inconsistencies or technical errors across hundreds of screens already in production.\n\nContext: The Design System as a product for engineering\n\nMy end users were the UX Engineers and designers who maintain the platform. The goal was to eliminate technical friction by adding pieces that facilitate document and team management, transforming a business need into a systemic and scalable solution.\n\nConstraints: Technical criteria over visual freedom\n\nAbsolute Backward Compatibility: New components had to coexist with old ones without forcing massive refactors.\n\nFramework Alignment: Every decision had to be 1:1 programmable, sacrificing disruptive visual exploration in favor of total software stability.\n\nInformation Density: The design had to work in critical SaaS contexts (HR management), where operational clarity is more important than aesthetics.\n\nStrategy: Technical anatomy and state logic\n\nInstead of delivering screens, I delivered a component architecture:\n\nAnatomy with Intent: I decomposed each field into its minimal elements (Labels, Inputs, Helper texts) to ensure state logic was predictable for development.\n\nUsage Rules (Do/Don't): I implemented rigid standards, such as full-width usage for FileUpload, to prevent visual hierarchy errors and facilitate reading in dense forms.\n\nHigh-Fidelity Handoff: I documented implementation through HTML mappings and direct GitHub references, minimizing technical ambiguity.\n\nProjected Impact: Escalability and Product ROI\n\nThe system was designed to move operational efficiency metrics:\n\n-25% in complex form implementation time through 'plug-and-play' components.\n\nElimination of technical debt by standardizing data and file capture across the platform.\n\n0% visual regressions in the initial deployment, ensuring legacy product stability."
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
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

