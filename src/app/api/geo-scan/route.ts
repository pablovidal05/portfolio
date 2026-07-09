import { NextRequest, NextResponse } from "next/server";

// Scanner GEO instantáneo: fetch del sitio del visitante + checks de visibilidad
// ante buscadores con IA. Devuelve score 0-100 + hallazgos. El diagnóstico
// completo (qué responde ChatGPT vs competencia) lo hace Pablo a mano — esto
// es el teaser con data real para que el lead vea valor al tiro.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 GEOScan/1.0 (+https://pablovidalg.xyz/geo)";

const AI_BOTS = ["GPTBot", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "anthropic-ai"];

interface Check {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
  weight: number;
}

function normalizeUrl(raw: string): string | null {
  let u = raw.trim();
  if (!u) return null;
  if (!/^https?:\/\//i.test(u)) u = `https://${u}`;
  try {
    const parsed = new URL(u);
    if (!parsed.hostname.includes(".")) return null;
    // Solo homepage — no rutas raras ni IPs locales
    if (/^(localhost|127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|0\.)/.test(parsed.hostname)) return null;
    return `${parsed.protocol}//${parsed.hostname}`;
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url: string, ms: number): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html,*/*" },
      redirect: "follow",
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(t);
  }
}

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("url") ?? "";
  const base = normalizeUrl(raw);
  if (!base) {
    return NextResponse.json({ ok: false, error: "invalid_url" }, { status: 400 });
  }

  let html = "";
  let status = 0;
  try {
    const res = await fetchWithTimeout(base, 9000);
    status = res.status;
    if (res.ok) html = (await res.text()).slice(0, 800_000);
  } catch {
    status = 0;
  }

  // Sitio bloquea bots o no responde → eso MISMO es el hallazgo
  if (!html) {
    return NextResponse.json({
      ok: true,
      blocked: true,
      status,
      url: base,
      score: 0,
      tier: "invisible",
      checks: [],
    });
  }

  const lower = html.toLowerCase();

  // robots.txt y llms.txt en paralelo (best-effort)
  let robotsTxt = "";
  let llmsOk = false;
  await Promise.allSettled([
    fetchWithTimeout(`${base}/robots.txt`, 5000).then(async (r) => {
      if (r.ok) robotsTxt = (await r.text()).slice(0, 50_000);
    }),
    fetchWithTimeout(`${base}/llms.txt`, 5000).then(async (r) => {
      if (r.ok) {
        const body = (await r.text()).slice(0, 2000);
        // Muchos SPA devuelven 200 con el index.html — validar que sea texto plano
        llmsOk = !body.toLowerCase().includes("<html");
      }
    }),
  ]);

  // ---- checks ----
  const jsonLdBlocks = html.match(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi) ?? [];
  const jsonLdContent = jsonLdBlocks.join(" ");
  const hasJsonLd = jsonLdBlocks.length > 0;

  const bizTypes =
    jsonLdContent.match(
      /"@type"\s*:\s*"?(LocalBusiness|Hotel|LodgingBusiness|Restaurant|Dentist|MedicalClinic|MedicalBusiness|TouristAttraction|TravelAgency|Product|Service|Organization|ProfessionalService|Store)/gi
    ) ?? [];
  const hasBizType = bizTypes.length > 0;

  const hasFaq =
    /FAQPage/i.test(jsonLdContent) || /preguntas\s+frecuentes|frequently\s+asked/i.test(lower);

  const metaDesc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{10,})["']/i)
    ?? html.match(/<meta[^>]+content=["']([^"']{10,})["'][^>]+name=["']description["']/i);

  const title = html.match(/<title[^>]*>([^<]{5,})<\/title>/i);
  const titleGood = !!title && title[1].trim().length >= 15;

  const hasH1 = /<h1[\s>]/i.test(html);

  const hasPhone = /(\+?56\s?9?\s?\d{4}\s?\d{4})|(\+\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4})|tel:/i.test(html);

  const hasPrices = /\$\s?[\d.,]{3,}|CLP|precio|desde\s+\$/i.test(lower);

  const hasOg = /property=["']og:title["']/i.test(html) && /property=["']og:description["']/i.test(html);

  // robots: ¿bloquea explícitamente algún bot de IA?
  let blockedBots: string[] = [];
  if (robotsTxt) {
    const sections = robotsTxt.split(/(?=user-agent\s*:)/i);
    for (const bot of AI_BOTS) {
      const sec = sections.find((s) => new RegExp(`user-agent\\s*:\\s*${bot}`, "i").test(s));
      if (sec && /disallow\s*:\s*\/\s*$/im.test(sec)) blockedBots.push(bot);
    }
  }
  const aiBotsOk = blockedBots.length === 0;

  const hasLang = /<html[^>]+lang=/i.test(html);

  const checks: Check[] = [
    {
      id: "jsonld",
      label: "Datos estructurados (schema)",
      pass: hasJsonLd,
      detail: hasJsonLd
        ? `Encontré ${jsonLdBlocks.length} bloque(s) de datos estructurados.`
        : "Cero structured data. La IA no puede 'leer' qué tipo de negocio eres — este es el arreglo #1.",
      weight: 15,
    },
    {
      id: "biztype",
      label: "Tipo de negocio declarado",
      pass: hasBizType,
      detail: hasBizType
        ? `Declaras: ${[...new Set(bizTypes.map((b) => b.split(/"/).pop()))].slice(0, 3).join(", ")}.`
        : "Sin tipo de negocio (Hotel, Clínica, Servicio…) en formato que la IA entiende.",
      weight: 10,
    },
    {
      id: "faq",
      label: "Preguntas frecuentes legibles",
      pass: hasFaq,
      detail: hasFaq
        ? "Hay FAQ detectable — bien: la IA responde preguntas con TU contenido."
        : "Sin FAQ embebida. Cuando pregunten '¿cuánto cuesta?' o '¿dónde están?', la IA responde con datos de otros.",
      weight: 10,
    },
    {
      id: "metadesc",
      label: "Descripción del sitio",
      pass: !!metaDesc,
      detail: metaDesc
        ? "Meta description presente."
        : "Sin meta description — la primera línea que la IA usa para resumirte no existe.",
      weight: 10,
    },
    {
      id: "title",
      label: "Título descriptivo",
      pass: titleGood,
      detail: titleGood ? `"${title![1].trim().slice(0, 60)}"` : "Título ausente o muy corto — di qué eres y dónde.",
      weight: 5,
    },
    {
      id: "h1",
      label: "Encabezado principal (H1)",
      pass: hasH1,
      detail: hasH1 ? "H1 presente." : "Sin H1 — la jerarquía que los buscadores leen primero.",
      weight: 5,
    },
    {
      id: "phone",
      label: "Teléfono visible en el texto",
      pass: hasPhone,
      detail: hasPhone
        ? "Teléfono encontrado en la página."
        : "Sin teléfono en texto plano — la IA no puede dar tu contacto (y el cliente se va al que sí aparece).",
      weight: 10,
    },
    {
      id: "prices",
      label: "Precios o referencias de valor",
      pass: hasPrices,
      detail: hasPrices
        ? "Hay referencias de precio en el texto."
        : "Sin precios en texto. 'Cuánto cuesta X' se responde con datos de tu competencia.",
      weight: 10,
    },
    {
      id: "og",
      label: "Vista previa al compartir (Open Graph)",
      pass: hasOg,
      detail: hasOg ? "Open Graph completo." : "Sin OG completo — los links compartidos salen sin título/descripción.",
      weight: 5,
    },
    {
      id: "aibots",
      label: "Bots de IA con acceso permitido",
      pass: aiBotsOk,
      detail: aiBotsOk
        ? robotsTxt
          ? "Ningún bot de IA bloqueado en robots.txt."
          : "Sin robots.txt restrictivo detectado."
        : `Bloqueas a: ${blockedBots.join(", ")} — literalmente le cierras la puerta a ChatGPT/Perplexity.`,
      weight: 10,
    },
    {
      id: "llms",
      label: "llms.txt (guía para IAs)",
      pass: llmsOk,
      detail: llmsOk
        ? "Tienes llms.txt — estás adelantado."
        : "Sin llms.txt — el estándar emergente para explicarle tu sitio a las IAs. Casi nadie lo tiene: ventaja fácil.",
      weight: 5,
    },
    {
      id: "lang",
      label: "Idioma declarado",
      pass: hasLang,
      detail: hasLang ? "Atributo de idioma presente." : "Sin atributo lang — señal básica que falta.",
      weight: 5,
    },
  ];

  const score = checks.reduce((acc, c) => acc + (c.pass ? c.weight : 0), 0);
  const tier = score < 40 ? "invisible" : score < 70 ? "borroso" : "bien";

  return NextResponse.json({ ok: true, blocked: false, url: base, score, tier, checks });
}
