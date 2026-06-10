# Estrategia Dual: Portfolio Fintech + Web Comercial

> Actualizado: Junio 2026

## La estrategia en una línea

- **Portfolio (este repo):** plataforma para que te contraten en una fintech (Fintoc, Racional, o las otras 538). Cero ads, contenido afilado.
- **Web #2 (nueva):** máquina de generar ingresos como freelancer/estudio. Aquí va toda la plata de ads.

---

## PARTE 1 — Portfolio: qué busca una fintech en un Product Designer

Lo que evalúan los design leads de fintechs chilenas (basado en sus ofertas reales y equipos):

1. **Casos con métricas y trade-offs** — ya lo tienes bien (Literas, Buk). Falta UN caso explícitamente financiero.
2. **Colaboración con ingeniería** — tu caso de Buk design system es tu mejor carta. Ponlo primero.
3. **Manejo de complejidad regulatoria/confianza** — fintech = diseñar para la desconfianza. Tu hero ya dice esto.
4. **Side projects cuentan** — un concepto de rediseño de un flujo de Fintoc/Racional (no pedido, publicado en el portfolio + LinkedIn) es la táctica más efectiva para que te vean. Funciona y es señal de iniciativa.

### Pendientes del portfolio (próximas sesiones)
- [ ] Crear caso de estudio fintech (concepto: rediseño de un flujo de pago/inversión real chileno)
- [ ] Reordenar proyectos: Buk primero, luego LATAM, luego Literas
- [ ] Página `/info`: agregar línea de "qué busco" (ej: "Buscando unirme a un equipo de producto fintech")
- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en Vercel y verificar en Google Search Console
- [ ] LinkedIn: titular = "Product Designer · Design Systems & Fintech" + publicar 1 caso/semana

### Canales reales para entrar a una fintech (en orden de efectividad)
1. **Referidos internos** — Chile Fintech Forum, comunidad FinteChile, eventos de Fintoc (hacen meetups). Coquimbo→Santiago vale el viaje 1 vez/mes.
2. **LinkedIn outreach directo** a design leads con el caso concepto como gancho.
3. **GetonBoard + LinkedIn Jobs** — las 540 fintechs publican ahí.
4. **Side project viral** — el rediseño concepto publicado.

---

## PARTE 2 — Web #2: el negocio freelance

### Posicionamiento recomendado

**"Diseño + automatización que genera ventas"** — no eres una agencia de diseño más; eres el que entrega la tienda + los flujos automatizados + los ads funcionando. El stack Claude Code/agentes/n8n es tu diferenciador real: nadie en La Serena/Coquimbo lo ofrece, y casi nadie en Chile lo empaqueta así.

### Servicios productizados (precio fijo, alcance fijo — esto es lo que más convierte)

| Paquete | Qué incluye | Precio sugerido CLP |
|---|---|---|
| **Tienda Lista** | Shopify completo: diseño, carga 20 productos, checkout, email de carrito abandonado | $800K – 1.2M |
| **Landing que Convierte** | Landing + copy + A/B test + pixel/analytics configurado | $400K – 600K |
| **Piloto Automático** | 3 automatizaciones n8n (SII/facturación, WhatsApp stock, email post-venta) | $500K – 900K + 100-200K/mes mantención |
| **Marca Completa** | Logo, sistema visual, plantillas RRSS, brand book | $600K – 900K |
| **Ads Encendidos** | Setup Meta+Google Ads, creatividades, 1 mes de optimización | $400K setup + 15-20% del gasto/mes |

**Meta: 5 clientes/mes a ticket promedio ~$600K = $3M/mes.** Con mantenciones recurrentes (automatización + ads) bajas la presión de venta nueva cada mes.

### El modelo "intermediario" (recurrente, lo más valioso)

1. Cliente paga mantención mensual de automatizaciones ($100-200K/mes c/u)
2. Tú administras los flujos n8n (self-hosted en un VPS de ~$10 USD/mes, margen casi total)
3. Con 10 clientes en mantención = $1-2M/mes recurrente sin vender nada nuevo
4. Casos típicos que ya funcionan en Chile: Shopify↔SII facturación automática, alertas de stock por WhatsApp, secuencias de email post-compra, reportes de venta automáticos

### A quién venderle (Coquimbo/La Serena primero, luego Chile)

- Tiendas Shopify/WooCommerce regionales (turismo, deporte outdoor, gastronomía)
- Hoteles y operadores turísticos del valle del Elqui (alta necesidad de reservas/automatización)
- Pymes de Santiago vía ads (no necesitas estar ahí)
- Marcas tipo outdoor/lifestyle: el ángulo es "te armo la tienda + la hago vender"

### Plan de ads para la web #2 (presupuesto inicial sugerido: $300-500K/mes)

1. **Google Ads Search** (60%): "diseño tienda shopify chile", "automatizar facturación shopify", "agencia shopify la serena" — intención de compra alta, competencia baja en regiones
2. **Meta Ads** (40%): retargeting + lookalike de visitantes; creatividad = casos antes/después con números
3. **Orgánico paralelo:** 2 posts LinkedIn/semana + 1 caso detallado/mes en el blog de la web #2 (SEO long-tail: "cómo automatizar X en Shopify Chile")

### Embudo de la web #2

```
Ads/SEO → Landing por servicio → Lead form corto (3 campos) + WhatsApp
→ Respuesta automática (n8n) en <5 min → Llamada de 20 min → Propuesta de 1 página → Cierre
```

La velocidad de respuesta es el factor #1 de cierre en pymes. Automatiza la primera respuesta con n8n: eso ES tu demo de producto.

### Stack sugerido web #2

- Next.js + Vercel (igual que el portfolio, reusas componentes)
- CMS: archivos MD o Notion API para casos/blog
- n8n self-hosted (Railway/Hetzner ~$10 USD/mes)
- WhatsApp Business API + Cal.com para agendar
- Analytics: Vercel Analytics + Meta Pixel + Google Tag

---

## Mi opinión honesta (me pediste no darte la razón)

1. **Fintoc/Racional como empleado: viable pero competitivo.** Son los equipos más deseados de Chile. Tu portfolio aún no tiene NINGÚN caso financiero — ese es el gap #1, no el SEO. El caso concepto es más importante que cualquier optimización técnica.
2. **El plan B de fintech es amplio:** hay 540 fintechs; las medianas (Toku, Xepelin, Klap, Fintual, Tenpo, Mach) contratan más seguido que Fintoc y son igual de buen trampolín.
3. **La web #2 es tu mejor apuesta de ingresos a 90 días.** Conseguir pega en fintech toma 2-6 meses; cerrar 2-3 pymes locales toma semanas si mueves ads + WhatsApp.
4. **No vendas "diseño". Vende resultados con número:** "tu tienda facturando sin que toques nada". El diseño es el medio.
