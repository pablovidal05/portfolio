# 🔌 Integración con MCP (Model Context Protocol)

Este workflow utiliza servidores MCP para integrar las herramientas de generación de imágenes directamente con Cursor, permitiendo usar comandos naturales en el chat.

## 🎯 ¿Qué es MCP?

MCP (Model Context Protocol) es un protocolo que permite a Cursor conectarse con herramientas externas y fuentes de datos. En este caso, usamos MCP para exponer las herramientas de generación de imágenes como funciones nativas de Cursor.

**Referencia:** [Documentación MCP de Cursor](https://cursor.com/es/docs/context/mcp/directory)

## 🚀 Configuración

### 1. Instalar SDK de MCP

```bash
npm install @modelcontextprotocol/sdk
```

### 2. Configurar Servidores MCP

El archivo `.cursor/mcp.json` ya está configurado con dos servidores:

- **portfolio-image-generator**: Genera mockups e imágenes
- **portfolio-project-enricher**: Herramientas de información y enriquecimiento

### 3. Variables de Entorno

Asegúrate de tener las API keys en `.env.local`:

```bash
GEMINI_API_KEY=tu-api-key
OPENAI_API_KEY=tu-api-key
REPLICATE_API_TOKEN=tu-token
```

## 📋 Herramientas MCP Disponibles

### Generador de Imágenes (`portfolio-image-generator`)

#### 1. `generate_project_mockups`
Genera mockups para un proyecto basándose en su historia enriquecida.

**Parámetros:**
- `slug` (requerido): Slug del proyecto
- `api` (opcional): API a usar (`gemini`, `dalle`, `stable-diffusion`)
- `count` (opcional): Número de mockups a generar

**Ejemplo de uso en Cursor:**
```
Genera mockups para el proyecto mas-analytics-landing-page usando Gemini
```

#### 2. `enrich_project_story`
Enriquece la historia de un proyecto con detalles visuales.

**Parámetros:**
- `slug` (requerido): Slug del proyecto

**Ejemplo de uso en Cursor:**
```
Enriquece la historia del proyecto mas-analytics-landing-page
```

#### 3. `update_project_images`
Actualiza `projects.ts` con las rutas de imágenes generadas.

**Parámetros:**
- `slug` (requerido): Slug del proyecto
- `replace` (opcional): Si true, reemplaza todas las imágenes

**Ejemplo de uso en Cursor:**
```
Actualiza el proyecto mas-analytics-landing-page con las nuevas imágenes
```

### Enriquecimiento de Proyectos (`portfolio-project-enricher`)

#### 1. `list_projects`
Lista todos los proyectos disponibles.

**Ejemplo de uso en Cursor:**
```
Lista todos los proyectos del portafolio
```

#### 2. `get_project_info`
Obtiene información detallada de un proyecto.

**Parámetros:**
- `slug` (requerido): Slug del proyecto

**Ejemplo de uso en Cursor:**
```
Dame información del proyecto mas-analytics-landing-page
```

#### 3. `check_project_images`
Verifica qué imágenes tiene un proyecto.

**Parámetros:**
- `slug` (requerido): Slug del proyecto

**Ejemplo de uso en Cursor:**
```
Verifica las imágenes del proyecto mas-analytics-landing-page
```

## 💬 Uso en Cursor Chat

Una vez configurados los servidores MCP, puedes usar comandos naturales en el chat de Cursor:

### Flujo Completo

```
1. "Lista todos los proyectos del portafolio"
   → Usa list_projects

2. "Enriquece la historia del proyecto mas-analytics-landing-page"
   → Usa enrich_project_story

3. "Genera mockups para mas-analytics-landing-page usando Gemini"
   → Usa generate_project_mockups

4. "Actualiza el proyecto mas-analytics-landing-page con las nuevas imágenes"
   → Usa update_project_images
```

### Ejemplos de Comandos

```
"¿Qué proyectos tengo sin imágenes?"
"Genera 3 mockups para heliboss-landing-page"
"Verifica el estado de imágenes de literas-mx"
"Dame información completa del proyecto mas-analytics"
```

## 🔧 Desarrollo de Servidores MCP

### Estructura de un Servidor MCP

```javascript
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');

class MyMCPServer {
  constructor() {
    this.server = new Server({
      name: 'my-server',
      version: '0.1.0',
    }, {
      capabilities: {
        tools: {},
      },
    });
    
    this.setupHandlers();
    this.transport = new StdioServerTransport();
  }

  setupHandlers() {
    // Lista herramientas
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [/* ... */],
    }));

    // Ejecuta herramientas
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      // Implementación
    });
  }

  async run() {
    await this.server.connect(this.transport);
  }
}
```

### Agregar Nueva Herramienta

1. Agrega la herramienta en `ListToolsRequestSchema`
2. Implementa el handler en `CallToolRequestSchema`
3. Reinicia Cursor para que detecte los cambios

## 🐛 Solución de Problemas

### Los servidores MCP no aparecen

1. Verifica que `.cursor/mcp.json` existe y está bien formateado
2. Reinicia Cursor completamente
3. Verifica que las dependencias están instaladas: `npm install @modelcontextprotocol/sdk`

### Error: "Command not found"

- Verifica que Node.js está en el PATH
- Asegúrate de que los scripts en `mcp-servers/` tienen permisos de ejecución

### Las herramientas no se ejecutan

- Revisa la consola de Cursor para errores
- Verifica que las variables de entorno están configuradas
- Asegúrate de que los scripts pueden acceder a los archivos del proyecto

## 📚 Recursos

- [Documentación MCP de Cursor](https://cursor.com/es/docs/context/mcp)
- [Directorio de Servidores MCP](https://cursor.com/es/docs/context/mcp/directory)
- [SDK de MCP](https://github.com/modelcontextprotocol/typescript-sdk)

## 🎯 Ventajas de Usar MCP

✅ **Integración nativa** con Cursor  
✅ **Comandos naturales** en el chat  
✅ **Sin necesidad de scripts manuales**  
✅ **Herramientas disponibles** directamente en el contexto  
✅ **Extensible** - fácil agregar nuevas herramientas  

## 🔄 Comparación: Scripts vs MCP

| Característica | Scripts NPM | MCP Servers |
|----------------|-------------|-------------|
| Uso | `npm run enrich-story slug` | "Enriquece la historia de slug" |
| Integración | Manual | Nativa con Cursor |
| Disponibilidad | Solo en terminal | En chat de Cursor |
| Extensibilidad | Media | Alta |

**Recomendación:** Usa MCP para trabajo diario en Cursor, scripts para automatización y CI/CD.










