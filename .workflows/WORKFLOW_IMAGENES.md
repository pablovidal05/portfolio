# 🎨 Flujo de Generación de Imágenes - Portafolio

Este documento describe el flujo completo para generar automáticamente mockups e imágenes de proyectos a partir de descripciones enriquecidas.

---

## 📂 Estructura de Carpetas

```
portfolio/
├── .workflows/                    # Workflows y comandos
│   ├── WORKFLOW_IMAGENES.md      # Este archivo
│   ├── enrich-project-story.md   # Comando: enriquecer historia
│   └── generate-project-images.md # Comando: generar imágenes
├── scripts/                       # Scripts de automatización
│   ├── image-generator.js        # Generador de imágenes con APIs
│   └── project-enricher.js       # Enriquecimiento de historias
├── generated/                    # Archivos generados temporalmente
│   └── stories/                  # Historias enriquecidas por proyecto
└── public/images/projects/        # Imágenes finales de proyectos
```

---

## 📋 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `/enrich-project-story {slug}` | Enriquece la historia del proyecto con detalles visuales y casos de uso |
| `/generate-project-images {slug}` | Genera mockups estáticos y animados usando APIs |
| `/update-project-images {slug}` | Actualiza el archivo projects.ts con las nuevas imágenes |

---

## 🔄 Flujo Completo

```
┌─────────────────────────────────────────────────────────────────┐
│              FLUJO DE GENERACIÓN DE IMÁGENES                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. ENRIQUECER HISTORIA                                          │
│     └── /enrich-project-story mas-analytics-landing-page        │
│         └── Genera historia enriquecida con:                     │
│             - Casos de uso detallados                            │
│             - Descripción visual de cada mockup                 │
│             - Contexto y escenarios                              │
│             - Guía de estilo y paleta                            │
│                                                                  │
│  2. REVISAR HISTORIA                                             │
│     └── Usuario revisa y ajusta la historia enriquecida          │
│         └── Archivo: generated/stories/{slug}_story.md          │
│                                                                  │
│  3. GENERAR IMÁGENES                                             │
│     └── /generate-project-images mas-analytics-landing-page      │
│         └── Genera mockups usando APIs:                          │
│             - Mockups estáticos (3-5 imágenes)                    │
│             - Mockups animados (opcional, 1-2 videos)            │
│             - Guarda en public/images/{slug}/                     │
│                                                                  │
│  4. REVISAR IMÁGENES                                              │
│     └── Usuario revisa las imágenes generadas                    │
│         └── Puede regenerar si es necesario                      │
│                                                                  │
│  5. ACTUALIZAR PROYECTO                                          │
│     └── /update-project-images mas-analytics-landing-page       │
│         └── Actualiza projects.ts con rutas de imágenes         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Detalle de Cada Paso

### 1. Enriquecer Historia (`/enrich-project-story`)

**Propósito:** Transformar la descripción del proyecto en una historia visual detallada.

**Input:** 
- Slug del proyecto (ej: `mas-analytics-landing-page`)
- Información del proyecto desde `src/data/projects.ts`

**Output:** 
- Archivo `generated/stories/{slug}_story.md` con:
  - Historia enriquecida del proyecto
  - Descripción detallada de cada mockup a generar
  - Casos de uso y escenarios
  - Guía de estilo visual
  - Paleta de colores y tipografía
  - Contexto de uso

**Qué incluye la historia:**
- **Overview visual:** Descripción general del proyecto
- **Mockup 1 - Hero Section:** Descripción detallada de la sección principal
- **Mockup 2 - Features:** Descripción de características clave
- **Mockup 3 - Use Cases:** Casos de uso visuales
- **Mockup 4 - Results/Testimonials:** Resultados o testimonios
- **Mockup 5 - CTA Section:** Llamados a la acción
- **Guía de estilo:** Colores, tipografía, espaciado
- **Contexto:** Dispositivos, tamaños, estados

---

### 2. Generar Imágenes (`/generate-project-images`)

**Propósito:** Crear mockups estáticos y animados usando APIs de generación de imágenes.

**Input:** 
- Historia enriquecida de `generated/stories/{slug}_story.md`
- Configuración de APIs (Gemini, DALL-E, etc.)

**Output:** 
- Imágenes en `public/images/{slug}/`
- Videos (opcional) en `public/videos/{slug}/`

**Proceso:**
1. Lee la historia enriquecida
2. Para cada mockup descrito:
   - Genera prompt detallado para la API
   - Llama a la API de generación de imágenes
   - Descarga y optimiza la imagen
   - Guarda con nombre descriptivo
3. Genera mockups animados (si se especifica)
4. Crea un reporte de generación

**APIs Soportadas:**
- **Google Gemini** (imagen 2.0)
- **OpenAI DALL-E 3**
- **Stable Diffusion** (via Replicate)
- **Midjourney** (via API si está disponible)

---

### 3. Actualizar Proyecto (`/update-project-images`)

**Propósito:** Actualizar automáticamente `src/data/projects.ts` con las rutas de las nuevas imágenes.

**Input:** 
- Slug del proyecto
- Imágenes generadas en `public/images/{slug}/`

**Output:** 
- Archivo `projects.ts` actualizado con rutas correctas

**Proceso:**
1. Escanea `public/images/{slug}/` para encontrar imágenes
2. Ordena las imágenes por nombre
3. Actualiza el array `images` del proyecto
4. Si hay videos, actualiza el array `videos`

---

## 🛠️ Configuración de APIs

### Google Gemini

```bash
# Instalar dependencia
npm install @google/generative-ai

# Configurar variable de entorno
export GEMINI_API_KEY="tu-api-key"
```

### OpenAI DALL-E

```bash
# Instalar dependencia
npm install openai

# Configurar variable de entorno
export OPENAI_API_KEY="tu-api-key"
```

### Stable Diffusion (Replicate)

```bash
# Instalar dependencia
npm install replicate

# Configurar variable de entorno
export REPLICATE_API_TOKEN="tu-api-token"
```

---

## 📁 Estructura de Archivos Generados

```
generated/
└── stories/
    ├── mas-analytics-landing-page_story.md
    ├── heliboss-landing-page_story.md
    └── literas-mx_story.md

public/
├── images/
│   ├── mas-analytics/
│   │   ├── mas-analytics-hero.jpg
│   │   ├── mas-analytics-features.jpg
│   │   ├── mas-analytics-usecases.jpg
│   │   ├── mas-analytics-results.jpg
│   │   └── mas-analytics-cta.jpg
│   └── projects/  # (legacy, para proyectos existentes)
└── videos/
    └── mas-analytics/
        └── mas-analytics-hero-animated.mp4
```

---

## 💡 Tips

1. **Enriquece primero:** Una historia detallada produce mejores mockups
2. **Revisa la historia:** Ajusta los detalles antes de generar imágenes
3. **Itera:** Puedes regenerar mockups específicos si no quedan bien
4. **Optimiza:** Las imágenes se optimizan automáticamente, pero revisa tamaños
5. **Backup:** Siempre haz backup de `projects.ts` antes de actualizar

---

## 🔧 Requisitos

- **Node.js 18+**: Para ejecutar scripts
- **API Keys**: Al menos una API de generación de imágenes configurada
- **Espacio en disco**: ~10-50MB por proyecto (dependiendo de cantidad de imágenes)

---

## 🚀 Ejemplo de Uso Completo

```bash
# 1. Enriquece la historia del proyecto
/enrich-project-story mas-analytics-landing-page

# 2. Revisa y ajusta la historia generada
# (edita generated/stories/mas-analytics-landing-page_story.md)

# 3. Genera las imágenes
/generate-project-images mas-analytics-landing-page

# 4. Revisa las imágenes generadas
# (revisa public/images/mas-analytics/)

# 5. Actualiza el proyecto
/update-project-images mas-analytics-landing-page
```

---

## 📊 Formatos y Especificaciones

### Imágenes Estáticas
- **Formato:** JPG (para fotos) o PNG (para UI)
- **Tamaño:** 1920x1080px (16:9) o 1200x1600px (3:4)
- **Peso máximo:** 2MB por imagen
- **Optimización:** Automática con sharp o similar

### Videos Animados
- **Formato:** MP4 (H.264)
- **Duración:** 5-15 segundos
- **Resolución:** 1920x1080px
- **FPS:** 30fps
- **Peso máximo:** 10MB por video

---

## 🔄 Integración con Proyectos Existentes

Si ya tienes imágenes (como heliboss o literas), el sistema:
1. Detecta imágenes existentes
2. Solo genera las que faltan
3. Mantiene las rutas existentes
4. No sobrescribe sin confirmación

---

## 🎯 Próximos Pasos

- [ ] Integrar con más APIs de generación
- [ ] Soporte para mockups 3D
- [ ] Generación de variantes automáticas
- [ ] Integración con Figma para exportar componentes
- [ ] Sistema de templates para diferentes tipos de proyectos





