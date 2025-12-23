# ⚙️ Configuración de Servidores MCP

Guía paso a paso para configurar los servidores MCP en Cursor.

## 📋 Pasos de Configuración

### 1. Crear Archivo de Configuración

Crea el archivo `.cursor/mcp.json` en la raíz del proyecto con este contenido:

```json
{
  "mcpServers": {
    "portfolio-image-generator": {
      "command": "node",
      "args": ["${workspaceFolder}/mcp-servers/image-generator-mcp.js"],
      "env": {
        "GEMINI_API_KEY": "${env:GEMINI_API_KEY}",
        "OPENAI_API_KEY": "${env:OPENAI_API_KEY}",
        "REPLICATE_API_TOKEN": "${env:REPLICATE_API_TOKEN}"
      }
    },
    "portfolio-project-enricher": {
      "command": "node",
      "args": ["${workspaceFolder}/mcp-servers/project-enricher-mcp.js"]
    }
  }
}
```

**Nota:** Puedes copiar el contenido de `.cursor/mcp.json.example` si existe.

### 2. Instalar SDK de MCP

```bash
npm install @modelcontextprotocol/sdk
```

### 3. Configurar Variables de Entorno

Asegúrate de tener `.env.local` con tus API keys:

```bash
GEMINI_API_KEY=tu-api-key
OPENAI_API_KEY=tu-api-key
REPLICATE_API_TOKEN=tu-token
```

### 4. Reiniciar Cursor

Cierra y vuelve a abrir Cursor para que detecte los servidores MCP.

### 5. Verificar Configuración

En el chat de Cursor, prueba:

```
"Lista todos los proyectos del portafolio"
```

Si funciona, los servidores MCP están configurados correctamente.

## 🔍 Verificación

### Verificar que los Servidores Están Activos

1. Abre la consola de Cursor (View > Output)
2. Busca mensajes de los servidores MCP
3. Deberías ver: "MCP Server de Generación de Imágenes iniciado"

### Probar Herramientas

Prueba estos comandos en el chat:

```
"Lista todos los proyectos"
"Dame información del proyecto mas-analytics-landing-page"
"Verifica las imágenes del proyecto literas-mx"
```

## 🐛 Solución de Problemas

### Error: "Cannot find module @modelcontextprotocol/sdk"

```bash
npm install @modelcontextprotocol/sdk
```

### Error: "Command not found: node"

- Verifica que Node.js está instalado: `node --version`
- Asegúrate de que Node.js está en tu PATH

### Los servidores no aparecen

1. Verifica que `.cursor/mcp.json` existe y está bien formateado
2. Reinicia Cursor completamente
3. Verifica que no hay errores en la consola de Cursor

### Error: "API Key not found"

- Verifica que `.env.local` existe
- Asegúrate de que las variables de entorno están correctamente nombradas
- Reinicia Cursor después de agregar variables de entorno

## 📚 Referencias

- [Documentación MCP de Cursor](https://cursor.com/es/docs/context/mcp)
- [Directorio de Servidores MCP](https://cursor.com/es/docs/context/mcp/directory)





