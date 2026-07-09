"use client";

// Lead magnet GEO: "¿Tu negocio existe para ChatGPT?"
// Funciona sin backend: el visitante deja su URL y el CTA abre WhatsApp
// con el mensaje pre-armado. El diagnóstico lo corre Pablo a mano (motor GEO).
// Destino de todo el outbound: ganchos, posts LinkedIn, bio IG.

import { useState } from "react";
import Link from "next/link";

const WHATSAPP = "56940438271";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
};

const HALLAZGOS = [
  {
    tag: "HOTEL BOUTIQUE · VALLE DEL ELQUI",
    text: "Uno de los mejores de la zona. Para ChatGPT casi no existe: cero datos estructurados, todo en español, y el astroturismo — SU gancho — mencionado al pasar. El turista que pregunta en inglés por \"stargazing hotel Elqui\" nunca lo va a ver.",
  },
  {
    tag: "TOUR OPERATOR ASTRONÓMICO",
    text: "Tiene el mejor contenido de la categoría (cielo Bortle 2, telescopio de 16\"). Pero sin precios en el texto y con la FAQ escondida en un link, la IA responde \"cuánto cuesta\" con los datos de la competencia.",
  },
  {
    tag: "CLÍNICA DENTAL · LA SERENA",
    text: "Ticket alto, decisión que la gente ya le pregunta a la IA. El sitio no tiene el formato que ChatGPT lee: ni schema de clínica, ni FAQ embebida, ni rangos de precio. Invisible en la respuesta.",
  },
];

const PASOS = [
  {
    n: "01",
    title: "Me dejas tu sitio web",
    text: "Un link. Nada más. Sin reuniones, sin formularios eternos.",
  },
  {
    n: "02",
    title: "Le pregunto a la IA por tu rubro",
    text: "Como lo haría un cliente real: \"mejor [tu servicio] en [tu ciudad]\". Y audito por qué apareces — o por qué no.",
  },
  {
    n: "03",
    title: "Te mando 1 hallazgo real en 24 hrs",
    text: "Gratis, por WhatsApp. Un problema concreto y verificable de cómo te ve la IA. Qué hacer con él, lo decides tú.",
  },
];

export default function GeoPage() {
  const [url, setUrl] = useState("");

  const waLink = () => {
    const site = url.trim() || "mi sitio web";
    const msg = `Hola Pablo! Quiero el diagnóstico gratis de visibilidad en IA para: ${site}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative z-10 min-h-screen" style={{ background: "#000" }}>
      <div className="page-layout">
        <div className="max-w-3xl mx-auto px-4" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
          {/* Hero */}
          <span
            className="uppercase inline-block rounded-full"
            style={{
              ...mono,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid #333333",
              background: "rgba(255,255,255,0.05)",
              padding: "6px 14px",
              marginBottom: "1.5rem",
            }}
          >
            Diagnóstico gratis · 24 hrs · Sin compromiso
          </span>

          <h1
            style={{
              ...mono,
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              lineHeight: 1.15,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            ¿Tu negocio existe para ChatGPT?
          </h1>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginTop: "1.5rem", lineHeight: 1.7 }}>
            Tu próximo cliente ya no googlea — le pregunta a la IA. &ldquo;¿Mejor hotel en el Elqui?&rdquo;
            &ldquo;¿Dónde me hago un implante en La Serena?&rdquo; Si ChatGPT, Perplexity o el buscador de
            Google con IA no pueden <em>leer</em> tu sitio, recomiendan al de al lado. Yo audito exactamente
            eso — y te muestro un hallazgo real de tu negocio, gratis.
          </p>

          {/* Form → WhatsApp */}
          <div
            className="rounded-xl"
            style={{
              border: "1px solid #333333",
              background: "rgba(255,255,255,0.04)",
              padding: "2rem",
              marginTop: "3rem",
            }}
          >
            <label
              htmlFor="site-url"
              style={{ ...mono, fontSize: "0.75rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}
            >
              La web de tu negocio
            </label>
            <div className="flex flex-col sm:flex-row gap-3" style={{ marginTop: "0.75rem" }}>
              <input
                id="site-url"
                type="text"
                inputMode="url"
                placeholder="tunegocio.cl"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 rounded-full outline-none"
                style={{
                  ...mono,
                  fontSize: "0.95rem",
                  background: "#111111",
                  border: "1px solid #333333",
                  color: "rgba(255,255,255,0.9)",
                  padding: "14px 24px",
                }}
              />
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full"
                style={{
                  ...mono,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "14px 32px",
                  background: "#FFFFFF",
                  color: "#111111",
                  whiteSpace: "nowrap",
                }}
              >
                Pedir diagnóstico →
              </a>
            </div>
            <p style={{ ...mono, color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "1rem" }}>
              Se abre WhatsApp con el mensaje listo. 1 hallazgo real, gratis, en 24 hrs. Sin spam, sin llamadas.
            </p>
          </div>

          {/* Cómo funciona */}
          <h2
            style={{ ...mono, fontWeight: 700, textTransform: "uppercase", fontSize: "1.3rem", color: "rgba(255,255,255,0.95)", marginTop: "5rem" }}
          >
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: "2rem" }}>
            {PASOS.map((p) => (
              <div key={p.n} className="rounded-xl" style={{ border: "1px solid #1F1F1F", padding: "1.5rem" }}>
                <span style={{ ...mono, color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>{p.n}</span>
                <h3 style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", fontWeight: 500, margin: "0.75rem 0 0.5rem" }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>

          {/* Hallazgos reales */}
          <h2
            style={{ ...mono, fontWeight: 700, textTransform: "uppercase", fontSize: "1.3rem", color: "rgba(255,255,255,0.95)", marginTop: "5rem" }}
          >
            Hallazgos reales de auditorías recientes
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
            Negocios reales de la Región de Coquimbo, auditados este mes. Sin nombres — el diagnóstico de cada uno es suyo.
          </p>
          <div style={{ marginTop: "2rem" }}>
            {HALLAZGOS.map((h) => (
              <div key={h.tag} style={{ borderTop: "1px solid #1F1F1F", padding: "1.5rem 0" }}>
                <span style={{ ...mono, fontSize: "0.7rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)" }}>{h.tag}</span>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.6rem" }}>{h.text}</p>
              </div>
            ))}
          </div>

          {/* Quién soy */}
          <div
            className="rounded-xl"
            style={{ border: "1px solid #333333", background: "rgba(255,255,255,0.04)", padding: "2rem", marginTop: "5rem" }}
          >
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Soy <strong style={{ color: "rgba(255,255,255,0.95)" }}>Pablo Vidal</strong>, diseñador de producto
              en Coquimbo — 5+ años en plataformas financieras y B2B. Hoy me dedico a algo que casi nadie en la
              región está mirando: cómo los buscadores con IA leen (o ignoran) a los negocios locales. Esta misma
              técnica la aplico en mi propio sitio —{" "}
              <Link href="/" className="underline hover:opacity-70" style={{ color: "rgba(255,255,255,0.9)" }}>
                pablovidalg.xyz
              </Link>
              — y en los proyectos de mis clientes.
            </p>
          </div>

          {/* CTA final */}
          <div className="text-center" style={{ marginTop: "4rem" }}>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 inline-flex items-center gap-2 rounded-full"
              style={{
                ...mono,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "16px 40px",
                background: "#FFFFFF",
                color: "#111111",
              }}
            >
              Quiero mi diagnóstico gratis →
            </a>
            <p style={{ ...mono, color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "1.25rem" }}>
              La ventana está abierta: tu competencia tampoco lo arregló todavía.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
