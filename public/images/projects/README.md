# Imágenes de Proyectos

Coloca aquí las imágenes de tus proyectos. Las imágenes deben seguir esta convención de nombres:

## Convención de nombres

Para cada proyecto, usa nombres descriptivos basados en el slug del proyecto:

- **ecommerce-growth-redesign**: `ecommerce-1.jpg`, `ecommerce-2.jpg`, `ecommerce-3.jpg`, `ecommerce-4.jpg`
- **email-marketing-system**: `email-1.jpg`, `email-2.jpg`, `email-3.jpg`
- **webflow-design-system**: `webflow-1.jpg`, `webflow-2.jpg`, `webflow-3.jpg`, `webflow-4.jpg`
- **wordpress-custom-theme**: `wordpress-1.jpg`, `wordpress-2.jpg`, `wordpress-3.jpg`
- **landing-page-optimization**: `landing-1.jpg`, `landing-2.jpg`, `landing-3.jpg`, `landing-4.jpg`

## Formatos recomendados

- **Formato**: JPG o PNG
- **Tamaño**: Máximo 2MB por imagen
- **Dimensiones**: 1920x1080px (16:9) para mejor visualización
- **Optimización**: Comprime las imágenes antes de subirlas para mejor performance

## Uso de imágenes placeholder

Si no tienes imágenes aún, puedes usar servicios como:
- [Unsplash](https://unsplash.com) - Imágenes gratuitas de alta calidad
- [Placeholder.com](https://placeholder.com) - Generadores de placeholders
- [Lorem Picsum](https://picsum.photos) - Imágenes aleatorias para desarrollo

Ejemplo con Lorem Picsum:
```
https://picsum.photos/1920/1080
```

## Actualizar proyectos

Después de agregar las imágenes, actualiza el array `images` en `src/data/projects.ts` con las rutas correctas:

```typescript
images: [
  "/images/projects/ecommerce-1.jpg",
  "/images/projects/ecommerce-2.jpg",
  // ...
]
```

