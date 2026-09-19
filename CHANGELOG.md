# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Unreleased]

### Added

- Configurado GitHub Actions: `deploy.yml` compila y publica `dist/` en
  GitHub Pages en cada push a `main` (origen "GitHub Actions" de Pages, sin
  rama `gh-pages`); `ci.yml` corre lint y build en cada Pull Request.

### Changed

- Migrado el proyecto de Create React App a Vite, directo a Radix sin pasar
  por baseui: `escala-notas` usaba `Input`, un `Select` de opciones fijas y
  una `Table` de solo lectura, ninguno tan complejo como el `CategorySelect`
  creatable de `por-hacer`. Ver el
  [CHANGELOG de por-hacer](https://github.com/tecnocoopcl/por-hacer/blob/main/CHANGELOG.md)
  para el detalle de esa migración.
- `src/ui` tiene solo lo que esta aplicación usa (`Input`, `Select`, `Table`):
  no se copiaron `Button`, `Checkbox`, `Dialog`, `Textarea` ni
  `CategorySelect` de `por-hacer` al no tener uso aquí.
- Corregidos el `<title>` y la meta `description` de `index.html`: quedaron
  copiados de `por-hacer` sin actualizar en la versión anterior de la app.

### Removed

- Eliminados `react-scripts`, `baseui` y `styletron`.

## [0.1.0] — Configuración inicial de despliegue

### Added

- Configurado el despliegue en GitHub Pages: `public/CNAME` con
  `escala-notas.aebn.cl`.
- Commit inicial del proyecto, descomprimido desde el SIP original.
