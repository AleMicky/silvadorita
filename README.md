# Silvadorita — Empresa Minera S.R.L.

Sitio web corporativo oficial de **Empresa Minera "Silvadorita" S.R.L.** (Cochabamba y La Paz, Bolivia), desarrollado con **Astro 5** y **Tailwind CSS v4**.

## Características principales

- **Diseño Oscuro Premium Industrial:** Estética moderna inspirada en la minería andina de wolframio (`W`), estaño (`Sn`) y oro (`Au`), con tarjetas en cristal oscuro (*glassmorphism*), iluminación radial interactiva y efecto de inclinación 3D.
- **100% Responsive:** Adaptado para teléfonos móviles (desde 320px), tablets y monitores de escritorio.
- **Datos centralizados:** Toda la información legal, áreas mineras (*La Poderosa*, *Mi Triunfo*, *San Esteban*), ficha corporativa y canales de contacto se gestionan desde `src/data/company.ts`.

## Estructura del proyecto

```text
├── public/
│   ├── favicon.svg
│   └── images/               # Fotografías mineras y muestras de minerales
├── src/
│   ├── components/
│   │   ├── Logo.astro        # Emblema vectorial SVG de Silvadorita
│   │   ├── Navbar.astro      # Barra de navegación flotante tipo cápsula
│   │   ├── Hero.astro        # Hero a pantalla completa con minerales y contadores
│   │   ├── About.astro       # Sección "Quiénes somos" en formato Bento Grid
│   │   ├── MiningAreas.astro # Sección "Nuestras áreas mineras"
│   │   ├── CompanyData.astro # Dossier interactivo "Datos de la empresa"
│   │   └── Footer.astro      # Sección de "Contacto" y pie de página
│   ├── data/
│   │   └── company.ts        # Datos estructurados de la empresa
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal, SEO y observadores de animación
│   ├── pages/
│   │   └── index.astro       # Página principal
│   └── styles/
│       └── global.css        # Configuración de Tailwind CSS v4 y animaciones
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Comandos disponibles

| Comando           | Acción                                                 |
| :---------------- | :----------------------------------------------------- |
| `npm install`     | Instala las dependencias del proyecto                  |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321`   |
| `npm run build`   | Genera la versión estática de producción en `./dist/`  |
| `npm run preview` | Previsualiza localmente la compilación de producción   |
