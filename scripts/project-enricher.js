#!/usr/bin/env node

/**
 * Script para enriquecer la historia de un proyecto
 * Uso: node scripts/project-enricher.js {slug}
 */

const fs = require('fs');
const path = require('path');

/**
 * Lee el proyecto desde projects.ts
 */
function readProject(slug) {
  const projectsPath = path.join(__dirname, '../src/data/projects.ts');
  const content = fs.readFileSync(projectsPath, 'utf-8');
  
  // Busca el proyecto por slug
  const slugRegex = new RegExp(`slug:\\s*"${slug}"`, 'm');
  const match = content.match(slugRegex);
  
  if (!match) {
    throw new Error(`Proyecto no encontrado: ${slug}`);
  }
  
  // Extrae el objeto del proyecto (simplificado)
  // En producción, usarías un parser de TypeScript más robusto
  const projectStart = content.indexOf('{', match.index);
  let depth = 0;
  let projectEnd = projectStart;
  
  for (let i = projectStart; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        projectEnd = i + 1;
        break;
      }
    }
  }
  
  const projectCode = content.substring(projectStart, projectEnd);
  
  // Parsea campos básicos (simplificado)
  const project = {
    slug,
    title: extractField(projectCode, 'title'),
    role: extractField(projectCode, 'role'),
    year: extractField(projectCode, 'year'),
    category: extractField(projectCode, 'category'),
    tags: extractArray(projectCode, 'tags'),
    shortDescription: extractField(projectCode, 'shortDescription'),
    fullDescription: extractField(projectCode, 'fullDescription')
  };
  
  return project;
}

function extractField(code, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*\\{([^}]+)\\}`, 's');
  const match = code.match(regex);
  if (!match) return null;
  
  const content = match[1];
  return {
    es: extractLang(content, 'es'),
    en: extractLang(content, 'en')
  };
}

function extractLang(content, lang) {
  const regex = new RegExp(`${lang}:\\s*"([^"]+)"`, 's');
  const match = content.match(regex);
  return match ? match[1] : '';
}

function extractArray(code, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*\\[([^\\]]+)\\]`, 's');
  const match = code.match(regex);
  if (!match) return [];
  
  return match[1]
    .split(',')
    .map(tag => tag.trim().replace(/"/g, ''))
    .filter(tag => tag);
}

/**
 * Genera la historia enriquecida
 */
function generateEnrichedStory(project) {
  const { title, category, tags, shortDescription, fullDescription } = project;
  
  // Determina tipo de mockups según categoría
  const mockupTemplates = getMockupTemplates(category);
  
  let story = `# Historia Enriquecida: ${title.es}

## Overview Visual

${generateOverview(project)}

## Guía de Estilo

${generateStyleGuide(project)}

## Mockups a Generar

${mockupTemplates.map((template, index) => generateMockupDescription(template, project, index + 1)).join('\n\n')}

## Contexto y Escenarios

${generateContext(project)}

## Notas Técnicas

- Resolución recomendada: 1920x1080px (16:9)
- Formato: JPG para fotos, PNG para UI
- Estilo: Moderno, profesional, portfolio-ready
- Dispositivo: Desktop viewport (puede incluir responsive)
`;

  return story;
}

function generateOverview(project) {
  const { title, category, tags, shortDescription } = project;
  
  return `${shortDescription.es}

Este proyecto es de categoría "${category}" y se enfoca en: ${tags.join(', ')}.

El diseño debe reflejar profesionalismo, modernidad y estar optimizado para ${tags.includes('CRO') ? 'conversión' : 'experiencia de usuario'}.`;
}

function generateStyleGuide(project) {
  const { category, tags } = project;
  
  const colorSchemes = {
    'ecommerce-landings': 'Azul tecnológico (#0066CC), gris oscuro (#1A1A1A), blanco, acentos naranja (#FF6B35)',
    'product-design': 'Grises modernos (#1A1A1A, #333333), blanco, acentos vibrantes',
    'graphic-design': 'Paleta variada según identidad de marca'
  };
  
  return `### Paleta de Colores
${colorSchemes[category] || 'Colores modernos y profesionales'}

### Tipografía
Sans-serif moderna (Inter, Poppins, o similar)
- Títulos: Bold, 32-48px
- Subtítulos: Medium, 18-24px
- Cuerpo: Regular, 16px

### Espaciado
Generoso, con respiración visual. Márgenes consistentes de 24-48px.

### Elementos Visuales
- Iconos minimalistas
- Ilustraciones abstractas o relacionadas con el tema
- Sombras sutiles para profundidad
- Bordes redondeados (8-12px)`;
}

function getMockupTemplates(category) {
  const templates = {
    'ecommerce-landings': [
      { name: 'Hero Section', focus: 'sección principal con título, subtítulo y CTA' },
      { name: 'Features', focus: 'características principales en grid o lista' },
      { name: 'Use Cases', focus: 'casos de uso o aplicaciones del producto/servicio' },
      { name: 'Results/Testimonials', focus: 'resultados, métricas o testimonios' },
      { name: 'CTA Section', focus: 'llamado final a la acción' }
    ],
    'product-design': [
      { name: 'Product Overview', focus: 'vista general del producto' },
      { name: 'Key Features', focus: 'características clave destacadas' },
      { name: 'User Interface', focus: 'interfaz de usuario principal' },
      { name: 'Interaction Flow', focus: 'flujo de interacción clave' }
    ],
    'graphic-design': [
      { name: 'Main Design', focus: 'diseño principal' },
      { name: 'Variations', focus: 'variaciones del diseño' },
      { name: 'Applications', focus: 'aplicaciones del diseño' }
    ]
  };
  
  return templates[category] || templates['ecommerce-landings'];
}

function generateMockupDescription(template, project, index) {
  const { title, tags, fullDescription } = project;
  
  return `### ${index}. ${template.name}

**Descripción:** ${template.focus} para ${title.es}.

**Elementos clave:**
- Diseño moderno y profesional
- Alineado con la identidad de ${title.es}
- ${tags.includes('CRO') ? 'Optimizado para conversión' : 'Enfocado en experiencia de usuario'}
- ${tags.includes('Mobile') ? 'Vista responsive incluida' : 'Vista desktop'}

**Contexto visual:**
${generateVisualContext(template, project)}

**Estilo:** ${generateStyleNotes(template, project)}`;
}

function generateVisualContext(template, project) {
  const { category, tags } = project;
  
  if (template.name.includes('Hero')) {
    return '- Título principal impactante\n- Subtítulo descriptivo\n- CTA prominente\n- Imagen de fondo o ilustración relacionada';
  } else if (template.name.includes('Features')) {
    return '- Grid de características (3-4 items)\n- Iconos o ilustraciones\n- Descripciones concisas\n- Espaciado generoso';
  } else if (template.name.includes('Use Cases')) {
    return '- Casos de uso visuales\n- Imágenes o mockups contextuales\n- Descripciones de escenarios\n- Beneficios destacados';
  } else if (template.name.includes('Results')) {
    return '- Métricas o resultados\n- Testimonios o casos de éxito\n- Visualización de datos\n- Elementos de confianza';
  } else {
    return '- Contenido relevante al proyecto\n- Diseño consistente con el resto\n- Elementos visuales atractivos';
  }
}

function generateStyleNotes(template, project) {
  const { category, tags } = project;
  
  return `Minimalista, ${tags.includes('CRO') ? 'conversión-optimizado' : 'profesional'}, ${category === 'ecommerce-landings' ? 'moderno y limpio' : 'innovador'}`;
}

function generateContext(project) {
  const { category, tags } = project;
  
  return `### Dispositivos
- Desktop: 1920x1080px (principal)
${tags.includes('Mobile') ? '- Mobile: 375x667px (responsive)' : ''}

### Estados
- Estado inicial/default
- Hover states (si aplica)
- Estados interactivos (si aplica)

### Casos de Uso
Los mockups deben representar:
- La experiencia real del usuario
- El flujo principal del proyecto
- Los puntos clave de conversión o interacción`;
}

/**
 * Función principal
 */
function main() {
  const slug = process.argv[2];
  
  if (!slug) {
    console.error('Uso: node scripts/project-enricher.js {slug}');
    process.exit(1);
  }
  
  try {
    // Lee proyecto
    const project = readProject(slug);
    
    // Genera historia enriquecida
    const story = generateEnrichedStory(project);
    
    // Crea directorio si no existe
    const storiesDir = path.join(__dirname, '../generated/stories');
    if (!fs.existsSync(storiesDir)) {
      fs.mkdirSync(storiesDir, { recursive: true });
    }
    
    // Guarda historia
    const storyPath = path.join(storiesDir, `${slug}_story.md`);
    fs.writeFileSync(storyPath, story);
    
    console.log(`✓ Historia enriquecida generada: ${storyPath}`);
    console.log(`\nRevisa y ajusta la historia antes de generar imágenes.`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { readProject, generateEnrichedStory };










