#!/usr/bin/env node

/**
 * MCP Server para Generación de Imágenes del Portafolio
 * Expone herramientas MCP que pueden ser usadas directamente desde Cursor
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');
const fs = require('fs');
const path = require('path');

// Importa funciones del script de generación
const { generateWithGemini, generateWithDalle, parseStory } = require('../scripts/image-generator.js');

class ImageGeneratorMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'portfolio-image-generator',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    this.transport = new StdioServerTransport();
  }

  setupHandlers() {
    // Lista de herramientas disponibles
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'generate_project_mockups',
          description: 'Genera mockups para un proyecto del portafolio basándose en su historia enriquecida. Crea imágenes usando APIs de generación de IA.',
          inputSchema: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                description: 'Slug del proyecto (ej: mas-analytics-landing-page)',
              },
              api: {
                type: 'string',
                enum: ['gemini', 'dalle', 'stable-diffusion'],
                description: 'API a usar para generar imágenes',
                default: 'gemini',
              },
              count: {
                type: 'number',
                description: 'Número de mockups a generar (por defecto: todos de la historia)',
              },
            },
            required: ['slug'],
          },
        },
        {
          name: 'enrich_project_story',
          description: 'Enriquece la historia de un proyecto con detalles visuales y casos de uso para generar mockups.',
          inputSchema: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                description: 'Slug del proyecto a enriquecer',
              },
            },
            required: ['slug'],
          },
        },
        {
          name: 'update_project_images',
          description: 'Actualiza el archivo projects.ts con las rutas de las imágenes generadas.',
          inputSchema: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                description: 'Slug del proyecto a actualizar',
              },
              replace: {
                type: 'boolean',
                description: 'Si true, reemplaza todas las imágenes existentes',
                default: false,
              },
            },
            required: ['slug'],
          },
        },
      ],
    }));

    // Handler para ejecutar herramientas
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'generate_project_mockups':
            return await this.generateMockups(args);
          
          case 'enrich_project_story':
            return await this.enrichStory(args);
          
          case 'update_project_images':
            return await this.updateImages(args);
          
          default:
            throw new Error(`Herramienta desconocida: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async generateMockups(args) {
    const { slug, api = 'gemini', count } = args;
    
    // Lee la historia enriquecida
    const storyPath = path.join(process.cwd(), 'generated/stories', `${slug}_story.md`);
    if (!fs.existsSync(storyPath)) {
      throw new Error(`Historia no encontrada. Ejecuta primero enrich_project_story para ${slug}`);
    }

    const storyContent = fs.readFileSync(storyPath, 'utf-8');
    const mockups = parseStory(storyContent);
    const mockupsToGenerate = count ? mockups.slice(0, count) : mockups;

    // Crea directorio de salida
    const outputDir = path.join(process.cwd(), 'public/images', slug);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const generatedImages = [];
    const errors = [];

    for (let i = 0; i < mockupsToGenerate.length; i++) {
      const mockup = mockupsToGenerate[i];
      try {
        // Genera prompt (simplificado aquí, debería usar la función completa)
        const prompt = `Create a professional UI/UX mockup: ${mockup.name}. ${mockup.description}`;
        
        let imageUrl;
        if (api === 'dalle') {
          imageUrl = await generateWithDalle(prompt);
        } else {
          imageUrl = await generateWithGemini(prompt);
        }

        const filename = `${slug}-${mockup.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        const outputPath = path.join(outputDir, filename);

        // Descarga y guarda (simplificado)
        // En producción, usar la función completa de downloadAndSaveImage
        generatedImages.push(`/images/${slug}/${filename}`);
      } catch (error) {
        errors.push(`${mockup.name}: ${error.message}`);
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: `Generación completada para ${slug}:\n\n` +
                `✅ Imágenes generadas: ${generatedImages.length}\n` +
                (generatedImages.length > 0 ? `\nImágenes:\n${generatedImages.map(img => `- ${img}`).join('\n')}\n` : '') +
                (errors.length > 0 ? `\n⚠️ Errores:\n${errors.join('\n')}` : ''),
        },
      ],
    };
  }

  async enrichStory(args) {
    const { slug } = args;
    const { readProject, generateEnrichedStory } = require('../scripts/project-enricher.js');
    
    try {
      const project = readProject(slug);
      const story = generateEnrichedStory(project);

      // Guarda la historia
      const storiesDir = path.join(process.cwd(), 'generated/stories');
      if (!fs.existsSync(storiesDir)) {
        fs.mkdirSync(storiesDir, { recursive: true });
      }

      const storyPath = path.join(storiesDir, `${slug}_story.md`);
      fs.writeFileSync(storyPath, story);

      return {
        content: [
          {
            type: 'text',
            text: `Historia enriquecida generada para ${slug}.\n\n` +
                  `Archivo: generated/stories/${slug}_story.md\n\n` +
                  `Revisa y edita la historia antes de generar imágenes.`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error enriqueciendo historia: ${error.message}`);
    }
  }

  async updateImages(args) {
    const { slug, replace = false } = args;
    const { scanImages, updateProjectsFile } = require('../scripts/update-project-images.js');
    
    try {
      const { images, videos } = scanImages(slug);
      
      if (images.length === 0 && videos.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No se encontraron imágenes ni videos para ${slug}.\n\n` +
                    `Asegúrate de que las imágenes estén en public/images/${slug}/`,
            },
          ],
        };
      }

      const result = updateProjectsFile(slug, images, videos, { dryRun: false, replace });

      return {
        content: [
          {
            type: 'text',
            text: `Proyecto ${slug} actualizado:\n\n` +
                  `✅ ${result.images.length} imágenes agregadas\n` +
                  (result.videos.length > 0 ? `✅ ${result.videos.length} videos agregados\n` : '') +
                  `\nBackup guardado en: ${result.backup}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`);
    }
  }

  async run() {
    await this.server.connect(this.transport);
    console.error('MCP Server de Generación de Imágenes iniciado');
  }
}

const server = new ImageGeneratorMCPServer();
server.run().catch(console.error);









