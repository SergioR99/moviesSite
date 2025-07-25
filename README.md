# Micro Frontends App – Rick and Morty / Harry Potter

Esta aplicación demuestra el uso de **Micro Frontends** con **React + Vite**, integrando dos aplicaciones independientes (Rick and Morty y Harry Potter) en un proyecto host, con soporte para internacionalización, estilo modular y pruebas unitarias.

---

## 🔧 Tecnologías utilizadas

- React
- Vite
- Module Federation (`vite-plugin-federation`)
- Styled Components + BEM
- React Context + i18next
- Jest + React Testing Library
- TypeScript

---

## 📁 Estructura del proyecto
 |_host : proyecto principal que orquesta los microfrontends.
 |_movieOne : microfrontend de Rick and Morty.
 |_movieTwo : microfrontend de Harry Potter.

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Instala dependencias

```bash
# En cada proyecto (host, movieOne, movieTwo)
npm install

# En movieOne
npm run start

# En movieTwo
npm run start

# En host
npm run dev

# En cada proyecto
npm run test
```

## Desarrollado por Sergio Rendón como parte de una prueba técnica.
