# Portafolio de Felix Arocha

Web interactiva con mis proyectos de universidad y personales: cada uno con teaser de la app por dentro, enlace al código y, cuando existe, demo en vivo. Incluye mis skills con una terminal estilo Claude Code y la descarga de mi CV en PDF.

**https://felixxcito.github.io**

## Cómo está hecho

HTML, CSS y JavaScript sin dependencias ni paso de build. Fuentes Geist autoalojadas, íconos Phosphor y logos de Simple Icons en línea.

- `data/projects.js`: proyectos y skills (una sola fuente de datos).
- `data/shots.js`: capturas de cada proyecto.
- `assets/screens/<proyecto>/`: capturas optimizadas.
- `cv/cv.html`: el CV; se exporta a `assets/Felix-Arocha-CV.pdf` con Chrome (`--print-to-pdf`).

## Ver en local

```bash
npx serve .
```
