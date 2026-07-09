"use client";

// Lead magnet GEO: "¿Tu negocio existe para ChatGPT?"
// El visitante pone su URL → /api/geo-scan corre checks reales al tiro
// (schema, FAQ, precios, bots de IA, llms.txt) → score 0-100 + hallazgos.
// El diagnóstico completo (qué responde ChatGPT vs competencia) lo hace
// Pablo a mano — el CTA de WhatsApp lleva el score ya puesto.

import { useState } from "react";
import Link from "next/link";

const WHATSAPP = "56940438271";

interface ScanCheck {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
  weight: number;
}

interface ScanResult {
  ok: boolean;
  blocked: boolean;
  url: string;
  score: number;
  tier: "invisible" | "borroso" | "bien";
  checks: ScanCheck[];
}

const TIER_COPY: Record<string, { title: string; text: string }> = {
  invisible: {
    title: "Invisible para la IA",
    text: "Cuando alguien le pregunta a ChatGPT por tu rubro, hoy no tienes cómo aparecer. La buena: tu competencia probablemente está igual — el que arregle esto primero, se lleva la recomendación.",
  },
  borroso: {
    title: "Te ven, pero borroso",
    text: "La IA puede encontrarte, pero le faltan piezas clave para recomendarte con confianza. Estás a unos arreglos concretos de destacar sobre tu competencia.",
  },
  bien: {
    title: "Vas bien — faltan detalles",
    text: "Tu base es mejor que la de la mayoría. Los puntos rojos de abajo son la diferencia entre aparecer y ser LA recomendación.",
  },
};

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
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanError, setScanError] = useState("");

  const waLink = () => {
    const site = (result?.url ?? url.trim()) || "mi sitio web";
    const msg = result
      ? `Hola Pablo! Escaneé mi sitio (${site}) y sacó ${result.score}/100 en visibilidad IA. Quiero el diagnóstico completo gratis.`
      : `Hola Pablo! Quiero el diagnóstico gratis de visibilidad en IA para: ${site}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  const runScan = async () => {
    const target = url.trim();
    if (!target || scanning) return;
    setScanning(true);
    setScanError("");
    setResult(null);
    try {
      const res = await fetch(`/api/geo-scan?url=${encodeURIComponent(target)}`);
      const data = await res.json();
      if (!data.ok) {
        setScanError("Esa dirección no parece válida — prueba con el formato tunegocio.cl");
      } else {
        setResult(data as ScanResult);
      }
    } catch {
      setScanError("No pude escanear ahora — intenta de nuevo o escríbeme directo por WhatsApp.");
    } finally {
      setScanning(false);
    }
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
            Escáner gratis · Resultados al tiro · Sin compromiso
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
                onKeyDown={(e) => e.key === "Enter" && runScan()}
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
              <button
                onClick={runScan}
                disabled={scanning}
                className="hover:opacity-80 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full cursor-pointer"
                style={{
                  ...mono,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "14px 32px",
                  background: "#FFFFFF",
                  color: "#111111",
                  whiteSpace: "nowrap",
                  opacity: scanning ? 0.6 : 1,
                }}
              >
                {scanning ? "Escaneando…" : "Escanear gratis →"}
              </button>
            </div>
            <p style={{ ...mono, color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "1rem" }}>
              Análisis real de tu página, al tiro y gratis. Sin registro, sin spam, sin llamadas.
            </p>
            {scanError && (
              <p style={{ ...mono, color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", marginTop: "0.75rem" }}>
                ⚠ {scanError}
              </p>
            )}
          </div>

          {/* Resultado del escaneo */}
          {result && (
            <div
              className="rounded-xl"
              style={{ border: "1px solid #333333", background: "rgba(255,255,255,0.04)", padding: "2rem", marginTop: "1.5rem" }}
            >
              {result.blocked ? (
                <>
                  <span style={{ ...mono, fontSize: "0.7rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
                    {result.url}
                  </span>
                  <h3 style={{ ...mono, fontWeight: 700, textTransform: "uppercase", fontSize: "1.2rem", color: "rgba(255,255,255,0.95)", marginTop: "0.75rem" }}>
                    Tu sitio no deja que lo lean
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.75rem" }}>
                    No pude acceder a tu página — bloquea las visitas automáticas. Eso mismo es el hallazgo:
                    si mi escáner no entra, es probable que los bots de ChatGPT y Perplexity tampoco.
                    Estás invisible por diseño, y probablemente nadie lo decidió a propósito.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span style={{ ...mono, fontWeight: 700, fontSize: "3rem", color: "rgba(255,255,255,0.95)", lineHeight: 1 }}>
                      {result.score}<span style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.4)" }}>/100</span>
                    </span>
                    <div>
                      <h3 style={{ ...mono, fontWeight: 700, textTransform: "uppercase", fontSize: "1rem", color: "rgba(255,255,255,0.95)" }}>
                        {TIER_COPY[result.tier].title}
                      </h3>
                      <span style={{ ...mono, fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>{result.url}</span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "1rem" }}>
                    {TIER_COPY[result.tier].text}
                  </p>
                  <div style={{ marginTop: "1.5rem" }}>
                    {result.checks.map((c) => (
                      <div key={c.id} style={{ borderTop: "1px solid #1F1F1F", padding: "0.85rem 0" }}>
                        <div className="flex items-baseline gap-3">
                          <span style={{ ...mono, fontSize: "0.85rem", color: c.pass ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)" }}>
                            {c.pass ? "✓" : "✕"}
                          </span>
                          <div>
                            <span style={{ ...mono, fontSize: "0.8rem", letterSpacing: "0.03em", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>
                              {c.label}
                            </span>
                            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.2rem" }}>
                              {c.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div style={{ borderTop: "1px solid #333333", marginTop: "1.5rem", paddingTop: "1.5rem" }}>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Esto es lo que un escáner puede ver. Lo que NO puede: qué responde ChatGPT cuando le
                  preguntan por tu rubro, quién se está llevando TU recomendación y qué arreglar primero.
                  Eso te lo mando yo, gratis, en 24 hrs.
                </p>
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
                    padding: "14px 32px",
                    background: "#FFFFFF",
                    color: "#111111",
                    marginTop: "1.25rem",
                  }}
                >
                  Quiero el diagnóstico completo →
                </a>
              </div>
            </div>
          )}

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
