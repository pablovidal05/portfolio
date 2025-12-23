# 🎨 Workflow de Generación de Imágenes

Este workflow permite generar automáticamente mockups e imágenes para proyectos del portafolio usando APIs de generación de imágenes.

## 🚀 Inicio Rápido

### 1. Configurar APIs

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Google Gemini (recomendado)
GEMINI_API_KEY=tu-api-key-aqui

# OpenAI DALL-E (alternativa)
OPENAI_API_KEY=tu-api-key-aqui

# Stable Diffusion via Replicate (alternativa)
REPLICATE_API_TOKEN=tu-token-aqui
```

**Obtener API Keys:**
- **Gemini**: https://makersuite.google.com/app/apikey
- **OpenAI**: https://platform.openai.com/api-keys
- **Replicate**: https://replicate.com/account/api-tokens

### 2. Instalar Dependencias

```bash
npm install
```

Las dependencias opcionales se instalarán automáticamente si están disponibles.

### 3. Usar el Workflow

```bash
# Paso 1: Enriquece la historia del proyecto
npm run enrich-story mas-analytics-landing-page

# Paso 2: (Opcional) Revisa y edita la historia generada
# Archivo: generated/stories/mas-analytics-landing-page_story.md

# Paso 3: Genera las imágenes
npm run generate-images mas-analytics-landing-page --api gemini

# Paso 4: Actualiza el proyecto con las nuevas imágenes
npm run update-images mas-analytics-landing-page
```

## 📋 Comandos Disponibles

### Enriquecer Historia

```bash
npm run enrich-story {slug}
```

Genera una historia enriquecida del proyecto que servirá como base para generar mockups.

**Ejemplo:**
```bash
npm run enrich-story mas-analytics-landing-page
```

**Output:** `generated/stories/{slug}_story.md`

### Generar Imágenes

```bash
npm run generate-images {slug} [--api {api}] [--count {number}]
```

Genera mockups usando APIs de generación de imágenes.

**Opciones:**
- `--api`: API a usar (`gemini`, `dalle`, `stable-diffusion`) - por defecto: `gemini`
- `--count`: Número de imágenes a generar (por defecto: todas de la historia)

**Ejemplos:**
```bash
npm run generate-images mas-analytics-landing-page
npm run generate-images mas-analytics-landing-page --api dalle
npm run generate-images mas-analytics-landing-page --count 3
```

**Output:** `public/images/{slug}/`

### Actualizar Proyecto

```bash
npm run update-images {slug} [--dry-run] [--replace]
```

Actualiza `src/data/projects.ts` con las rutas de las imágenes generadas.

**Opciones:**
- `--dry-run`: Muestra qué se actualizaría sin hacer cambios
- `--replace`: Reemplaza todas las imágenes existentes

**Ejemplos:**
```bash
npm run update-images mas-analytics-landing-page
npm run update-images mas-analytics-landing-page --dry-run
npm run update-images mas-analytics-landing-page --replace
```

## 🎯 Uso desde Cursor

### Opción 1: Comandos MCP (Recomendado)

Una vez configurados los servidores MCP (ver [MCP_INTEGRATION.md](./MCP_INTEGRATION.md)), puedes usar comandos naturales en el chat de Cursor:

```
"Enriquece la historia del proyecto mas-analytics-landing-page"
"Genera mockups para mas-analytics-landing-page usando Gemini"
"Actualiza el proyecto mas-analytics-landing-page con las nuevas imágenes"
```

### Opción 2: Scripts NPM

También puedes usar los scripts directamente:

```bash
npm run enrich-story mas-analytics-landing-page
npm run generate-images mas-analytics-landing-page
npm run update-images mas-analytics-landing-page
```

## 📁 Estructura de Archivos

```
portfolio/
├── .workflows/                    # Documentación del workflow
│   ├── WORKFLOW_IMAGENES.md      # Flujo completo
│   ├── enrich-project-story.md   # Comando: enriquecer
│   ├── generate-project-images.md # Comando: generar
│   └── update-project-images.md   # Comando: actualizar
├── scripts/                       # Scripts de automatización
│   ├── project-enricher.js       # Enriquece historias
│   ├── image-generator.js        # Genera imágenes
│   └── update-project-images.js  # Actualiza projects.ts
├── generated/                     # Archivos generados
│   ├── stories/                  # Historias enriquecidas
│   ├── reports/                  # Reportes de generación
│   └── backups/                  # Backups de projects.ts
└── public/
    ├── images/                   # Imágenes de proyectos
    └── videos/                   # Videos de proyectos
```

## 🔧 Configuración Avanzada

### Personalizar Templates de Mockups

Edita `scripts/project-enricher.js` para modificar los templates de mockups según tus necesidades.

### Agregar Nuevas APIs

1. Agrega la configuración en `scripts/image-generator.js`
2. Implementa la función de generación
3. Agrega la opción en el CLI

### Personalizar Prompts

Modifica la función `generatePrompt()` en `scripts/image-generator.js` para ajustar cómo se generan los prompts para las APIs.

## 💡 Tips

1. **Revisa siempre la historia** antes de generar imágenes
2. **Itera sobre los prompts** si las imágenes no quedan bien
3. **Usa `--dry-run`** antes de actualizar projects.ts
4. **Haz backup** de projects.ts antes de actualizaciones importantes
5. **Optimiza imágenes** manualmente si es necesario (ya se hace automáticamente)

## 🐛 Solución de Problemas

### Error: "API Key no configurada"
- Verifica que `.env.local` existe y tiene las keys correctas
- Reinicia el servidor de desarrollo si es necesario

### Error: "Proyecto no encontrado"
- Verifica que el slug es correcto
- Revisa que el proyecto existe en `src/data/projects.ts`

### Imágenes de baja calidad
- Prueba con diferentes APIs (`--api dalle`)
- Ajusta los prompts en la historia enriquecida
- Regenera imágenes específicas

### Rate Limits
- Las APIs tienen límites de uso
- Espera entre generaciones si es necesario
- Considera usar múltiples APIs

## 📚 Recursos

- [Documentación completa del workflow](./WORKFLOW_IMAGENES.md)
- [Guía de enriquecimiento de historias](./enrich-project-story.md)
- [Guía de generación de imágenes](./generate-project-images.md)
- [Guía de actualización de proyectos](./update-project-images.md)

