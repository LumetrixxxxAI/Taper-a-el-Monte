# Tapería El Monte — Web

Página web de una sola página (one-page) para Tapería El Monte, bar de tapas en Cártama (Málaga). HTML, CSS y JS puros, sin frameworks ni build.

## Estructura

```
index.html          Página principal (todas las secciones)
css/style.css        Estilos
js/main.js            Menú móvil, pestañas de la carta, scroll reveal, banner de cookies
img/                   Logotipo (ermita), favicon e imágenes (ver pendientes abajo)
legal/                 Aviso legal, privacidad y cookies
```

## Fotos pendientes

No se encontraron fotos del local en la carpeta de Descargas, así que todos los huecos de imagen están marcados con placeholders visibles ("📷 FOTO PENDIENTE: ..."). Sustituye cada `<div class="ph">...</div>` por una etiqueta `<img>` apuntando a la foto correspondiente en `img/`. Lista de fotos necesarias:

1. Hero — fachada o interior acogedor, luz cálida (1920×1080px horizontal)
2. Nuestra cocina — interior del bar, barra o comedor (vertical, ~1000×1250px)
3. Especialidades (4 fotos cuadradas): carrillada al PX, croquetas caseras, berenjenas con miel, tosta de El Monte
4. El ambiente (5 fotos): sala principal, barra, terraza/mesas, grupo de amigos tapeando, rincón acogedor
5. Open Graph — una foto potente para compartir por WhatsApp/redes (`img/og-taperia-el-monte.jpg`, 1200×630px)

## Datos por confirmar

- Horario exacto de cierre (actualmente puesto "19:00–00:00" como estimación, marcado "confirmar" en la web)
- NIF/CIF y correo electrónico del titular (aviso legal y privacidad)
- Enlace a la carta completa en PDF (botón "Ver la carta completa")
- Enlace a la ficha de Google (botón "Ver todas las opiniones en Google")
- Redes sociales (Instagram) en el footer

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `taperia-el-monte`).
2. Conecta este repositorio local y sube los cambios:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/taperia-el-monte.git
   git branch -M main
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En unos minutos la web estará publicada en `https://TU-USUARIO.github.io/taperia-el-monte/`.
6. (Opcional) Si tienes un dominio propio, configúralo en la misma sección "Pages" añadiendo un dominio personalizado (custom domain) y creando los registros DNS que indique GitHub.

## Diseñado por Lumetrix
