# 📋 Guía para Agregar Proyectos

## 🗂️ Sistema Actual
**No es un CMS**, es un sistema manual donde editas directamente el archivo TypeScript.

---

## 📁 Dónde Editar
**Archivo:** `src/data/projects.ts`

---

## 📝 Información Necesaria por Proyecto

### 1. **Información Básica**
- **`id`**: Número único (ej: "1", "2", "3")
- **`slug`**: URL amigable sin espacios (ej: "mi-proyecto-ecommerce")
- **`year`**: Año del proyecto (ej: "2024")
- **`category`**: Una de estas opciones:
  - `"product-design"`
  - `"ecommerce-landings"`
  - `"graphic-design"`

### 2. **Títulos y Textos (en español e inglés)**
- **`title`**: Título del proyecto
  ```typescript
  title: {
    es: "Mi Proyecto",
    en: "My Project"
  }
  ```
- **`role`**: Tu rol en el proyecto
  ```typescript
  role: {
    es: "Diseñador UX/UI Lead",
    en: "Lead UX/UI Designer"
  }
  ```

### 3. **Descripciones**
- **`shortDescription`**: Descripción corta (aparece en las cards)
  - Máximo ~150 caracteres
  ```typescript
  shortDescription: {
    es: "Descripción breve del proyecto...",
    en: "Brief project description..."
  }
  ```
- **`fullDescription`**: Descripción completa (aparece en el modal)
  - Puede tener varios párrafos (usa `\n\n` para separar párrafos)
  ```typescript
  fullDescription: {
    es: "Primer párrafo...\n\nSegundo párrafo...",
    en: "First paragraph...\n\nSecond paragraph..."
  }
  ```

### 4. **Tags**
- Array de etiquetas (máximo 4-5 recomendado)
```typescript
tags: ["UX/UI", "CRO", "E-commerce", "Growth Design"]
```

### 5. **Imágenes**
- **Mínimo 3 imágenes** (las primeras 3 aparecen en la card)
- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: 1200-1600px de ancho
- **Rutas**: `/images/projects/nombre-proyecto-1.jpg`

### 6. **URLs Opcionales**
- **`demoUrl`**: Link al demo en vivo (opcional)
- **`videoUrl`**: Link a video (opcional)
- **`learnMoreUrl`**: Link para más info (opcional)

---

## 🖼️ Cómo Agregar Imágenes

### Paso 1: Coloca las imágenes
1. Ve a la carpeta: `public/images/projects/`
2. Sube tus imágenes ahí
3. Nómbralas de forma descriptiva: `mi-proyecto-1.jpg`, `mi-proyecto-2.jpg`, etc.

### Paso 2: Referencia las rutas
En el array `images` del proyecto:
```typescript
images: [
  "/images/projects/mi-proyecto-1.jpg",
  "/images/projects/mi-proyecto-2.jpg",
  "/images/projects/mi-proyecto-3.jpg",
  "/images/projects/mi-proyecto-4.jpg"  // Opcional: más imágenes para el modal
]
```

---

## 📋 Ejemplo Completo

```typescript
{
  id: "6",
  slug: "mi-nuevo-proyecto",
  title: {
    es: "Mi Nuevo Proyecto",
    en: "My New Project"
  },
  role: {
    es: "Diseñador UX/UI",
    en: "UX/UI Designer"
  },
  year: "2024",
  category: "product-design",
  tags: ["UX/UI", "Design System", "Prototyping"],
  shortDescription: {
    es: "Descripción breve que aparece en la card del proyecto.",
    en: "Brief description that appears in the project card."
  },
  fullDescription: {
    es: "Primer párrafo con la descripción completa del proyecto.\n\nSegundo párrafo con más detalles sobre el proceso y resultados.",
    en: "First paragraph with the complete project description.\n\nSecond paragraph with more details about the process and results."
  },
  images: [
    "/images/projects/mi-proyecto-1.jpg",
    "/images/projects/mi-proyecto-2.jpg",
    "/images/projects/mi-proyecto-3.jpg"
  ],
  demoUrl: "https://ejemplo.com",
  learnMoreUrl: "https://ejemplo.com/caso-de-estudio"
}
```

---

## 🎯 Categorías Disponibles

- **`"product-design"`**: Para proyectos de diseño de producto
- **`"ecommerce-landings"`**: Para e-commerce y landing pages
- **`"graphic-design"`**: Para diseño gráfico

---

## ✅ Checklist para Agregar un Proyecto

- [ ] Imágenes subidas a `public/images/projects/`
- [ ] ID único asignado
- [ ] Slug creado (sin espacios, en minúsculas)
- [ ] Título en español e inglés
- [ ] Rol en español e inglés
- [ ] Año del proyecto
- [ ] Categoría seleccionada
- [ ] Tags agregados (3-5)
- [ ] Descripción corta (para card)
- [ ] Descripción completa (para modal)
- [ ] Rutas de imágenes correctas
- [ ] URLs opcionales si aplican

---

## 💡 Tips

1. **Imágenes**: Las primeras 3 imágenes aparecen en la card. Puedes agregar más para el modal.
2. **Descripción corta**: Manténla concisa, máximo 2 líneas.
3. **Descripción completa**: Puedes usar `\n\n` para separar párrafos.
4. **Slug**: Úsalo para URLs amigables (ej: `/case-study/mi-proyecto`)

---

## 🔄 ¿Quieres un CMS?

Si prefieres un sistema más visual tipo CMS, podríamos integrar:
- **Contentful**
- **Sanity**
- **Strapi**
- **Markdown files** (más simple)

Pero el sistema actual es rápido y directo para empezar. ¿Te funciona así o prefieres que implementemos un CMS?



