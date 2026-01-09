#!/usr/bin/env node

/**
 * MCP Server para Enriquecimiento de Proyectos
 * Herramientas adicionales para trabajar con proyectos del portafolio
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');
const fs = require('fs');
const path = require('path');

class ProjectEnricherMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'portfolio-project-enricher',
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
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'list_projects',
          description: 'Lista todos los proyectos disponibles en el portafolio con sus slugs.',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
        {
          name: 'get_project_info',
          description: 'Obtiene información detallada de un proyecto por su slug.',
          inputSchema: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                description: 'Slug del proyecto',
              },
            },
            required: ['slug'],
          },
        },
        {
          name: 'check_project_images',
          description: 'Verifica qué imágenes tiene un proyecto y cuáles faltan.',
          inputSchema: {
            type: 'object',
            properties: {
              slug: {
                type: 'string',
                description: 'Slug del proyecto',
              },
            },
            required: ['slug'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'list_projects':
            return await this.listProjects();
          
          case 'get_project_info':
            return await this.getProjectInfo(args);
          
          case 'check_project_images':
            return await this.checkProjectImages(args);
          
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

  async listProjects() {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.ts');
    const content = fs.readFileSync(projectsPath, 'utf-8');
    
    // Extrae slugs de proyectos
    const slugMatches = content.matchAll(/slug:\s*"([^"]+)"/g);
    const projects = Array.from(slugMatches).map(match => match[1]);

    return {
      content: [
        {
          type: 'text',
          text: `Proyectos disponibles (${projects.length}):\n\n` +
                projects.map((slug, i) => `${i + 1}. ${slug}`).join('\n'),
        },
      ],
    };
  }

  async getProjectInfo(args) {
    const { slug } = args;
    const { readProject } = require('../scripts/project-enricher.js');
    
    try {
      const project = readProject(slug);
      
      return {
        content: [
          {
            type: 'text',
            text: `Información del proyecto: ${slug}\n\n` +
                  `Título (ES): ${project.title?.es || 'N/A'}\n` +
                  `Título (EN): ${project.title?.en || 'N/A'}\n` +
                  `Categoría: ${project.category || 'N/A'}\n` +
                  `Año: ${project.year || 'N/A'}\n` +
                  `Tags: ${project.tags?.join(', ') || 'N/A'}\n` +
                  `\nDescripción corta (ES):\n${project.shortDescription?.es || 'N/A'}\n` +
                  `\n¿Tiene historia enriquecida? ${fs.existsSync(path.join(process.cwd(), 'generated/stories', `${slug}_story.md`)) ? 'Sí' : 'No'}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Error obteniendo información: ${error.message}`);
    }
  }

  async checkProjectImages(args) {
    const { slug } = args;
    const imagesDir = path.join(process.cwd(), 'public/images', slug);
    const videosDir = path.join(process.cwd(), 'public/videos', slug);
    
    const images = fs.existsSync(imagesDir) 
      ? fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      : [];
    
    const videos = fs.existsSync(videosDir)
      ? fs.readdirSync(videosDir).filter(f => /\.(mp4|webm|mov)$/i.test(f))
      : [];

    const storyExists = fs.existsSync(path.join(process.cwd(), 'generated/stories', `${slug}_story.md`));

    return {
      content: [
        {
          type: 'text',
          text: `Estado de imágenes para ${slug}:\n\n` +
                `📸 Imágenes: ${images.length}\n` +
                (images.length > 0 ? images.map(img => `  - ${img}`).join('\n') : '  (ninguna)') +
                `\n\n🎥 Videos: ${videos.length}\n` +
                (videos.length > 0 ? videos.map(vid => `  - ${vid}`).join('\n') : '  (ninguno)') +
                `\n\n📖 Historia enriquecida: ${storyExists ? 'Sí' : 'No'}` +
                (images.length === 0 ? `\n\n💡 Sugerencia: Ejecuta generate_project_mockups para generar imágenes.` : ''),
        },
      ],
    };
  }

  async run() {
    await this.server.connect(this.transport);
    console.error('MCP Server de Enriquecimiento de Proyectos iniciado');
  }
}

const server = new ProjectEnricherMCPServer();
server.run().catch(console.error);









