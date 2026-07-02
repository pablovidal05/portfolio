# Design system del portfolio — pablovidalg.xyz

Fuente de verdad visual. Humano la lee como documentación; agente la lee como spec ANTES de tocar cualquier componente o página. Si un valor no está aquí, no se inventa: se propone aquí primero y después se usa.

## Regla cero: dos contextos, cada uno con su tipografía

El sitio tiene DOS contextos visuales. Identifica en cuál estás ANTES de escribir estilos:

### Contexto oscuro (home, secciones sobre negro)
- **JetBrains Mono en todo.** `globals.css` la fuerza en body, h1-h6, p, span, div, a, li y button. Headings automáticamente `uppercase` + `letter-spacing: 0.05em`.
- No poner `fontFamily` inline: dejar que la regla global actúe. Como los títulos van en mono uppercase, ocupan mucho ancho — tamaños contenidos (ver escala).

### ⚠️ Estado real de las fuentes (verificado 2026-07-01)
`public/fonts/` NO contiene los woff2 de Monument Grotesk ni Guyot (solo README), y `--font-inter` no está definido en `layout.tsx`. Consecuencia: en el contexto claro, la cadena `'Monument Grotesk Variable', var(--font-inter), system-ui` se invalida y TODO hereda JetBrains Mono del body. Detalle de proyectos y blog se ven mono hoy — consistentes entre sí, pero no es el diseño declarado. Si Pablo agrega los woff2 a `public/fonts/` (nombres exactos de los @font-face en globals.css) o define Inter en layout.tsx, detalle y blog se corrigen juntos sin tocar componentes. Mientras tanto: MANTENER estas cadenas tal cual — no "arreglar" con otra fuente.

### Contexto claro (detalle de proyecto, /blog, posts — fondo blanco)
- Layout de referencia: `ProjectDetail.tsx` → página `bg-white text-black`, header CENTRADO en columna `max-w-[800px]`, y si hay secciones, índice lateral sticky (`w-[260-280px]`, `lg:sticky lg:top-24`, `border-r`) + contenido.
- Headings: `'Monument Grotesk Variable', var(--font-inter), system-ui, sans-serif`, peso 600-700, `letterSpacing -0.01/-0.02em`, `textTransform: "none"` explícito (para anular el uppercase global).
- Cuerpo de lectura: `var(--font-inter), system-ui, sans-serif`, gris `#374151`/`#6B7280`.
- Mono queda para: metadatos, fechas, captions, chips, código.
- **PROHIBIDO en ambos contextos**: Sentient, Source Serif, Fraunces o cualquier serif inline. `.sentient-text` y `.crimson-text-title` son legacy (remapean a mono); no crear usos nuevos.

### Escala tipográfica

| Rol | Contexto | Tamaño | Peso |
|---|---|---|---|
| h1 hero (home) | oscuro/mono | 2.5rem | 400 |
| h2 de sección (home) | oscuro/mono | clamp(1.5rem, 3.5vw, 2rem) | 400 |
| h3 item de lista (home) | oscuro/mono | 1.15rem | 400 |
| h1 de página (detalle, /blog, post) | claro/Grotesk | clamp(1.75rem, 4vw, 2.5rem) | 700 |
| h2 dentro de post / item lista blog | claro/Grotesk | 1.35rem | 600 |
| Cuerpo lectura larga | claro/Inter | 1–1.05rem, line-height 1.7-1.8 | 400 |
| Metadatos / fechas / captions | ambos/mono | 0.75–0.8rem | 400 |
| Chips y botones | ambos/mono | 0.7–0.85rem, uppercase | 400 |

## Color (tokens en `@theme` de globals.css)

| Token / valor | Uso |
|---|---|
| `#000000` (background-primary) | Fondo general |
| `#FFFFFF` | Texto principal sobre negro; fondo de secciones invertidas (banda blog, páginas de detalle) |
| `rgba(255,255,255,0.95)` | Títulos sobre negro |
| `rgba(255,255,255,0.6–0.78)` | Texto secundario/cuerpo sobre negro |
| `rgba(255,255,255,0.45–0.55)` | Metadatos sobre negro |
| `#1A1A1A` / `#1F1F1F` | Bordes sobre negro |
| `#333333` | Divisores y bordes de chips/botones sobre negro |
| Sobre blanco: `#111111` títulos, `#666666` secundario, `#999999` metadatos, `#EAEAEA`/`#E5E5E5` bordes | Secciones invertidas |
| `#10B981` (verde KPI) | SOLO para el subtítulo de KPI en ProjectCard |

Regla: no introducir colores nuevos. Acentos = contraste blanco/negro, no color.

## Encabezados de sección (patrón chip — referencia Fintoc)

Alineación por contexto: **en home (oscuro), a la IZQUIERDA**; **en páginas de detalle/blog (claro), header CENTRADO** como ProjectDetail. Estructura:

1. Chip: pill `rounded-full`, uppercase, 0.7rem, letterSpacing 0.1em, padding `6px 14px`. Sobre negro: borde `#333`, fondo `rgba(255,255,255,0.05)`, texto `rgba(255,255,255,0.7)`. Sobre blanco: borde `#E5E5E5`, fondo `#FAFAFA`, texto `#555`.
2. h2 de sección (escala de arriba).
3. Subtítulo opcional: 0.95rem, color secundario, max-width ~36-40rem.

El cambio de contexto entre secciones se marca con INVERSIÓN DE FONDO (negro ↔ blanco), no con tipografía distinta. Ejemplo vivo: home = portafolio en negro, blog "La Comunidad" en banda blanca.

## Botones y CTAs

Pill `rounded-full`, uppercase, 0.85rem, letterSpacing 0.05em, padding `14px 32px`.
- Sobre negro: transparente con borde `#333333`, texto blanco, hover opacity 70%.
- Sobre blanco: fondo `#111111`, texto blanco, hover opacity 60%.

## Espaciado y layout

- Contenedor: `.page-layout`; lectura larga max-w-3xl; secciones max-w-4xl.
- Separación entre secciones de home: 8rem. Padding interno de banda invertida: 6rem vertical.
- Listas (blog, relacionados): items separados por `border-top` 1px, padding vertical 1.75-2rem. Sin cards, sin sombras.
- Imágenes en posts: borde 1px (`#1F1F1F`), border-radius 8px, caption en 0.75rem metadato.

## Voz visual

Brutalist-mono, sobrio: mono uppercase + blanco/negro + fondo Waves animado en home. Nada de gradientes, glassmorphism, sombras ni emojis en UI. La personalidad la ponen el contenido y el contraste, no la decoración.

## Checklist antes de commitear UI nueva

- [ ] ¿Cero `fontFamily` inline serif? (grep Sentient/Serif/Fraunces debe dar solo legacy)
- [ ] ¿Títulos dentro de la escala y alineados a la izquierda?
- [ ] ¿Colores solo de la tabla?
- [ ] ¿Chips/botones con el patrón pill?
- [ ] `npm run build` pasa.
