# 🔄 Comando: Actualizar Proyecto con Imágenes

## Propósito

Actualiza automáticamente el archivo `src/data/projects.ts` con las rutas de las imágenes generadas.

## Uso

```
/update-project-images {slug} [--dry-run]
```

**Ejemplos:**
```
/update-project-images mas-analytics-landing-page
/update-project-images mas-analytics-landing-page --dry-run
```

## Parámetros

- `slug`: Slug del proyecto (requerido)
- `--dry-run`: Muestra qué se actualizaría sin hacer cambios

## Proceso

1. **Lee el proyecto** desde `src/data/projects.ts`
2. **Escanea** `public/images/{slug}/` para encontrar imágenes
3. **Escanea** `public/videos/{slug}/` para encontrar videos (opcional)
4. **Ordena** las imágenes por nombre
5. **Actualiza** el array `images` del proyecto
6. **Actualiza** el array `videos` si hay videos
7. **Mantiene** formato y estructura del archivo

## Output

Actualiza el proyecto en `src/data/projects.ts`:

```typescript
{
  id: "7",
  slug: "mas-analytics-landing-page",
  // ... otros campos ...
  images: [
    "/images/mas-analytics/mas-analytics-hero.jpg",
    "/images/mas-analytics/mas-analytics-features.jpg",
    "/images/mas-analytics/mas-analytics-usecases.jpg",
    "/images/mas-analytics/mas-analytics-results.jpg",
    "/images/mas-analytics/mas-analytics-cta.jpg"
  ],
  videos: [
    "/videos/mas-analytics/mas-analytics-hero-animated.mp4"
  ]
}
```

## Orden de Imágenes

Las imágenes se ordenan por:
1. Nombre del archivo (alfabéticamente)
2. Número en el nombre (si existe)
3. Fecha de creación (si no hay números)

**Ejemplo:**
- `mas-analytics-hero.jpg` → Primera
- `mas-analytics-features.jpg` → Segunda
- `mas-analytics-usecases.jpg` → Tercera

## Manejo de Imágenes Existentes

- **Si hay imágenes existentes:** Se mantienen y se agregan las nuevas al final
- **Si se usa `--replace`:** Reemplaza todas las imágenes existentes
- **Backup automático:** Se crea backup antes de actualizar

## Validación

Antes de actualizar, valida:
- ✅ Que el proyecto existe
- ✅ Que hay imágenes en la carpeta
- ✅ Que las rutas son correctas
- ✅ Que el formato del archivo es válido

## Backup

Se crea automáticamente un backup:
- **Ubicación:** `generated/backups/projects_ts_backup_{timestamp}.ts`
- **Formato:** Copia exacta del archivo original

## Rollback

Si algo sale mal, puedes restaurar:
```
/update-project-images {slug} --rollback {backup-file}
```

## Notas

- No sobrescribe sin confirmación (a menos que uses `--force`)
- Mantiene el formato y comentarios del archivo original
- Preserva el orden de otros proyectos
- No modifica otros campos del proyecto










