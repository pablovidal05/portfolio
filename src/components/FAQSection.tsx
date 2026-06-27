"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

type QA = { q: string; a: string };

const faqsEs: QA[] = [
  {
    q: "¿Quién es Pablo Vidal?",
    a: "Pablo Vidal es un Product Designer chileno con más de 5 años de experiencia en agencias y empresas tecnológicas. Se especializa en design systems, flujos transaccionales y optimización de conversión para productos B2B, fintech y e-commerce.",
  },
  {
    q: "¿En qué se especializa como diseñador?",
    a: "Su foco está en productos financieros: convertir sistemas complejos en experiencias simples y confiables. Trabaja design systems a escala, flujos de pago, plataformas de datos y optimización de conversión (CRO) en SaaS y e-commerce.",
  },
  {
    q: "¿Qué herramientas y habilidades maneja?",
    a: "Product Design, Design Systems, UX/UI, User Research, Prototyping, A/B Testing, CRO y Growth Design. A nivel de implementación maneja Shopify, Webflow y workflows de IA con Claude Code, colaborando directamente con ingeniería.",
  },
  {
    q: "¿Qué experiencia laboral tiene?",
    a: "Ha trabajado como UX Specialist en McCann (2025), Product Designer en Eleva (2024–2025) y UX/UI Designer en Agencia Cebra (2023–2024), además de proyectos freelance para distintas marcas.",
  },
  {
    q: "¿Está disponible para proyectos freelance?",
    a: "Sí. Pablo toma proyectos freelance de product design, design systems y optimización de conversión. Para conversar un proyecto, escríbele a p.vidal005@gmail.com.",
  },
  {
    q: "¿Dónde está ubicado y trabaja en remoto?",
    a: "Está basado en Coquimbo, Región de Coquimbo, Chile, y trabaja de forma remota con equipos y clientes de Latinoamérica y el resto del mundo.",
  },
  {
    q: "¿En qué idiomas trabaja?",
    a: "Trabaja en español e inglés, tanto en la comunicación con equipos como en la documentación de diseño.",
  },
  {
    q: "¿Cómo puedo contactarlo?",
    a: "Por correo a p.vidal005@gmail.com, o a través de LinkedIn (linkedin.com/in/pablovidalg) y GitHub (github.com/pablovidal05).",
  },
];

const faqsEn: QA[] = [
  {
    q: "Who is Pablo Vidal?",
    a: "Pablo Vidal is a Chilean Product Designer with over 5 years of experience across agencies and tech companies. He specializes in design systems, transactional flows, and conversion optimization for B2B, fintech, and e-commerce products.",
  },
  {
    q: "What does he specialize in as a designer?",
    a: "His focus is financial products: turning complex systems into simple, trustworthy experiences. He works on design systems at scale, payment flows, data platforms, and conversion rate optimization (CRO) in SaaS and e-commerce.",
  },
  {
    q: "What tools and skills does he use?",
    a: "Product Design, Design Systems, UX/UI, User Research, Prototyping, A/B Testing, CRO, and Growth Design. On the implementation side he works with Shopify, Webflow, and AI workflows with Claude Code, collaborating closely with engineering.",
  },
  {
    q: "What is his work experience?",
    a: "He has worked as a UX Specialist at McCann (2025), Product Designer at Eleva (2024–2025), and UX/UI Designer at Agencia Cebra (2023–2024), plus freelance projects for various brands.",
  },
  {
    q: "Is he available for freelance work?",
    a: "Yes. Pablo takes on freelance projects in product design, design systems, and conversion optimization. To discuss a project, email him at p.vidal005@gmail.com.",
  },
  {
    q: "Where is he based and does he work remotely?",
    a: "He is based in Coquimbo, Chile, and works remotely with teams and clients across Latin America and the rest of the world.",
  },
  {
    q: "What languages does he work in?",
    a: "He works in both Spanish and English, for team communication and design documentation alike.",
  },
  {
    q: "How can I contact him?",
    a: "By email at p.vidal005@gmail.com, or through LinkedIn (linkedin.com/in/pablovidalg) and GitHub (github.com/pablovidal05).",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsEs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  const { locale } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = locale === "es" ? faqsEs : faqsEn;
  const heading = locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions";

  return (
    <section id="faq" className="page-layout" style={{ paddingTop: "6rem", paddingBottom: "8rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 w-full">
        <h2
          className="sentient-text mb-10"
          style={{ fontFamily: "'Sentient', serif", fontWeight: 300, fontSize: "2rem", color: "rgba(255,255,255,0.95)" }}
        >
          {heading}
        </h2>

        <div className="border-t border-white/10 flex flex-col gap-4 pt-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/10 pb-1">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base md:text-lg transition-colors ${
                      isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-white/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-white/60 leading-relaxed pr-6">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
