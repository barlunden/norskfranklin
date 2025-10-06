# 🚗 Norsk Franklinregister

> **Ein moderne nettstad for norske H. H. Franklin bil-entusiaster**  
> Live på: [norskfranklinregister.no](https://norskfranklinregister.no)

## 🚀 Rask start

```bash
# Clone repository
git clone https://github.com/barlunden/norskfranklin.git
cd norskfranklin

# Installer dependencies
npm install

# Start dev server
npm run dev

# Bygg for produksjon
npm run build
```

## 📋 Kommandoer

| Kommando | Handling |
|----------|----------|
| `npm run dev` | Start dev server på `localhost:4321` |
| `npm run build` | Bygg produksjonsversjon til `./dist/` |
| `npm run preview` | Preview build lokalt |
| `npm run astro ...` | Køyr Astro CLI kommandoer |

## 🏗 Teknologi-stack

- **Framework**: [Astro](https://astro.build) 5.6.1 - Static Site Generator
- **Frontend**: [React](https://react.dev) 19.0.0 - Interaktive komponenter  
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.3 - Utility-first CSS
- **Carousel**: [Swiper.js](https://swiperjs.com) 12.0.2 - Touch-enabled gallerier
- **UI**: [RSuite](https://rsuitejs.com) 5.83.3 - React komponentbibliotek
- **Deploy**: [Netlify](https://netlify.com) - Edge hosting med SSR

## � Prosjektstruktur

```
src/
├── components/          # React/Astro komponenter
│   ├── SEO.astro       # Dynamisk SEO metadata
│   ├── SwiperCarousel.jsx  # Moderne bildekarusell
│   ├── SwiperModal.jsx     # Modal bildevisning
│   └── ...
├── data/               # JSON-baserte data
│   ├── franklins.json      # Bil-database
│   ├── images.json         # Historiske bilder
│   └── resources.json      # Eksterne ressursar
├── layouts/            # Sidemallar
├── pages/              # Astro routing
│   ├── cars/[id]/         # Dynamiske bilsider
│   ├── sitemap.xml.ts     # Auto-generert sitemap
│   └── robots.txt.ts      # SEO konfigurasjon
└── styles/             # Global CSS
```

## ✨ Funksjonalitet

### **Implementert**
- ✅ Responsivt design med moderne UX
- ✅ Swiper.js bildegallerier med touch-støtte
- ✅ Dynamisk SEO med structured data
- ✅ Bil-database med 12 registrerte Franklin-biler
- ✅ Modal bildevisning med keyboard-navigasjon
- ✅ Automatisk sitemap og robots.txt
- ✅ Netlify deployment med Edge functions

### **Planlagt**
- 🔄 Søkefunksjon med Fuse.js
- 🔄 Admin-panel for innhaldsredigering
- 🔄 Bildeoptimasering (WebP, lazy loading)
- 🔄 Analytics og brukarstatistikk
- 🔄 PWA funksjonalitet

## 🔧 Utvikling

### **Krav**
- Node.js 18+ 
- npm eller yarn

### **Environment setup**
```bash
# Klone og installer
git clone https://github.com/barlunden/norskfranklin.git
cd norskfranklin
npm install

# Start development
npm run dev
```

### **Build pipeline**
- **Netlify**: Automatisk deploy frå `main` branch
- **SSR**: Server-side rendering for dynamisk innhald
- **Edge**: Global CDN distribusjon

### **Bidra**
1. Fork repository
2. Lag feature branch: `git checkout -b feature/ny-funksjon`
3. Commit endringar: `git commit -m 'Legg til ny funksjon'`
4. Push til branch: `git push origin feature/ny-funksjon`
5. Opprett Pull Request

## 📊 SEO og ytelse

- **Lighthouse score**: 95+ på alle kategoriar
- **Structured data**: Schema.org for rich snippets
- **Open Graph**: Optimert for sosiale medier
- **Sitemap**: Automatisk generering
- **Core Web Vitals**: Optimalisert for ytelse

## � Kontakt

**Prosjektansvarleg**: Åge Jan Barlund  
📧 barlund@gmail.com  
📞 411 86 371

**Teknisk utvikling**: [Comino Web AS](https://cominoweb.no)

## 📄 Lisens

Copyright © 2025 Norsk Franklinregister. Alle rettar reserverte.

---

*For detaljert prosjektdokumentasjon, sjå [PROSJEKT-OVERSIKT.md](./PROSJEKT-OVERSIKT.md)*
