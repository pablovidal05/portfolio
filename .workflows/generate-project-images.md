# 🎨 Comando: Generar Imágenes del Proyecto

## Propósito

Genera automáticamente mockups estáticos y animados usando APIs de generación de imágenes basándose en la historia enriquecida del proyecto.

## Uso

```
/generate-project-images {slug} [--api {api-name}] [--count {number}]
```

**Ejemplos:**
```
/generate-project-images mas-analytics-landing-page
/generate-project-images mas-analytics-landing-page --api gemini
/generate-project-images mas-analytics-landing-page --count 5
```

## Parámetros

- `slug`: Slug del proyecto (requerido)
- `--api`: API a usar (`gemini`, `dalle`, `stable-diffusion`) - por defecto: `gemini`
- `--count`: Número de imágenes a generar (por defecto: según la historia)

## Proceso

1. **Lee la historia enriquecida** desde `generated/stories/{slug}_story.md`
2. **Para cada mockup descrito:**
   - Genera prompt detallado para la API
   - Llama a la API de generación
   - Descarga la imagen generada
   - Optimiza y redimensiona
   - Guarda en `public/images/{slug}/`
3. **Genera mockups animados** (si se especifica en la historia)
4. **Crea reporte** de generación

## APIs Soportadas

### Google Gemini (imagen 2.0)
- **Ventaja:** Alta calidad, comprensión contextual
- **Configuración:** `GEMINI_API_KEY` en variables de entorno
- **Uso:** Por defecto si está configurado

### OpenAI DALL-E 3
- **Ventaja:** Excelente para UI/UX, muy realista
- **Configuración:** `OPENAI_API_KEY` en variables de entorno
- **Uso:** `--api dalle`

### Stable Diffusion (via Replicate)
- **Ventaja:** Rápido, económico, customizable
- **Configuración:** `REPLICATE_API_TOKEN` en variables de entorno
- **Uso:** `--api stable-diffusion`

## Output

### Imágenes Estáticas
- **Ubicación:** `public/images/{slug}/`
- **Nomenclatura:** `{slug}-{mockup-name}.jpg` o `.png`
- **Formato:** JPG para fotos, PNG para UI
- **Tamaño:** 1920x1080px (16:9) o según especificación

### Videos Animados (opcional)
- **Ubicación:** `public/videos/{slug}/`
- **Nomenclatura:** `{slug}-{mockup-name}-animated.mp4`
- **Formato:** MP4 (H.264)
- **Duración:** 5-15 segundos

### Reporte
- **Ubicación:** `generated/reports/{slug}_generation_report.md`
- **Contenido:** Lista de imágenes generadas, errores, estadísticas

## Ejemplo de Prompt Generado

Para un mockup de "Hero Section":

```
Create a professional landing page hero section mockup for a data and AI consultancy company called "Mas Analytics". 

Visual requirements:
- Modern, clean design with high-tech aesthetic
- Main headline: "Transformamos datos en decisiones estratégicas"
- Subheadline: "Consultoría especializada en Datos e Inteligencia Artificial"
- Primary CTA button: "Conoce más"
- Background: Abstract data visualization or AI-related imagery
- Color scheme: Blue (#0066CC), dark gray (#1A1A1A), white
- Typography: Modern sans-serif (Inter or Poppins style)
- Layout: Centered content, generous spacing
- Style: Minimalist, professional, innovative
- Device: Desktop viewport (1920x1080px)
- Mood: Trustworthy, innovative, data-driven

The design should look like a real, production-ready landing page hero section, suitable for a portfolio showcase.
```

## Optimización Automática

Las imágenes se optimizan automáticamente:
- **Redimensionamiento:** A tamaño estándar (1920x1080px)
- **Compresión:** Optimización de peso sin pérdida visible de calidad
- **Formato:** Conversión a formato apropiado (JPG/PNG)

## Manejo de Errores

- Si una API falla, intenta con otra disponible
- Si todas fallan, guarda el prompt para generación manual
- Reporta errores en el reporte de generación

## Regeneración

Para regenerar un mockup específico:
```
/generate-project-images {slug} --mockup {mockup-name}
```

Para regenerar todos:
```
/generate-project-images {slug} --force
```

## Notas

- Las imágenes se generan de forma secuencial para evitar rate limits
- Se guarda un log de cada generación
- Las imágenes existentes no se sobrescriben sin `--force`
- Se puede especificar estilo adicional con `--style {style-name}`





