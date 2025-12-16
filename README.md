# Pablo Vidal - Portafolio Web

Portafolio profesional diseñado con Next.js, Tailwind CSS y TypeScript, siguiendo un diseño minimalista y moderno inspirado en el estilo de tash.work.

## Características

- ✨ Diseño minimalista con alto contraste (fondo negro, texto blanco)
- 🌐 Soporte multiidioma (Español/Inglés) con cambio dinámico
- 📱 Completamente responsive
- 🎨 Sistema de diseño basado en design.json
- 🚀 Optimizado para performance
- 📄 Páginas dinámicas para casos de estudio
- 🎭 Modal overlay para vista rápida de proyectos

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # Páginas de Next.js (App Router)
│   │   ├── page.tsx           # Página de inicio
│   │   ├── info/              # Página de información
│   │   └── case-study/[slug]/ # Páginas dinámicas de proyectos
│   ├── components/            # Componentes reutilizables
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Breadcrumbs.tsx
│   │   └── Footer.tsx
│   ├── contexts/              # Contextos de React
│   │   └── LocaleContext.tsx
│   ├── data/                  # Datos mock
│   │   ├── projects.ts
│   │   └── profile.ts
│   └── lib/                   # Utilidades
│       └── i18n.ts
├── public/
│   └── images/
│       └── projects/          # Imágenes de proyectos
└── design.json                # Sistema de diseño

```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Agregar Proyectos

Edita `src/data/projects.ts` para agregar nuevos proyectos. Cada proyecto debe incluir:

- `id`: Identificador único
- `slug`: URL amigable (ej: "mi-proyecto")
- `title`: Título en español e inglés
- `role`: Rol desempeñado
- `year`: Año del proyecto
- `tags`: Array de etiquetas
- `shortDescription`: Descripción corta (para tarjetas)
- `fullDescription`: Descripción completa (para modal y página detalle)
- `images`: Array de rutas de imágenes
- `demoUrl` (opcional): URL del demo
- `videoUrl` (opcional): URL del video
- `learnMoreUrl` (opcional): URL para más información

## Agregar Imágenes

Coloca las imágenes de tus proyectos en `public/images/projects/` y referencia las rutas en el array `images` de cada proyecto.

Ejemplo:
```typescript
images: [
  "/images/projects/ecommerce-1.jpg",
  "/images/projects/ecommerce-2.jpg",
]
```

## Personalización

### Colores y Tipografía

Los estilos están definidos en `src/app/globals.css` y siguen el sistema de diseño en `design.json`.

### Contenido

- **Perfil**: Edita `src/data/profile.ts`
- **Proyectos**: Edita `src/data/projects.ts`
- **Traducciones**: Edita `src/contexts/LocaleContext.tsx`

## Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **React 19** - Biblioteca UI

## Dominio

El proyecto está configurado para el dominio: `pablovidalg.com`

## Licencia

Privado - Todos los derechos reservados
