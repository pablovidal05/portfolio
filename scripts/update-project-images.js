#!/usr/bin/env node

/**
 * Script para actualizar projects.ts con las imágenes generadas
 * Uso: node scripts/update-project-images.js {slug} [--dry-run] [--replace]
 */

const fs = require('fs');
const path = require('path');

/**
 * Escanea directorio de imágenes
 */
function scanImages(slug) {
  const imagesDir = path.join(__dirname, '../public/images', slug);
  const videosDir = path.join(__dirname, '../public/videos', slug);
  
  const images = [];
  const videos = [];
  
  // Escanea imágenes
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort();
    
    images.push(...files.map(file => `/images/${slug}/${file}`));
  }
  
  // Escanea videos
  if (fs.existsSync(videosDir)) {
    const files = fs.readdirSync(videosDir)
      .filter(file => /\.(mp4|webm|mov)$/i.test(file))
      .sort();
    
    videos.push(...files.map(file => `/videos/${slug}/${file}`));
  }
  
  return { images, videos };
}

/**
 * Actualiza projects.ts
 */
function updateProjectsFile(slug, newImages, newVideos, options = {}) {
  const { dryRun = false, replace = false } = options;
  const projectsPath = path.join(__dirname, '../src/data/projects.ts');
  let content = fs.readFileSync(projectsPath, 'utf-8');
  
  // Busca el proyecto
  const slugRegex = new RegExp(`slug:\\s*"${slug}"`, 'm');
  const match = content.match(slugRegex);
  
  if (!match) {
    throw new Error(`Proyecto no encontrado: ${slug}`);
  }
  
  const projectStart = match.index;
  
  // Encuentra el objeto completo del proyecto
  let depth = 0;
  let braceStart = -1;
  let braceEnd = -1;
  
  for (let i = projectStart; i < content.length; i++) {
    if (content[i] === '{') {
      if (braceStart === -1) braceStart = i;
      depth++;
    }
    if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        braceEnd = i + 1;
        break;
      }
    }
  }
  
  const projectCode = content.substring(braceStart, braceEnd);
  
  // Extrae imágenes existentes
  const imagesMatch = projectCode.match(/images:\s*\[([^\]]*)\]/s);
  const videosMatch = projectCode.match(/videos:\s*\[([^\]]*)\]/s);
  
  let finalImages = replace ? newImages : [];
  let finalVideos = replace ? newVideos : [];
  
  if (!replace) {
    // Mantiene imágenes existentes
    if (imagesMatch) {
      const existingImages = imagesMatch[1]
        .split(',')
        .map(img => img.trim().replace(/["']/g, ''))
        .filter(img => img && !img.includes(slug)); // Excluye las del mismo slug para evitar duplicados
      finalImages = [...existingImages, ...newImages];
    } else {
      finalImages = newImages;
    }
    
    // Mantiene videos existentes
    if (videosMatch) {
      const existingVideos = videosMatch[1]
        .split(',')
        .map(vid => vid.trim().replace(/["']/g, ''))
        .filter(vid => vid && !vid.includes(slug));
      finalVideos = [...existingVideos, ...newVideos];
    } else {
      finalVideos = newVideos;
    }
  }
  
  // Formatea arrays
  const imagesArray = finalImages.length > 0 
    ? `[\n${finalImages.map(img => `      "${img}"`).join(',\n')}\n    ]`
    : '[]';
  
  const videosArray = finalVideos.length > 0
    ? `[\n${finalVideos.map(vid => `      "${vid}"`).join(',\n')}\n    ]`
    : '[]';
  
  // Reemplaza o agrega imágenes
  let newProjectCode = projectCode;
  
  if (imagesMatch) {
    newProjectCode = newProjectCode.replace(
      /images:\s*\[[^\]]*\]/s,
      `images: ${imagesArray}`
    );
  } else {
    // Agrega antes del cierre del objeto
    newProjectCode = newProjectCode.replace(
      /(\s+)(\})$/,
      `$1  images: ${imagesArray},\n$1$2`
    );
  }
  
  // Reemplaza o agrega videos
  if (videosMatch) {
    newProjectCode = newProjectCode.replace(
      /videos:\s*\[[^\]]*\]/s,
      `videos: ${videosArray}`
    );
  } else if (finalVideos.length > 0) {
    // Agrega antes del cierre del objeto
    newProjectCode = newProjectCode.replace(
      /(\s+)(\})$/,
      `$1  videos: ${videosArray},\n$1$2`
    );
  }
  
  // Reemplaza en el contenido completo
  const newContent = content.substring(0, braceStart) + 
                     newProjectCode + 
                     content.substring(braceEnd);
  
  if (dryRun) {
    console.log('=== DRY RUN - Cambios propuestos ===\n');
    console.log('Imágenes:');
    finalImages.forEach(img => console.log(`  + ${img}`));
    if (finalVideos.length > 0) {
      console.log('\nVideos:');
      finalVideos.forEach(vid => console.log(`  + ${vid}`));
    }
    return null;
  }
  
  // Crea backup
  const backupDir = path.join(__dirname, '../generated/backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, `projects_ts_backup_${timestamp}.ts`);
  fs.writeFileSync(backupPath, content);
  console.log(`✓ Backup creado: ${backupPath}`);
  
  // Escribe nuevo contenido
  fs.writeFileSync(projectsPath, newContent);
  
  return {
    images: finalImages,
    videos: finalVideos,
    backup: backupPath
  };
}

/**
 * Función principal
 */
function main() {
  const args = process.argv.slice(2);
  const slug = args[0];
  const dryRun = args.includes('--dry-run');
  const replace = args.includes('--replace');
  
  if (!slug) {
    console.error('Uso: node scripts/update-project-images.js {slug} [--dry-run] [--replace]');
    process.exit(1);
  }
  
  try {
    // Escanea imágenes
    const { images, videos } = scanImages(slug);
    
    if (images.length === 0 && videos.length === 0) {
      console.error(`No se encontraron imágenes ni videos en public/images/${slug}/ o public/videos/${slug}/`);
      process.exit(1);
    }
    
    console.log(`Encontradas ${images.length} imágenes y ${videos.length} videos para ${slug}`);
    
    // Actualiza archivo
    const result = updateProjectsFile(slug, images, videos, { dryRun, replace });
    
    if (dryRun) {
      console.log('\n✓ Dry run completado. Usa sin --dry-run para aplicar cambios.');
    } else {
      console.log(`\n✓ Proyecto actualizado en src/data/projects.ts`);
      console.log(`  - ${result.images.length} imágenes`);
      if (result.videos.length > 0) {
        console.log(`  - ${result.videos.length} videos`);
      }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { scanImages, updateProjectsFile };










