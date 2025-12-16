# 🎨 Opciones de CMS para el Portafolio

## 📊 Comparación de Opciones

### 1. **Contentful** ⭐ (Recomendado para empezar)
**Tipo:** Headless CMS (API-based)

**Ventajas:**
- ✅ Interfaz visual muy intuitiva
- ✅ Plan gratuito generoso (25,000 requests/mes)
- ✅ Excelente para imágenes (CDN incluido)
- ✅ Fácil de integrar con Next.js
- ✅ Soporte multiidioma nativo
- ✅ Preview de contenido antes de publicar

**Desventajas:**
- ⚠️ Requiere cuenta y configuración inicial
- ⚠️ Dependes de su API (necesitas internet)

**Costo:**
- Gratis hasta 25k requests/mes
- $300/mes para plan profesional

**Tiempo de implementación:** 2-4 horas

**Lo que necesitarías:**
- Cuenta en Contentful (gratis)
- API keys (te las da Contentful)
- Instalar: `npm install contentful`

---

### 2. **Sanity** ⭐⭐ (Muy popular para portafolios)
**Tipo:** Headless CMS (API-based)

**Ventajas:**
- ✅ Plan gratuito muy generoso
- ✅ Editor visual personalizable (Sanity Studio)
- ✅ Excelente para contenido estructurado
- ✅ Imágenes optimizadas automáticamente
- ✅ Muy popular en la comunidad Next.js
- ✅ Puedes hostear Sanity Studio en tu dominio

**Desventajas:**
- ⚠️ Curva de aprendizaje un poco más alta
- ⚠️ Requiere configuración de schemas

**Costo:**
- Gratis hasta 10M documentos
- $99/mes para plan profesional

**Tiempo de implementación:** 3-5 horas

**Lo que necesitarías:**
- Cuenta en Sanity (gratis)
- Project ID y Dataset
- Instalar: `npm install @sanity/client @sanity/image-url`

---

### 3. **Strapi** (Self-hosted)
**Tipo:** Headless CMS (Self-hosted)

**Ventajas:**
- ✅ 100% gratis y open source
- ✅ Tienes control total de los datos
- ✅ Puedes hostearlo donde quieras
- ✅ Muy flexible

**Desventajas:**
- ⚠️ Necesitas hostearlo tú mismo (VPS, Railway, etc.)
- ⚠️ Más complejo de mantener
- ⚠️ Requiere servidor/backend

**Costo:**
- Gratis (pero necesitas hosting ~$5-20/mes)

**Tiempo de implementación:** 4-6 horas

**Lo que necesitarías:**
- Servidor/hosting (Railway, Render, DigitalOcean)
- Base de datos (PostgreSQL)
- Instalar: `npm install @strapi/strapi`

---

### 4. **Markdown Files** (Más simple, sin CMS)
**Tipo:** Archivos Markdown en el repo

**Ventajas:**
- ✅ 100% gratis
- ✅ No necesitas cuenta externa
- ✅ Control total
- ✅ Versionado con Git
- ✅ Muy rápido

**Desventajas:**
- ⚠️ No tiene interfaz visual (editas archivos .md)
- ⚠️ Menos amigable para no técnicos

**Costo:**
- Gratis

**Tiempo de implementación:** 1-2 horas

**Lo que necesitarías:**
- Solo editar archivos `.md` en el proyecto
- Instalar: `npm install gray-matter` (ya podría estar)

---

## 🎯 Recomendación

### Para tu caso, recomiendo:

**Opción A: Contentful** (Si quieres algo visual y fácil)
- Interfaz muy intuitiva
- Plan gratuito suficiente para portafolio
- Fácil de usar para agregar proyectos

**Opción B: Markdown Files** (Si prefieres simplicidad)
- No necesitas cuenta externa
- Editas archivos .md
- Más rápido de implementar

---

## 📋 Lo que necesitarías hacer (con Contentful como ejemplo)

### 1. **Crear cuenta y espacio en Contentful**
- Ir a contentful.com
- Crear cuenta gratuita
- Crear un "Space" (espacio de trabajo)

### 2. **Definir el modelo de contenido**
En Contentful crearías un "Content Type" llamado "Project" con estos campos:
- `title` (Text, ES/EN)
- `slug` (Short text)
- `role` (Text, ES/EN)
- `year` (Short text)
- `category` (Short text, lista)
- `tags` (Short text, múltiple)
- `shortDescription` (Text, ES/EN)
- `fullDescription` (Long text, ES/EN)
- `images` (Media, múltiple)
- `demoUrl` (Short text, opcional)
- `videoUrl` (Short text, opcional)

### 3. **Obtener API Keys**
- Contentful te da:
  - `SPACE_ID`
  - `ACCESS_TOKEN` (Delivery API)
  - `PREVIEW_TOKEN` (opcional)

### 4. **Instalar dependencias**
```bash
npm install contentful
```

### 5. **Crear cliente de Contentful**
Crear archivo: `src/lib/contentful.ts`

### 6. **Actualizar código**
- Cambiar `src/data/projects.ts` para que lea de Contentful
- Agregar función para fetch de datos

### 7. **Subir contenido**
- Agregar proyectos desde la interfaz de Contentful
- Subir imágenes directamente en Contentful

---

## 🔄 ¿Qué cambiaría en el código?

**Antes (Manual):**
```typescript
// src/data/projects.ts
export const projects: Project[] = [
  { id: "1", title: {...}, ... }
]
```

**Después (Contentful):**
```typescript
// src/lib/contentful.ts
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getProjects() {
  const entries = await client.getEntries({
    content_type: 'project'
  })
  return entries.items
}
```

---

## 💰 Costos Comparativos

| CMS | Plan Gratis | Plan Pago | Hosting Necesario |
|-----|------------|-----------|-------------------|
| **Contentful** | 25k requests/mes | $300/mes | No |
| **Sanity** | 10M documentos | $99/mes | No |
| **Strapi** | Ilimitado | Gratis | Sí (~$5-20/mes) |
| **Markdown** | Ilimitado | Gratis | No |

---

## ⏱️ Tiempo de Implementación

- **Contentful**: 2-4 horas
- **Sanity**: 3-5 horas
- **Strapi**: 4-6 horas
- **Markdown**: 1-2 horas

---

## 🚀 ¿Cuál prefieres?

**Mi recomendación personal:**
1. **Contentful** si quieres algo visual y profesional
2. **Markdown** si prefieres simplicidad y control total

¿Con cuál te gustaría empezar? Puedo implementarlo ahora mismo.



