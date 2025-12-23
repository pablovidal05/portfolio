# 🎨 Workflow de Generación Automática de Imágenes

Sistema completo para generar automáticamente mockups e imágenes de proyectos usando APIs de IA, similar al workflow de Sudarte pero enfocado en generación visual.

## 🚀 Inicio Rápido

### 1. Configurar API Keys

Crea un archivo `.env.local` en la raíz:

```bash
# Google Gemini (recomendado)
GEMINI_API_KEY=tu-api-key

# OpenAI DALL-E (alternativa)
OPENAI_API_KEY=tu-api-key
```

### 2. Instalar Dependencias

```bash
npm install
npm install @modelcontextprotocol/sdk  # Para servidores MCP
```

### 3. Usar el Workflow

#### Opción A: Usando MCP (Recomendado - Integración con Cursor)

Una vez configurado (ver [MCP_INTEGRATION.md](./.workflows/MCP_INTEGRATION.md)), usa comandos naturales en el chat de Cursor:

```
"Enriquece la historia del proyecto mas-analytics-landing-page"
"Genera mockups para mas-analytics-landing-page"
"Actualiza el proyecto mas-analytics-landing-page"
```

#### Opción B: Usando Scripts NPM

```bash
# 1. Enriquece la historia
npm run enrich-story mas-analytics-landing-page

# 2. (Opcional) Revisa la historia generada
# Edita: generated/stories/mas-analytics-landing-page_story.md

# 3. Genera las imágenes
npm run generate-images mas-analytics-landing-page

# 4. Actualiza el proyecto
npm run update-images mas-analytics-landing-page
```

## 📋 Flujo Completo

```
┌─────────────────────────────────────────┐
│  1. ENRIQUECER HISTORIA                 │
│     /enrich-project-story {slug}        │
│     → Genera historia visual detallada  │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  2. REVISAR (Opcional)                  │
│     Edita la historia si es necesario   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  3. GENERAR IMÁGENES                     │
│     /generate-project-images {slug}      │
│     → Crea mockups usando APIs           │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  4. ACTUALIZAR PROYECTO                 │
│     /update-project-images {slug}      │
│     → Actualiza projects.ts             │
└─────────────────────────────────────────┘
```

## 📚 Documentación Completa

- **[Workflow Principal](./.workflows/WORKFLOW_IMAGENES.md)** - Flujo completo detallado
- **[Guía de Uso](./.workflows/README.md)** - Cómo usar los comandos
- **[Ejemplo de Historia](./.workflows/ejemplo-historia-enriquecida.md)** - Ejemplo de output

## 🎯 Características

✅ **Enriquecimiento automático** de historias de proyectos  
✅ **Generación de mockups** usando múltiples APIs (Gemini, DALL-E, Stable Diffusion)  
✅ **Actualización automática** de `projects.ts`  
✅ **Optimización de imágenes** automática  
✅ **Soporte para videos** animados (opcional)  
✅ **Backups automáticos** antes de actualizar  

## 🔧 APIs Soportadas

- **Google Gemini 2.0** (recomendado para UI/UX)
- **OpenAI DALL-E 3** (alta calidad)
- **Stable Diffusion** via Replicate (económico)

## 💡 Ejemplo de Uso

```bash
# Proyecto sin imágenes
/enrich-project-story mas-analytics-landing-page
/generate-project-images mas-analytics-landing-page --api gemini
/update-project-images mas-analytics-landing-page
```

El sistema:
1. Lee el proyecto de `projects.ts`
2. Genera una historia enriquecida con casos de uso
3. Crea mockups usando la API seleccionada
4. Guarda las imágenes en `public/images/{slug}/`
5. Actualiza automáticamente `projects.ts`

## 📁 Estructura

```
portfolio/
├── .workflows/          # Documentación del workflow
├── scripts/            # Scripts de automatización
├── generated/          # Archivos generados
│   ├── stories/        # Historias enriquecidas
│   ├── reports/        # Reportes de generación
│   └── backups/        # Backups de projects.ts
└── public/
    ├── images/         # Imágenes de proyectos
    └── videos/         # Videos de proyectos
```

## 🆘 Ayuda

Para más detalles, consulta:
- [Documentación completa](./.workflows/WORKFLOW_IMAGENES.md)
- [Guía de comandos](./.workflows/README.md)

