# Design system del portfolio — pablovidalg.xyz

Fuente de verdad visual. Humano la lee como documentación; agente la lee como spec ANTES de tocar cualquier componente o página. Si un valor no está aquí, no se inventa: se propone aquí primero y después se usa.

## Regla cero: tipografía

**Una sola familia: JetBrains Mono.** No existe serif en este sitio.

- `globals.css` fuerza `JetBrains Mono` en body, h1-h6, p, span, div, a, li y button. Los headings además llevan `text-transform: uppercase` y `letter-spacing: 0.05em` automáticos.
- **PROHIBIDO** poner `fontFamily` inline con Sentient, Source Serif, Fraunces o cualquier serif. Las clases `.sentient-text` y `.crimson-text-title` son legacy: hoy remapean a JetBrains Mono; no crear usos nuevos.
- Como los títulos van en mono uppercase, ocupan mucho ancho: los tamaños se mantienen contenidos (ver escala). Nunca compensar con letter-spacing negativo inline.

### Escala tipográfica

| Rol | Tamaño | Peso | Notas |
|---|---|---|---|
| h1 hero (home) | 2.5rem | 400 | Único título grande del sitio |
| h1 de página (/blog, posts) | clamp(1.5rem–2.25rem) | 400 | |
| h2 de sección (home) | clamp(1.5rem, 3.5vw, 2rem) | 400 | |
| h2 dentro de post | 1.25rem | 400 | |
| h3 título de item en listas | 1.15–1.2rem | 400 | |
| Cuerpo | 1rem (line-height 1.6–1.8) | 400 | |
| Metadatos / fechas / captions | 0.75–0.8rem | 400 | letterSpacing 0.05em |
| Chips y botones | 0.7–0.85rem | 400 | uppercase, letterSpacing 0.05–0.1em |

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

**Alineados a la IZQUIERDA** (no centrados). Estructura:

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
