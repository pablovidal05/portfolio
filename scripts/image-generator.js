#!/usr/bin/env node

/**
 * Script para generar imágenes usando APIs de generación de imágenes
 * Uso: node scripts/image-generator.js {slug} [--api {api}] [--count {number}]
 */

const fs = require('fs');
const path = require('path');

// Importaciones opcionales (se cargan solo si están disponibles)
let GoogleGenerativeAI, OpenAI, sharp;

try {
  GoogleGenerativeAI = require('@google/generative-ai');
} catch (e) {
  console.warn('@google/generative-ai no instalado. Ejecuta: npm install @google/generative-ai');
}

try {
  OpenAI = require('openai');
} catch (e) {
  console.warn('openai no instalado. Ejecuta: npm install openai');
}

try {
  sharp = require('sharp');
} catch (e) {
  console.warn('sharp no instalado. Ejecuta: npm install sharp');
}

// Configuración
const CONFIG = {
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: 'gemini-2.0-flash-exp'
  },
  dalle: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'dall-e-3'
  }
};

/**
 * Lee la historia enriquecida del proyecto
 */
function readStory(slug) {
  const storyPath = path.join(__dirname, '../generated/stories', `${slug}_story.md`);
  if (!fs.existsSync(storyPath)) {
    throw new Error(`Historia no encontrada: ${storyPath}`);
  }
  return fs.readFileSync(storyPath, 'utf-8');
}

/**
 * Parsea la historia y extrae los mockups a generar
 */
function parseStory(storyContent) {
  const mockups = [];
  const lines = storyContent.split('\n');
  
  let currentMockup = null;
  let inMockupSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detecta inicio de mockup
    if (line.match(/^## Mockup \d+:/) || line.match(/^### \d+\./)) {
      if (currentMockup) {
        mockups.push(currentMockup);
      }
      currentMockup = {
        name: line.replace(/^## Mockup \d+:\s*/, '').replace(/^### \d+\.\s*/, '').trim(),
        description: '',
        elements: [],
        style: ''
      };
      inMockupSection = true;
      continue;
    }
    
    // Detecta secciones dentro del mockup
    if (inMockupSection && currentMockup) {
      if (line.startsWith('**Descripción:**')) {
        currentMockup.description = line.replace('**Descripción:**', '').trim();
      } else if (line.startsWith('**Elementos:**')) {
        // Siguientes líneas con guiones son elementos
        let j = i + 1;
        while (j < lines.length && (lines[j].startsWith('-') || lines[j].startsWith('*'))) {
          currentMockup.elements.push(lines[j].replace(/^[-*]\s*/, '').trim());
          j++;
        }
        i = j - 1;
      } else if (line.startsWith('**Estilo:**')) {
        currentMockup.style = line.replace('**Estilo:**', '').trim();
      } else if (line.match(/^## |^# /)) {
        // Nueva sección, termina el mockup actual
        inMockupSection = false;
        if (currentMockup) {
          mockups.push(currentMockup);
          currentMockup = null;
        }
      } else if (currentMockup && line.trim() && !line.startsWith('**')) {
        // Texto adicional de descripción
        currentMockup.description += ' ' + line.trim();
      }
    }
  }
  
  if (currentMockup) {
    mockups.push(currentMockup);
  }
  
  return mockups;
}

/**
 * Genera prompt detallado para la API
 */
function generatePrompt(mockup, projectInfo) {
  const { title, category, tags, fullDescription } = projectInfo;
  
  return `Create a professional ${category} mockup for "${title.es}".

Mockup: ${mockup.name}
Description: ${mockup.description}

Elements to include:
${mockup.elements.map(el => `- ${el}`).join('\n')}

Style: ${mockup.style}

Project context:
- Category: ${category}
- Tags: ${tags.join(', ')}
- Description: ${fullDescription.es.substring(0, 500)}...

Technical requirements:
- Format: High-quality UI/UX mockup
- Resolution: 1920x1080px (16:9 aspect ratio)
- Style: Modern, professional, portfolio-ready
- Quality: Production-ready, suitable for portfolio showcase
- Device: Desktop viewport
- Mood: ${tags.includes('CRO') ? 'Conversion-optimized' : 'Professional and modern'}

The mockup should look like a real, production-ready design, suitable for a professional portfolio.`;
}

/**
 * Genera imagen usando Gemini
 */
async function generateWithGemini(prompt) {
  if (!CONFIG.gemini.apiKey) {
    throw new Error('GEMINI_API_KEY no configurada');
  }
  
  const genAI = new GoogleGenerativeAI(CONFIG.gemini.apiKey);
  const model = genAI.getGenerativeModel({ model: CONFIG.gemini.model });
  
  // Nota: Gemini 2.0 puede generar imágenes, pero la API puede variar
  // Esta es una implementación de ejemplo
  const result = await model.generateContent(prompt);
  const response = await result.response;
  
  // La respuesta puede contener una URL de imagen o datos base64
  // Ajusta según la API real de Gemini
  return response.text();
}

/**
 * Genera imagen usando DALL-E
 */
async function generateWithDalle(prompt) {
  if (!CONFIG.dalle.apiKey) {
    throw new Error('OPENAI_API_KEY no configurada');
  }
  
  const openai = new OpenAI({ apiKey: CONFIG.dalle.apiKey });
  
  const response = await openai.images.generate({
    model: CONFIG.dalle.model,
    prompt: prompt,
    size: '1792x1024',
    quality: 'hd',
    n: 1
  });
  
  return response.data[0].url;
}

/**
 * Descarga y guarda imagen
 */
async function downloadAndSaveImage(imageUrl, outputPath) {
  // Usa node-fetch o https nativo
  const https = require('https');
  const http = require('http');
  const url = require('url');
  
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(imageUrl);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    client.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        
        // Optimiza con sharp si está disponible
        if (sharp) {
          try {
            await sharp(buffer)
              .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
              .jpeg({ quality: 90 })
              .toFile(outputPath);
            resolve(outputPath);
          } catch (error) {
            // Si sharp falla, guarda sin optimizar
            fs.writeFileSync(outputPath, buffer);
            resolve(outputPath);
          }
        } else {
          // Sin sharp, guarda directamente
          fs.writeFileSync(outputPath, buffer);
          resolve(outputPath);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Función principal
 */
async function main() {
  const args = process.argv.slice(2);
  const slug = args[0];
  const api = args.includes('--api') ? args[args.indexOf('--api') + 1] : 'gemini';
  const count = args.includes('--count') ? parseInt(args[args.indexOf('--count') + 1]) : null;
  
  if (!slug) {
    console.error('Uso: node scripts/image-generator.js {slug} [--api {api}] [--count {number}]');
    process.exit(1);
  }
  
  try {
    // Lee proyecto
    const projectsPath = path.join(__dirname, '../src/data/projects.ts');
    const projectsContent = fs.readFileSync(projectsPath, 'utf-8');
    const projectMatch = projectsContent.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?\\{[\\s\\S]*?\\}`, 'm'));
    if (!projectMatch) {
      throw new Error(`Proyecto no encontrado: ${slug}`);
    }
    
    // Lee historia
    const storyContent = readStory(slug);
    const mockups = parseStory(storyContent);
    
    // Limita cantidad si se especifica
    const mockupsToGenerate = count ? mockups.slice(0, count) : mockups;
    
    // Crea directorio de salida
    const outputDir = path.join(__dirname, '../public/images', slug);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    console.log(`Generando ${mockupsToGenerate.length} mockups para ${slug}...`);
    
    // Genera cada mockup
    const generatedImages = [];
    for (let i = 0; i < mockupsToGenerate.length; i++) {
      const mockup = mockupsToGenerate[i];
      console.log(`Generando mockup ${i + 1}/${mockupsToGenerate.length}: ${mockup.name}`);
      
      const prompt = generatePrompt(mockup, {
        title: { es: slug },
        category: 'ecommerce-landings',
        tags: [],
        fullDescription: { es: storyContent.substring(0, 500) }
      });
      
      let imageUrl;
      try {
        if (api === 'dalle') {
          imageUrl = await generateWithDalle(prompt);
        } else {
          imageUrl = await generateWithGemini(prompt);
        }
        
        const filename = `${slug}-${mockup.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        const outputPath = path.join(outputDir, filename);
        
        await downloadAndSaveImage(imageUrl, outputPath);
        generatedImages.push(`/images/${slug}/${filename}`);
        
        console.log(`✓ Generado: ${filename}`);
      } catch (error) {
        console.error(`✗ Error generando ${mockup.name}:`, error.message);
      }
    }
    
    // Genera reporte
    const reportDir = path.join(__dirname, '../generated/reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const report = `# Reporte de Generación: ${slug}

Fecha: ${new Date().toISOString()}
API utilizada: ${api}
Mockups generados: ${generatedImages.length}/${mockupsToGenerate.length}

## Imágenes Generadas

${generatedImages.map(img => `- ${img}`).join('\n')}

## Mockups Procesados

${mockupsToGenerate.map((m, i) => `${i + 1}. ${m.name}`).join('\n')}
`;
    
    fs.writeFileSync(
      path.join(reportDir, `${slug}_generation_report.md`),
      report
    );
    
    console.log(`\n✓ Generación completada. ${generatedImages.length} imágenes generadas.`);
    console.log(`Reporte guardado en: generated/reports/${slug}_generation_report.md`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateWithGemini, generateWithDalle, parseStory };

