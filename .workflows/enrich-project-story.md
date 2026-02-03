# 📖 Comando: Enriquecer Historia del Proyecto

## Propósito

Transforma la descripción básica de un proyecto en una historia visual enriquecida que servirá como base para generar mockups automáticamente.

## Uso

```
/enrich-project-story {slug}
```

**Ejemplo:**
```
/enrich-project-story mas-analytics-landing-page
```

## Proceso

1. **Lee el proyecto** desde `src/data/projects.ts` usando el slug
2. **Analiza la información** disponible:
   - Título y descripción
   - Categoría y tags
   - Contexto del proyecto
3. **Genera historia enriquecida** con:
   - Descripción visual detallada
   - Casos de uso específicos
   - Descripción de cada mockup a generar
   - Guía de estilo visual
   - Contexto y escenarios

## Output

Archivo: `generated/stories/{slug}_story.md`

## Formato de la Historia

La historia enriquecida incluye:

### 1. Overview Visual
Descripción general del proyecto desde una perspectiva visual.

### 2. Mockups a Generar
Para cada mockup (3-5 típicamente):

- **Nombre del mockup** (ej: "Hero Section")
- **Descripción detallada** de qué debe mostrar
- **Elementos clave** que debe incluir
- **Contexto visual** (dispositivo, estado, etc.)
- **Estilo y tono** visual

### 3. Guía de Estilo
- Paleta de colores sugerida
- Tipografía
- Espaciado y layout
- Elementos visuales clave

### 4. Casos de Uso
Escenarios específicos que los mockups deben representar.

## Ejemplo de Output

```markdown
# Historia Enriquecida: Mas Analytics Landing Page

## Overview Visual
Landing page moderna para consultoría de datos e IA, con diseño limpio y profesional que refleja innovación tecnológica.

## Mockup 1: Hero Section
**Descripción:** Sección principal con título impactante, subtítulo descriptivo y CTA principal.
**Elementos:**
- Título: "Transformamos datos en decisiones estratégicas"
- Subtítulo: "Consultoría especializada en Datos e Inteligencia Artificial"
- CTA: Botón "Conoce más" o "Solicita consultoría"
- Imagen de fondo: Abstracto, relacionado con datos/IA
**Estilo:** Minimalista, alto contraste, tipografía sans-serif moderna

## Mockup 2: Features Section
**Descripción:** Grid de características principales con iconos y descripciones cortas.
**Elementos:**
- 3-4 features principales
- Iconos relacionados con datos/IA
- Descripciones concisas
**Estilo:** Cards con sombra sutil, espaciado generoso

[... más mockups ...]

## Guía de Estilo
- **Colores:** Azul tecnológico (#0066CC), gris oscuro (#1A1A1A), blanco
- **Tipografía:** Sans-serif moderna (Inter, Poppins)
- **Espaciado:** Generoso, respiración visual
- **Elementos:** Iconos minimalistas, ilustraciones abstractas
```

## Notas

- La historia se basa en la información disponible del proyecto
- Si falta información, se infiere de manera inteligente
- El usuario puede editar la historia antes de generar imágenes
- Se guarda en formato Markdown para fácil edición










