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
  topics?: string[];
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
      es: "Rediseño B2B para un e-commerce de literas en Shopify. Su comprador más valioso —hoteles, escuelas, hostales que compran en volumen— llegaba y se iba porque el sitio no lo atendía. Diseñé un embudo de pre-calificación (banner → landing B2B → cotización por WhatsApp) que sube la calidad del lead sin romper el retail.",
      en: "B2B redesign for a bunk-beds e-commerce on Shopify. Its most valuable buyer —hotels, schools, hostels buying in volume— arrived and left because the site didn't serve them. I designed a pre-qualification funnel (banner → B2B landing → WhatsApp quote) that raises lead quality without breaking retail."
    },
    fullDescription: {
      es: "",
      en: ""
    },
    kpiSubtitle: {
      es: "Del carrito al WhatsApp — embudo de pre-calificación B2B con handoff agentic",
      en: "From cart to WhatsApp — a B2B pre-qualification funnel with an agentic handoff"
    },
    sectionProblem: { es: "Problema", en: "Problem" },
    contentProblem: {
      es: "Literas.mx vendía bien al cliente retail, pero tenía un segundo comprador —mucho más valioso— al que no estaba atendiendo: el que compra en volumen (hoteles, escuelas, hostales, albergues). Ese comprador llegaba con intención de comprar en cantidad, no encontraba nada pensado para él, y se iba. El negocio perdía a su cliente más rentable sin darse cuenta, y no tenía forma de **reconocerlo, atenderlo ni escalar** la relación.\n\nEl diagnóstico clave: la fricción no era el precio, era la **incertidumbre** — ¿me responden?, ¿cuánto cuesta enviar 40 a mi ciudad?, ¿hacen precio por volumen?, ¿aguantan uso intensivo?",
      en: "Literas.mx sold well to retail, but had a second —far more valuable— buyer it wasn't serving: the one who buys in volume (hotels, schools, hostels, shelters). That buyer arrived intending to buy in quantity, found nothing built for them, and left. The business was losing its most profitable customer without noticing, with no way to **recognize, serve or scale** the relationship.\n\nThe key diagnosis: the friction wasn't price, it was **uncertainty** — will they reply? how much to ship 40 to my city? do they discount by volume? do they hold up to heavy use?"
    },
    sectionContext: { es: "Contexto", en: "Context" },
    contentContext: {
      es: "E-commerce montado en **Shopify** (dueño: Raul). El retail funcionaba, pero no había CRM y todo el mayoreo se manejaba a mano: el cliente escribía al **WhatsApp**, Raul mandaba una **cotización en PDF** con descuento por volumen, y el cliente pagaba ahí. Conversión real del negocio: **10-15% de cotización→venta**.\n\nEl comprador que importa: un hotel que necesita 40 literas, una escuela, un hostal — compra en cantidad y vuelve, mueve volumen y margen. El camino a WhatsApp ya existía; lo que faltaba era **distinguir a ese comprador apenas entra y quitarle la duda** antes de que el interés se evapore.",
      en: "E-commerce built on **Shopify** (owner: Raul). Retail worked, but there was no CRM and all wholesale was handled by hand: the customer messaged **WhatsApp**, Raul sent a **PDF quote** with a volume discount, and the customer paid there. The business's real conversion: **10-15% quote→sale**.\n\nThe buyer that matters: a hotel needing 40 bunk beds, a school, a hostel — buys in quantity and comes back, moves volume and margin. The path to WhatsApp already existed; what was missing was to **spot that buyer the moment they arrive and remove the doubt** before the interest evaporates."
    },
    sectionAction: { es: "Insight", en: "Insight" },
    contentAction: {
      es: "Antes de diseñar, clasifico cada problema en uno de tres modos: **incendio** (algo roto y urgente), **insight** (hay evidencia observable) o **apuesta** (una dirección sin validar). La regla: no se diseña contra una suposición.\n\nTres fuentes apuntaban a lo mismo — el comportamiento en **Hotjar**, **10 conversaciones reales** de clientes mayoristas que me pasó el cliente, y el patrón del tráfico. Las tres coincidían: el mayorista no compra por el carrito, pide cotización por WhatsApp, y la fricción es la incertidumbre. Como es un patrón **observado**, no una opinión, lo clasifiqué como **INSIGHT** — y ese fue el ancla de todo el diseño.\n\nCrucé las 10 conversaciones con lo que ya había sacado de Hotjar y coincidían. El insight (fricción = incertidumbre) era sólido, no una corazonada. El heatmap no me dice qué diseñar; me dice qué probar primero.",
      en: "Before designing, I classify every problem into one of three modes: **fire** (something broken and urgent), **insight** (there's observable evidence) or **bet** (an unvalidated direction). The rule: you don't design against an assumption.\n\nThree sources pointed to the same thing — behavior in **Hotjar**, **10 real conversations** with wholesale customers the client shared, and the traffic pattern. All three agreed: the wholesale buyer doesn't buy through the cart, they ask for a quote on WhatsApp, and the friction is uncertainty. Since it's an **observed** pattern, not an opinion, I classified it as **INSIGHT** — and that anchored the whole design.\n\nI cross-checked the 10 conversations against what I'd already pulled from Hotjar and they matched. The insight (friction = uncertainty) was solid, not a hunch. The heatmap doesn't tell me what to design; it tells me what to test first."
    },
    sectionDecision: { es: "Solución", en: "Solution" },
    contentDecision: {
      es: "No fue un banner — fue un **flujo**: Banner B2B (home) → Landing B2B dedicada → cotización por WhatsApp.\n\n**① Banner (en producción):** un gancho en el primer fold del home, donde está la atención (la gente no scrollea más del 50%). Reconoce al mayorista, le habla por lo que es y lo saca del flujo retail.\n\n**② Landing B2B (el corazón, en producción):** construida para matar la incertidumbre módulo por módulo, que era exactamente el insight. Cada sección responde una duda: hero ('esto es para vos, comprador de volumen'); beneficios (descuentos escalonados desde 10 unidades, garantía 2 años, logística nacional); casos de éxito + testimonios (confianza); catálogo con precios por lote (transparencia); FAQ; y CTA repetido a WhatsApp 'Solicita tu cotización'.\n\n**③ Cierre (WhatsApp):** el embudo termina donde siempre, pero cambia la **calidad del lead** — llega habiendo entendido precio, resistencia y confianza, con menos dudas y más chances de compra. Diseñé un embudo de **pre-calificación** que descarga al equipo comercial y sube la conversión. No cambié el destino; cambié la calidad del lead que llega ahí.\n\n**Handoff agentic:** entregué el diseño como un objeto que se lee en tres capas, la misma verdad para las tres — humano (los paneles del archivo), dev (Dev Mode: specs + anotaciones), agente (API: pluginData + variables/tokens). Los tokens los saqué del **código real** de literas.mx (primario #171717, botón pill radius 60px, acento #C7AA8D), no los inventé; los componentes bindeados se actualizaron solos. Naming semántico por intención (color/interactive/primary, no 'naranjo') para que un dev-con-IA lo use sin romper la marca.\n\n**Trade-off:** prioricé velocidad sobre automatización total. En vez de un cotizador automático (integración compleja), dejé un flujo de captura que prepara al equipo comercial con el contexto clave. Sin dark patterns: precios negociables y logística comunicados de forma transparente.",
      en: "It wasn't a banner — it was a **flow**: B2B banner (home) → dedicated B2B landing → WhatsApp quote.\n\n**① Banner (in production):** a hook in the home's first fold, where the attention is (people don't scroll past 50%). It recognizes the wholesale buyer, speaks to who they are, and pulls them out of the retail flow.\n\n**② B2B landing (the core, in production):** built to kill uncertainty module by module — exactly the insight. Each section answers a doubt: hero ('this is for you, volume buyer'); benefits (tiered discounts from 10 units, 2-year warranty, nationwide logistics); success stories + testimonials (trust); catalog with per-lot pricing (transparency); FAQ; and a repeated WhatsApp CTA 'Request your quote'.\n\n**③ Close (WhatsApp):** the funnel ends where it always did, but the **lead quality** changes — it arrives having understood price, durability and trust, with fewer doubts and better odds of buying. I designed a **pre-qualification** funnel that unloads the sales team and lifts conversion. I didn't change the destination; I changed the quality of the lead that reaches it.\n\n**Agentic handoff:** I delivered the design as an object read in three layers, the same truth for all three — human (the file's panels), dev (Dev Mode: specs + annotations), agent (API: pluginData + variables/tokens). The tokens came from literas.mx's **real code** (primary #171717, pill button radius 60px, accent #C7AA8D), I didn't invent them; the bound components updated themselves. Semantic naming by intent (color/interactive/primary, not 'orange') so a dev-with-AI can use it without breaking the brand.\n\n**Trade-off:** I prioritized speed over full automation. Instead of an automatic quoter (complex integration), I left a capture flow that primes the sales team with the key context. No dark patterns: negotiable prices and logistics communicated transparently."
    },
    sectionResult: { es: "Impacto", en: "Impact" },
    contentResult: {
      es: "Etiqueto siempre la fuente del dato — medido, proyectado o propuesto, nunca mezclados:\n\n- **Medido (real):** comportamiento en Hotjar + 10 conversaciones reales + **10-15% de cotización→venta** (dato del cliente).\n- **Propuesta (no corrida):** un A/B de banner vs. control, con métrica = **clicks al camino B2B** (no checkout — el mayorista no compra por carrito). El engagement cerró en el handoff al dev, sin analytics post-lanzamiento.\n- **Proyección de benchmark (no medido):** rangos de abandono y conversión de referencia del sector.\n\nEl valor real: le dimos al negocio una forma de **ver, atender y escalar** a su cliente más valioso — y una landing que hace el trabajo que antes el dueño hacía a mano en cada chat. La siguiente apuesta, ya diseñada y dejada en el handoff: un **cotizador asistido** (cantidad + producto + código postal → cotización) para automatizar el cierre.\n\n👉 https://literas.mx/pages/literas-al-por-mayor",
      en: "I always label the source of a number — measured, projected or proposed, never mixed:\n\n- **Measured (real):** behavior in Hotjar + 10 real conversations + **10-15% quote→sale** (client's figure).\n- **Proposed (not run):** an A/B of banner vs. control, metric = **clicks to the B2B path** (not checkout — the wholesale buyer doesn't buy through the cart). The engagement closed at the dev handoff, with no post-launch analytics.\n- **Benchmark projection (not measured):** industry reference ranges for abandonment and conversion.\n\nThe real value: we gave the business a way to **see, serve and scale** its most valuable customer — and a landing that does the work the owner used to do by hand in every chat. The next bet, already designed and left in the handoff: an **assisted quoter** (quantity + product + postal code → quote) to automate the close.\n\n👉 https://literas.mx/pages/literas-al-por-mayor"
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
    topics: ["#designsystem", "#uikit", "#turismo", "#mobile"],
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
    topics: ["#designsystem", "#dashboard", "#b2b", "#formularios"],
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
    topics: ["#branding", "#dataviz", "#b2b", "#aerolínea"],
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
    kpiSubtitle: {
      es: "1.600 reportes personalizados sin intervención manual · 3.200 hrs de trabajo eliminadas · 0 trabajo repetido",
      en: "1,600 personalized reports without manual intervention · 3,200 hrs of work eliminated · 0 repeated work"
    },
    shortDescription: {
      es: "Había un correo estático que nadie leía → diseñé una arquitectura modular que se multiplicó sola por 1.600 clientes.",
      en: "There was a static email that nobody read → I designed a modular architecture that multiplied itself for 1,600 clients."
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
      es: "El valor real del servicio se perdía en el formato.\n\nCada año LATAM renueva convenios con 1.600 clientes corporativos.\nLa solución que tenían era enviar todo por correo — pero la cantidad de datos era tal que iba a quedar como una imagen gigante, estática e imposible de navegar.",
      en: "The real value of the service was lost in the format.\n\nEvery year LATAM renews agreements with 1,600 corporate clients.\nThe solution they had was to send everything by email — but the amount of data was such that it would end up as a giant, static, and impossible-to-navigate image."
    },
    sectionContext: {
      es: "Lo que quería el gerente",
      en: "What the manager wanted"
    },
    contentContext: {
      es: "Responder una sola pregunta ante su propia jefatura:\n¿valió la pena tener a LATAM como proveedor este año?\n\nPara eso necesitaba ver ahorros, beneficios y comportamiento de viaje de forma clara, rápida y desde cualquier dispositivo.\nSin pedirle reportes a nadie.",
      en: "Answer a single question to their own leadership:\nwas it worth having LATAM as a provider this year?\n\nFor that, they needed to see savings, benefits, and travel behavior clearly, quickly, and from any device.\nWithout asking anyone for reports."
    },
    sectionAction: {
      es: "Lo que hice",
      en: "What I did"
    },
    contentAction: {
      es: "Definí la jerarquía de contenidos junto al PO: primero el ahorro e impacto, luego los beneficios, luego el detalle.\n\nDiseñé componentes modulares en Figma donde cada variable de diseño correspondía a una variable real en Salesforce — para que los 1.600 reportes se generaran solos, sin que nadie tocara nada manualmente.\n\nParticipé en dailies ajustando decisiones de diseño según las restricciones técnicas de la plataforma.",
      en: "I defined the content hierarchy with the PO: first savings and impact, then benefits, then details.\n\nI designed modular components in Figma where each design variable corresponded to a real variable in Salesforce — so that the 1,600 reports would generate themselves, without anyone manually touching anything.\n\nI participated in dailies adjusting design decisions based on the technical constraints of the platform."
    },
    sectionDecision: {
      es: "¿Por qué una landing y no un correo?",
      en: "Why a landing page and not an email?"
    },
    contentDecision: {
      es: "Un correo con toda esa información iba a quedar como una imagen gigante, estática e ilegible.\n\nUna landing personalizada por cliente permitía navegar, filtrar y encontrar el dato que importaba en segundos.\n\nLa restricción era Salesforce Marketing Cloud — trabajamos dentro de eso sin perder claridad ejecutiva.",
      en: "An email with all that information would end up as a giant, static, and unreadable image.\n\nA client-personalized landing page allowed navigating, filtering, and finding the relevant data in seconds.\n\nThe constraint was Salesforce Marketing Cloud — we worked within that without losing executive clarity."
    },
    sectionResult: {
      es: "El Sistema Resultante",
      en: "The Resulting System"
    },
    contentResult: {
      es: "El entregable no fue un diseño — fue una arquitectura que se multiplicó sola por 1.600.\nCada gerente accedió a su propio reporte en vivo, desde cualquier dispositivo, justo cuando tenía que decidir si renovar.\n\n**Resultado:**\n• 1.600 reportes personalizados entregados sin intervención manual\n• 3.200 horas de trabajo manual eliminadas en un solo ciclo\n• 0 trabajo repetido por el equipo técnico",
      en: "The deliverable was not a design — it was an architecture that multiplied itself for 1,600.\nEach manager accessed their own live report, from any device, right when they had to decide whether to renew.\n\n**Result:**\n• 1,600 personalized reports delivered without manual intervention\n• 3,200 hours of manual work eliminated in a single cycle\n• 0 repeated work by the technical team"
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
    ],
    videos: [
      "/images/latam/latam-1.webm"
    ],
    customSectionMedia: {
      problem: [
        { type: 'video', src: '/images/latam/latam-2.webm' }
      ],
      context: [
        { type: 'image', src: '/images/latam/latam-10.png' }
      ],
      decision: [
        { type: 'image', src: '/images/latam/latam-4.png' }
      ],
      action: [
        { type: 'video', src: '/images/latam/latam-3.webm' }
      ],
      result: [
        { type: 'video', src: '/images/latam/latam-4.webm' }
      ]
    }
  },
  {
    id: "12",
    slug: "vertice-web-checkin",
    topics: ["#fintech", "#turismo", "#automatización", "#facturación"],
    title: {
      es: "Finanzas no debería depender de que nadie se equivoque. Cómo automatizamos cobros y facturación para el operador turístico de Torres del Paine.",
      en: "Finance shouldn't depend on nobody making a mistake. How we automated billing and invoicing for Torres del Paine's leading tour operator."
    },
    role: {
      es: "Product Designer",
      en: "Product Designer"
    },
    year: "2026",
    category: "product-design",
    tags: ["Product Design", "Fintech", "Automatización", "B2B SaaS", "Diseño de Sistemas"],
    kpiSubtitle: {
      es: "0 cobros con datos inválidos en FNS · detección de fallos: de días a horas · 10–20 hrs/mes recuperadas en finanzas · 100% de reglas de facturación cubiertas por el sistema",
      en: "0 invalid charges created in FNS · fault detection: from days to hours · 10–20 hrs/month recovered in finance · 100% of invoicing rules covered by the system"
    },
    shortDescription: {
      es: "Finanzas procesaba cobros con planillas manuales. Cualquier error frenaba todo — y nadie sabía qué había fallado ni por qué. Diseñé el sistema que lo hace imposible.",
      en: "Finance processed charges with manual spreadsheets. Any error stopped everything — and nobody knew what had failed or why. I designed the system that makes that impossible."
    },
    fullDescription: {
      es: "",
      en: ""
    },
    sectionProblem: {
      es: "El Problema Real",
      en: "The Real Problem"
    },
    contentProblem: {
      es: "El equipo de finanzas de Vértice subía planillas con cobros manualmente a FNS — el sistema externo de pagos. Si había un error en cualquier fila, el proceso completo se frenaba.\n\nPero el problema más profundo era la invisibilidad: cuando un cobro fallaba en FNS, nadie sabía qué había salido mal, cuándo ni por qué. El equipo dependía de otra persona para entender su propio flujo.\n\nY la facturación era aún más frágil — las reglas de quién se puede facturar, en qué moneda, si es cliente a crédito, si el canal es facturable — vivían en la cabeza de las personas, no en el sistema. Eso hacía que cada decisión de facturación fuera manual, inconsistente y no escalable.",
      en: "Vértice's finance team manually uploaded charge spreadsheets to FNS — the external payment system. If there was an error in any row, the entire process stopped.\n\nBut the deeper problem was invisibility: when a charge failed in FNS, nobody knew what went wrong, when, or why. The team depended on someone else to understand their own workflow.\n\nInvoicing was even more fragile — the rules about who can be invoiced, in which currency, whether a client has credit terms, whether a channel is billable — lived in people's heads, not in the system. That made every invoicing decision manual, inconsistent, and unscalable."
    },
    sectionContext: {
      es: "Tres problemas, tres tipos distintos",
      en: "Three problems, three different types"
    },
    contentContext: {
      es: "No todos los problemas de finanzas eran del mismo tipo — y eso determinó cómo los abordé.\n\nLos cobros manuales eran un incendio: un proceso que bloqueaba al equipo en tiempo real, todos los días. La prioridad era automatizar y dar visibilidad de fallos.\n\nLa facturación era una apuesta estratégica: no había un error recurrente visible, pero sin modelar las reglas de negocio antes de construir, escalar el sistema iba a romper el área entera.\n\nEl reporte de estado era un insight: el equipo no tenía forma de saber qué estaba pasando con sus cobros sin preguntarle a alguien. La señal venía del comportamiento, no de un ticket.",
      en: "Not all finance problems were the same type — and that determined how I approached each.\n\nManual charges were a fire: a process that blocked the team in real time, every day. The priority was to automate and surface failure visibility.\n\nInvoicing was a strategic bet: there was no visible recurring error, but without modeling the business rules before building, scaling the system would break the entire area.\n\nStatus reporting was an insight: the team had no way to know what was happening with their charges without asking someone. The signal came from behavior, not from a ticket."
    },
    sectionAction: {
      es: "Lo que diseñé",
      en: "What I designed"
    },
    contentAction: {
      es: "Para los cobros, diseñé un flujo de validación completa antes de guardar: si cualquier fila tiene un error, el sistema lo intercepta y lo muestra con fila y columna exacta — nada llega a FNS con datos inválidos. Si un cobro falla en el proceso nocturno, el sistema reintenta automáticamente. Después del segundo fallo, lo marca como fallido y reporta por correo: qué cobro, cuándo, por qué.\n\nPara la facturación, primero modelé las reglas de negocio antes de tocar ninguna pantalla: quién se puede facturar, en qué condiciones, con qué tipo de documento. Solo después diseñé el flujo que las ejecuta — un proceso que corre por fecha, clasifica cada caso y genera el documento correcto sin intervención manual.\n\nEn ambos casos, el criterio de diseño fue el mismo: el sistema no debería depender de que nadie se equivoque.",
      en: "For charges, I designed a full validation flow before saving: if any row has an error, the system intercepts it and shows the exact row and column — nothing reaches FNS with invalid data. If a charge fails in the overnight process, the system retries automatically. After the second failure, it marks it as failed and reports by email: which charge, when, why.\n\nFor invoicing, I first modeled the business rules before touching any screen: who can be invoiced, under what conditions, with what document type. Only then did I design the flow that executes them — a process that runs by date, classifies each case, and generates the correct document without manual intervention.\n\nIn both cases, the design criterion was the same: the system shouldn't depend on nobody making a mistake."
    },
    sectionDecision: {
      es: "¿Por qué modelar las reglas antes de diseñar la pantalla?",
      en: "Why model the rules before designing the screen?"
    },
    contentDecision: {
      es: "La tentación en un proyecto así es empezar por la UI — el formulario de carga, la tabla de cobros, el botón de facturar.\n\nPero el problema no era visual. Era que las reglas de negocio no existían en ningún lugar formal. Si diseñaba la pantalla primero, estaba construyendo una interfaz sobre un modelo mental que podía cambiar mañana.\n\nEmpezar por las reglas — quién puede facturarse, en qué moneda, bajo qué condiciones — permitió que la UI fuera una consecuencia del modelo, no al revés. Eso es lo que hace que el sistema sea escalable: las reglas están en el código, no en la memoria de alguien.",
      en: "The temptation in a project like this is to start with the UI — the upload form, the charges table, the invoice button.\n\nBut the problem wasn't visual. It was that the business rules didn't exist anywhere formal. If I designed the screen first, I was building an interface on top of a mental model that could change tomorrow.\n\nStarting with the rules — who can be invoiced, in which currency, under what conditions — meant the UI became a consequence of the model, not the other way around. That's what makes the system scalable: the rules are in the code, not in someone's memory."
    },
    sectionResult: {
      es: "El Sistema Resultante",
      en: "The Resulting System"
    },
    contentResult: {
      es: "El entregable no fue un formulario de carga ni una tabla de cobros — fue un sistema que hace imposible una categoría completa de errores.\n\nNingún cobro con datos inválidos llega a FNS. Cualquier fallo nocturno se reporta automáticamente antes de que alguien lo tenga que buscar. Las reglas de facturación están en el sistema, no en la cabeza de nadie.\n\n**Esperamos:** 10–20 hrs/mes recuperadas en finanzas · 0 cobros con datos inválidos en FNS · tiempo de detección de fallos de días a horas · 100% de reglas de facturación cubiertas por el sistema, sin depender de conocimiento tácito.",
      en: "The deliverable wasn't an upload form or a charges table — it was a system that makes an entire category of errors impossible.\n\nNo charge with invalid data reaches FNS. Any overnight failure is reported automatically before anyone has to go looking for it. The invoicing rules are in the system, not in anyone's head.\n\n**We expect:** 10–20 hrs/month recovered in finance · 0 invalid charges created in FNS · fault detection time from days to hours · 100% of invoicing rules covered by the system, without depending on tacit knowledge."
    },
    images: ["/images/vertice/vertice-1-cover.jpg"],
    videos: [
      "/images/vertice/vertice-1.mp4",
      "/images/vertice/vertice-2.mp4",
      "/images/vertice/vertice-3.mp4",
      "/images/vertice/vertice-4.mp4"
    ],
    customSectionMedia: {
      problem: [
        { type: 'video', src: '/images/vertice/vertice-1.mp4' }
      ],
      action: [
        { type: 'video', src: '/images/vertice/vertice-2.mp4' }
      ],
      decision: [
        { type: 'video', src: '/images/vertice/vertice-3.mp4' }
      ],
      result: [
        { type: 'video', src: '/images/vertice/vertice-4.mp4' }
      ]
    }
  },
  {
    id: "13",
    slug: "consorcio-mi-inversion",
    topics: ["#inversiones", "#fintech", "#behavioral", "#dashboard"],
    title: {
      es: "¿Cuántas inversiones no ocurrieron porque el flujo no entendía al usuario?",
      en: "How many investments didn't happen because the flow didn't understand the user?"
    },
    role: {
      es: "Product Designer — Caso concepto, no solicitado. Soy usuario de Mi Inversión: esto es lo que me hubiera gustado diseñar en la app (sin afiliación con Consorcio)",
      en: "Product Designer — Unsolicited concept case. I'm a Mi Inversión user: this is what I would have loved to design in the app (not affiliated with Consorcio)"
    },
    year: "2026",
    category: "product-design",
    hidden: false,
    tags: ["Product Design", "Discovery", "UX Research", "Behavioral Design", "Fintech", "Inversiones", "Prototipado"],
    kpiSubtitle: {
      es: "2 pasos que eliminaría del flujo · 3 palancas de retención que activaría · 1 principio que lo explica todo",
      en: "2 steps I'd remove from the flow · 3 retention levers I'd activate · 1 principle that explains it all"
    },
    shortDescription: {
      es: "Uso Mi Inversión. Cada vez que llegaba a la pantalla de compra pensaba: 'esto me hubiera gustado diseñarlo distinto'. Así que lo hice — un prototipo de lo que el sistema todavía no entiende sobre su usuario, tratado como criterio de diseño, no como queja.",
      en: "I use Mi Inversión. Every time I hit the purchase screen I thought: 'I'd have loved to design this differently'. So I did — a prototype of what the system still doesn't understand about its user, treated as a design exercise, not a complaint."
    },
    fullDescription: {
      es: "Caso concepto no solicitado: lo que me hubiera gustado diseñar en la app de inversiones de Consorcio, aplicando diseño conductual (chunking, loss aversion, endowed progress) como criterio estructural sobre un flujo de compra de acciones.",
      en: "Unsolicited concept case: what I would have loved to design in Consorcio's investment app, applying behavioral design (chunking, loss aversion, endowed progress) as structural criteria over a stock purchase flow."
    },
    sectionProblem: {
      es: "El Riesgo",
      en: "The Risk"
    },
    contentProblem: {
      es: "El mayor riesgo de un producto financiero no es que el usuario no entienda la interfaz — es que el sistema no entienda al usuario.\n\nMi Inversión deja comprar acciones desde el celular. Como usuario, el roce no lo sentí en lo técnico: el flujo de compra me pedía tomar decisiones conceptuales que nunca me había explicado. Monto o cantidad. Precio de mercado o precio límite. Sin contexto, sin jerarquía, sin modelo mental.\n\nNo tengo las métricas de Consorcio — pero conozco el patrón: cada vez que un flujo así te hace dudar, la duda es una inversión que no ocurre y un usuario menos enganchado con la plataforma. Ese es el riesgo que me hubiera gustado atacar.",
      en: "The greatest risk of a financial product is not that the user doesn't understand the interface — it's that the system doesn't understand the user.\n\nMi Inversión lets you buy stocks from your phone. As a user, the friction wasn't technical: the purchase flow asked me to make conceptual decisions it had never explained to me. Amount or quantity. Market price or limit price. No context, no hierarchy, no mental model.\n\nI don't have Consorcio's metrics — but I know the pattern: every time a flow like this makes you hesitate, that hesitation is an investment that doesn't happen and one less user hooked on the platform. That's the risk I would have loved to tackle."
    },
    sectionContext: {
      es: "El Usuario",
      en: "The User"
    },
    contentContext: {
      es: "El usuario de Mi Inversión no es un trader. Es alguien que quiere invertir sus ahorros sin necesitar un corredor de bolsa. Soy exactamente ese usuario.\n\nLlego al flujo con una intención simple: 'quiero poner $50.000 en FALABELLA'. Lo que encuentro es un formulario que me pregunta a la vez por monto, cantidad, tipo de orden y precio — cuatro variables que para mí son una sola decisión.\n\nPara no diseñar a ciegas, miré cómo resuelven este mismo paso otras apps de inversión retail en Chile (Fintual, Racional) y benchmarks fintech afuera: casi todas ordenan la decisión antes de pedir el dato. Eso confirmó que no era preferencia mía — era una brecha de patrón.\n\nEl flujo no está mal construido técnicamente. Está mal ordenado conductualmente: me pide datos antes de resolver mi modelo mental. Eso es lo que me hizo querer rediseñarlo.",
      en: "The Mi Inversión user is not a trader. They're someone who wants to invest their savings without needing a stockbroker. I'm exactly that user.\n\nI arrive at the flow with a simple intent: 'I want to put $50,000 into FALABELLA'. What I find is a form simultaneously asking me about amount, quantity, order type, and price — four variables that for me are a single decision.\n\nTo avoid designing blind, I looked at how other retail investment apps in Chile (Fintual, Racional) and fintech benchmarks abroad solve this same step: almost all of them order the decision before asking for the data. That confirmed it wasn't my personal preference — it was a pattern gap.\n\nThe flow isn't poorly built technically. It's poorly ordered behaviorally: it asks me for data before resolving my mental model. That's what made me want to redesign it."
    },
    sectionAction: {
      es: "Lo que haría",
      en: "What I would do"
    },
    contentAction: {
      es: "Prototipé la propuesta aplicando tres principios de diseño conductual como criterio estructural — no como decoración.\n\nChunking: dividiría la entrada de la orden según cómo el usuario piensa su inversión. Primero elige si quiere invertir por monto o por cantidad. Después ingresa solo ese dato. El sistema traduce automáticamente al otro modo en el resumen. Dos pasos menos, cero funcionalidad perdida.\n\nLoss aversion: hoy el rojo que señala variaciones de precio activa señal de pérdida sin contexto. Reemplazaría el color como alerta indiscriminada por color como información contextualizada — con una línea de explicación que le dice al usuario qué significa ese número para su decisión.\n\nEndowed progress: el historial de transacciones lista operaciones sin conectarlas a ningún objetivo. Agregaría una capa de progreso visible: 'llevas 3 compras hacia tu meta de ahorro'. Eso no es decoración — es la diferencia entre un usuario que siente que avanza y uno que siente que recién empieza.",
      en: "I prototyped the proposal applying three behavioral design principles as structural criteria — not decoration.\n\nChunking: I'd split the order entry based on how the user thinks about their investment. First they choose whether to invest by amount or by quantity. Then they enter just that one piece of data. The system automatically translates to the other mode in the summary. Two fewer steps, zero lost functionality.\n\nLoss aversion: today the red that signals price variations fires a loss signal without context. I'd replace color as an indiscriminate alert with color as contextualized information — with an explanatory line telling the user what that number means for their decision.\n\nEndowed progress: the transaction history lists operations without connecting them to any goal. I'd add a visible progress layer: 'you've made 3 purchases toward your savings goal'. That's not decoration — it's the difference between a user who feels they're moving forward and one who feels they're just starting."
    },
    sectionDecision: {
      es: "¿Por qué esto y no un rediseño visual?",
      en: "Why this and not a visual redesign?"
    },
    contentDecision: {
      es: "Porque el problema no es de interfaz — es de secuencia.\n\nUn rediseño visual cambiaría cómo se ve el flujo. Lo que propongo cambia cuándo el usuario toma cada decisión — y eso es lo que determina si completa la orden o abandona.\n\nLa pantalla de confirmación es el ejemplo más claro: cierra la transacción correctamente pero no construye relación con el usuario después de ella. Un mensaje como 'tu orden fue procesada — te avisamos cuando el precio llegue a tu rango objetivo' convertiría el cierre en un gancho de retorno. No es más diseño — es diseño en el momento correcto.\n\nLas tres oportunidades que identifiqué — goal framing en el dashboard, endowed progress en el historial, next best action en la confirmación — no requieren rediseño completo. Requieren criterio sobre qué hace el sistema en cada momento de decisión del usuario.\n\nY no termina en Figma: lo propuse así justamente porque es implementable sobre el front actual. El chunking reordena campos que ya existen; el copy de loss aversion y el gancho de retorno son texto y un trigger de notificación. Antes de comprometerlo, lo sentaría con desarrollo para validar restricciones — qué datos expone la API de órdenes, qué cuesta el trigger de precio objetivo — y ajustar el alcance a lo que el equipo puede sostener.",
      en: "Because the problem isn't about interface — it's about sequence.\n\nA visual redesign would change how the flow looks. What I propose changes when the user makes each decision — and that's what determines whether they complete the order or abandon it.\n\nThe confirmation screen is the clearest example: it correctly closes the transaction but doesn't build a relationship with the user afterward. A message like 'your order was processed — we'll notify you when the price reaches your target range' would turn the close into a return hook. It's not more design — it's design at the right moment.\n\nThe three opportunities I identified — goal framing in the dashboard, endowed progress in the history, next best action in the confirmation — don't require a complete redesign. They require criteria about what the system does at each user decision moment.\n\nAnd it doesn't end in Figma: I proposed it this way precisely because it's implementable on the current front end. Chunking reorders fields that already exist; the loss-aversion copy and the return hook are text and a notification trigger. Before committing to it, I'd sit down with development to validate constraints — what the orders API exposes, what the target-price trigger costs — and scope it to what the team can sustain."
    },
    sectionResult: {
      es: "La Propuesta",
      en: "The Proposal"
    },
    contentResult: {
      es: "El entregable no es un rediseño — es un diagnóstico con prototipo.\nUna propuesta de qué reglas debería seguir el sistema para entender a su usuario.\n\n**Lo que cambiaría con la propuesta:**\n• 2 pasos menos en el flujo de compra sin reducir funcionalidad bursátil\n• Loss aversion neutralizada con contexto — el rojo informa, no asusta\n• 3 palancas de retención activadas: goal framing, endowed progress, next best action\n\n**La hipótesis de negocio (no medida, así la atacaría):**\nEn una plataforma de inversiones retail, el usuario que completa su primera orden suele valer mucho más que el que abandona. Por eso priorizaría reducir el abandono en la primera operación: es donde una intervención conductual chica tiende a tener el mayor retorno por esfuerzo.\n\n**Cómo lo mediría:**\nLa señal de éxito no es 'se ve mejor' — es tasa de completitud de la primera orden y drop-off por paso del flujo. Instrumentaría el funnel, correría la propuesta contra el flujo actual (A/B o release gradual) y miraría completitud, tiempo a primera orden y retención a 30 días. Con acceso a la data de Consorcio, validar este supuesto sería el paso cero, antes de construir.",
      en: "The deliverable isn't a redesign — it's a diagnosis with a prototype.\nA proposal of what rules the system should follow to understand its user.\n\n**What would change with the proposal:**\n• 2 fewer steps in the purchase flow without reducing stock-market functionality\n• Loss aversion neutralized with context — the red informs, doesn't scare\n• 3 retention levers activated: goal framing, endowed progress, next best action\n\n**The business hypothesis (not measured — this is how I'd attack it):**\nIn a retail investment platform, the user who completes their first order tends to be worth far more than one who abandons. That's why I'd prioritize reducing first-order abandonment: it's where a small behavioral intervention tends to have the highest return per effort.\n\n**How I'd measure it:**\nThe success signal isn't 'it looks better' — it's first-order completion rate and drop-off per step of the flow. I'd instrument the funnel, run the proposal against the current flow (A/B or staged release) and watch completion, time-to-first-order and 30-day retention. With access to Consorcio's data, validating this assumption would be step zero, before building."
    },
    images: [
      "/images/mi-inversion/mi-inversion-antes.png"
    ],
    videos: [
      "/images/mi-inversion/mi-inversion-antes-despues.mp4",
      "/images/mi-inversion/mi-inversion-anim-1.mp4?v=2",
      "/images/mi-inversion/mi-inversion-anim-2.mp4?v=2",
      "/images/mi-inversion/mi-inversion-anim-3.mp4?v=2"
    ],
    customSectionMedia: {
      problem: [
        { type: 'image', src: '/images/mi-inversion/mi-inversion-antes.png' }
      ],
      context: [
        { type: 'video', src: '/images/mi-inversion/mi-inversion-anim-1.mp4?v=2' }
      ],
      action: [
        { type: 'video', src: '/images/mi-inversion/mi-inversion-anim-2.mp4?v=2' },
        { type: 'video', src: '/images/mi-inversion/mi-inversion-anim-3.mp4?v=2' }
      ],
      decision: [
        { type: 'video', src: '/images/mi-inversion/mi-inversion-anim-3.mp4?v=2' }
      ],
      result: [
        { type: 'video', src: '/images/mi-inversion/mi-inversion-antes-despues.mp4' }
      ]
    }
  },
  {
    id: "14",
    slug: "copiloto-financiero-conversacional",
    topics: ["#fintech", "#conversational", "#agentes", "#openfinance"],
    title: {
      es: "Conecté mi banco a una IA para que mis gastos me hablen, no me los muestre",
      en: "I connected my bank to an AI so my spending talks to me, instead of just showing it"
    },
    role: {
      es: "Conversational Designer & Builder — proyecto personal",
      en: "Conversational Designer & Builder — personal project"
    },
    year: "2026",
    category: "product-design",
    tags: ["Conversational Design", "Fintech", "Fintoc", "Open Finance", "IA", "Product Design", "Data Viz"],
    kpiSubtitle: {
      es: "Banco real vía Fintoc (open finance / SFA) · Búsqueda en lenguaje natural · Copiloto proactivo con triggers diseñados sobre movimientos bancarios reales",
      en: "Real bank via Fintoc (open finance / SFA) · Natural-language search · Proactive copilot with triggers designed on real bank movements"
    },
    shortDescription: {
      es: "Proyecto personal: conecté mi banco real a través de Fintoc — la API de open finance de Chile — y convertí mis movimientos en una conversación. En vez de una planilla fría, le pregunto en qué se me va la plata y un copiloto me responde, detecta patrones y me avisa antes de que sea tarde. Todo diseñado sobre data bancaria real, no de juguete.",
      en: "Personal project: I connected my real bank through Fintoc — Chile's open finance API — and turned my movements into a conversation. Instead of a cold spreadsheet, I ask where my money goes and a copilot answers, detects patterns, and warns me before it's too late. All designed on real bank data, not toy data."
    },
    fullDescription: { es: "", en: "" },
    sectionProblem: { es: "El Problema", en: "The Problem" },
    contentProblem: {
      es: "Los dashboards financieros muestran datos, no entienden a la persona. Yo tenía mis movimientos reales, pero ninguna herramienta me decía en lenguaje humano en qué se me iba la plata. El dato existía — y no generaba ninguna acción. Una planilla fría que nadie mira no cambia un hábito de consumo.",
      en: "Financial dashboards show data; they don't understand the person. I had my real movements, but no tool told me — in human language — where my money was going. The data existed and drove zero action. A cold spreadsheet nobody looks at doesn't change a spending habit."
    },
    sectionContext: { es: "El Usuario", en: "The User" },
    contentContext: {
      es: "El usuario de finanzas personales no es un analista: no quiere aprender categorías, filtros ni armar tablas dinámicas. Llega con una intención simple — \"¿cuánto gasté en el super este mes?\", \"¿en qué se me va la plata?\". En mi caso el contexto era exigente: ingreso variable de múltiples fuentes y meses en rojo. Necesitaba claridad rápida y accionable, no más gráficos.",
      en: "The personal-finance user isn't an analyst: they don't want to learn categories, filters, or build pivot tables. They arrive with a simple intent — \"how much did I spend on groceries this month?\", \"where does my money go?\". In my case the context was demanding: variable income from multiple sources and months in the red. I needed fast, actionable clarity, not more charts."
    },
    sectionAction: { es: "Lo que hice", en: "What I did" },
    contentAction: {
      es: "**La base: open finance, no un Excel.**\nConecté mi banco real (Scotiabank) usando Fintoc, la API que en Chile opera dentro del SFA (Sistema de Finanzas Abiertas, el marco de la Ley Fintech regulado por la CMF). El flujo no es subir una planilla: el usuario autoriza el acceso en una pantalla de consentimiento con su RUT — las credenciales nunca pasan por mi servidor — y Fintoc devuelve los movimientos ya normalizados, cada uno con un ID único e idempotente, así que no se duplican entre sincronizaciones. Eso me dio lo que ningún dataset de juguete entrega: data bancaria real, sucia y desordenada, sobre la cual diseñar de verdad — categorías inconsistentes, comercios con nombres crípticos, transferencias sin glosa.\n\n**Sobre esa base construí un copiloto que convierte los datos en conversación:**\n- Búsqueda en lenguaje natural que filtra todo el panel (\"gastos en super en marzo\").\n- Panel de hábitos con insights empáticos generados desde la data (cero juzgar).\n- Copiloto proactivo: triggers que detectan patrones (cash-flow en rojo, suscripciones, gasto recurrente) y los comunican como lo haría una persona.\n- Chat con flujo de reparación: cuando no entiende, ofrece caminos en vez de un \"no entendí\".\n\nMotor híbrido: reglas (gratis, instantáneas) + IA opcional. Stack: Fintoc API + Node.js + Chart.js, construido con Claude Code como copiloto de desarrollo.",
      en: "**The foundation: open finance, not a spreadsheet.**\nI connected my real bank (Scotiabank) using Fintoc, the API that in Chile operates inside the SFA (Sistema de Finanzas Abiertas — the Fintech Law framework regulated by the CMF). The flow isn't uploading a file: the user authorizes access on a consent screen with their RUT — credentials never touch my server — and Fintoc returns already-normalized movements, each with a unique, idempotent ID, so they don't duplicate between syncs. That gave me what no toy dataset does: real, messy, disordered bank data to actually design on — inconsistent categories, merchants with cryptic names, transfers with no description.\n\n**On that foundation I built a copilot that turns data into conversation:**\n- Natural-language search that filters the whole panel (\"groceries in March\").\n- A habits panel with empathetic insights generated from the data (zero judgment).\n- A proactive copilot: triggers that detect patterns (cash-flow in the red, subscriptions, recurring spend) and communicate them the way a person would.\n- A chat with a repair flow: when it doesn't understand, it offers paths instead of a dead-end \"I didn't get that\".\n\nHybrid engine: rules (free, instant) + optional AI. Stack: Fintoc API + Node.js + Chart.js, built with Claude Code as the development copilot."
    },
    sectionDecision: { es: "¿Por qué conversación y no otro dashboard?", en: "Why conversation and not another dashboard?" },
    contentDecision: {
      es: "Un dashboard más solo agrega gráficos que igual nadie lee. El trabajo de un Conversational Designer no es decorar datos — es diseñar la conversación: cuándo el sistema habla, con qué tono (empático, sin culpas) y cómo se recupera cuando el usuario pide algo que no entiende.\n\nLa decisión clave fue diseñar los triggers sobre MIS datos reales, no sobre plantillas. Descarté alertas genéricas tipo \"fin de semana de bares\" porque mis números decían otra cosa (mi gasto en salidas era marginal; el 47% era un solo flujo). Diseñar para los datos del usuario, no copiar el playbook de otro, es lo que hace que el copiloto se sienta propio.\n\nY hay una apuesta de fondo. El open finance es el riel sobre el que se va a construir la próxima década de productos financieros en Chile y LatAm — Fintoc ya mueve pagos cuenta a cuenta (A2A) como alternativa a la tarjeta, y el SFA obliga a la banca a abrir sus datos con consentimiento. Diseñar con fluidez sobre ese riel — entender qué entrega la API, cómo se pide el consentimiento, qué se puede gatillar a partir de un movimiento real — no es detalle técnico: es la diferencia entre un diseñador que maqueta pantallas y uno que diseña el producto que el negocio sí puede construir y conectar.",
      en: "One more dashboard just adds charts nobody reads. A Conversational Designer's job isn't to decorate data — it's to design the conversation: when the system speaks, in what tone (empathetic, no blame), and how it recovers when the user asks for something it doesn't understand.\n\nThe key decision was designing the triggers on MY real data, not on templates. I discarded generic alerts like \"dangerous weekend out\" because my numbers said otherwise (my going-out spend was marginal; 47% was a single flow). Designing for the user's data, instead of copying someone else's playbook, is what makes the copilot feel like its own.\n\nAnd there's a deeper bet. Open finance is the rail the next decade of financial products in Chile and LatAm will be built on — Fintoc already moves account-to-account (A2A) payments as an alternative to cards, and the SFA forces banks to open their data with consent. Designing fluently on that rail — understanding what the API delivers, how consent is requested, what can be triggered from a real movement — isn't a technical detail: it's the difference between a designer who mocks up screens and one who designs the product the business can actually build and connect."
    },
    sectionResult: { es: "El Resultado", en: "The Result" },
    contentResult: {
      es: "El entregable no fue un dashboard — fue un copiloto que detecta patrones y los dice como los diría una persona.\n\nPasé de \"creo que gasto mucho\" a ver en segundos que el 47% de mis gastos venía de un solo flujo. El sistema responde preguntas en lenguaje natural, analiza hábitos, calcula cuánto me queda de aire (runway) y lanza alertas proactivas antes de que el problema crezca.\n\nClaridad real, diseñada como conversación. Esto es la v1.\n\nEs un proyecto personal — pero también mi prueba de que sé diseñar sobre los rieles reales de la fintech chilena de hoy: open finance vía Fintoc, data bancaria real con consentimiento, e IA aplicada a un problema concreto. No es una maqueta de cómo se vería; es cómo funcionaría conectado.",
      en: "The deliverable wasn't a dashboard — it was a copilot that detects patterns and says them the way a person would.\n\nI went from \"I think I spend too much\" to seeing, in seconds, that 47% of my spending came from a single flow. The system answers natural-language questions, analyzes habits, calculates how much runway I have left, and fires proactive alerts before the problem grows.\n\nReal clarity, designed as a conversation. This is the v1.\n\nIt's a personal project — but also my proof that I can design on the real rails of today's Chilean fintech: open finance via Fintoc, real bank data with consent, and AI applied to a concrete problem. It's not a mockup of how it would look; it's how it would work, connected."
    },
    images: [
      "/images/copiloto/copiloto-fintoc-consola.png",
      "/images/copiloto/copiloto-fintoc-bancos.png",
      "/images/copiloto/copiloto-fintoc-consentimiento.png",
      "/images/copiloto/copiloto-pasarela-a2a.png",
      "/images/copiloto/copiloto-codigo.png",
      "/images/copiloto/copiloto-github.png",
      "/images/copiloto/copiloto-dashboard.png",
      "/images/copiloto/copiloto-insight.png",
      "/images/copiloto/copiloto-proactivo.png",
      "/images/copiloto/copiloto-chat.png"
    ],
    videos: [
      "/images/copiloto/copiloto-walkthrough.mp4",
      "/images/copiloto/copiloto-terminal.mp4"
    ],
    customSectionMedia: {
      problem: [
        { type: 'image', src: '/images/copiloto/copiloto-insight.png' }
      ],
      context: [
        { type: 'image', src: '/images/copiloto/copiloto-chat.png' }
      ],
      action: [
        { type: 'image', src: '/images/copiloto/copiloto-fintoc-consola.png' },
        { type: 'image', src: '/images/copiloto/copiloto-fintoc-consentimiento.png' },
        { type: 'image', src: '/images/copiloto/copiloto-codigo.png' },
        { type: 'image', src: '/images/copiloto/copiloto-pasarela-a2a.png' }
      ],
      decision: [
        { type: 'image', src: '/images/copiloto/copiloto-proactivo.png' },
        { type: 'image', src: '/images/copiloto/copiloto-github.png' }
      ],
      result: [
        { type: 'video', src: '/images/copiloto/copiloto-walkthrough.mp4' },
        { type: 'video', src: '/images/copiloto/copiloto-terminal.mp4' },
        { type: 'image', src: '/images/copiloto/copiloto-dashboard.png' }
      ]
    }
  }
]);

export const projects = allProjects
  .filter((project) => !project.hidden)
  .sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearB - yearA;
  });

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

