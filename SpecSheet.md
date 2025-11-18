# Designspesifikasjonar - Norsk Franklinregister

## 🎨 Fargepalett

### Primærfargar
- **Hovedblå**: `#2563eb` (blue-600) - Navigasjon, knapper, lenker
- **Mørk blå**: `#1e40af` (blue-700) - Hover-tilstandar og kontrast
- **Lys blå**: `#60a5fa` (blue-400) - Aksenter og highlight
- **Kvit**: `#ffffff` - Bakgrunn og tekst

### Nøytrale fargar
- **Slate grå**: `#64748b` (slate-500) - Sekundær tekst
- **Mørk grå**: `#374151` (gray-700) - Hjul og detaljar
- **Lys grå**: `#f8fafc` (slate-50) - Bakgrunnssoner

### Støttefargar
- **Raud**: `#dc2626` (red-600) - Feilmeldingar og sletting
- **Grøn**: `#16a34a` (green-600) - Suksess og bekreftingar
- **Gul**: `#d97706` (amber-600) - Åtvaringar og info

## 🔤 Typografi

### Fontar
- **Hovudfont**: Josefin Sans Variable (Google Fonts)
  - Bruk: Hovudtekst, navigasjon, knapper
  - Vekter: 300, 400, 500, 600, 700
- **Aksentfont**: Playfair Display Variable (Google Fonts)
  - Bruk: Overskrifter og elegante detaljar
  - Vekter: 400, 500, 600, 700, 900

### Typografisk skala
```css
--h1-size: clamp(2.5rem, 5vw + 1rem, 3.5rem);
--h2-size: clamp(2rem, 4vw + 0.5rem, 2.5rem);
--h3-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
--p-size: 1.2rem;
```

## 🏷 Ikon og logo

### Favicon
- **Format**: SVG (primær), PNG (fallback)
- **Design**: Stilisert Franklin bil med "F"
- **Fargar**: Hovudblå (#2563eb) med kvite detaljar
- **Alternativ**: Enkel "F" i sirkel for små størrelser

### Apple Touch Icon
- **Størrelse**: 180x180px PNG
- **Bakgrunn**: Hovudblå
- **Innhald**: Kvit "F" eller bil-silhuett

## 📱 Responsive design

### Breakpoints
```css
/* Mobil */
@media (max-width: 640px) { ... }
/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) { ... }
/* Desktop */
@media (min-width: 1025px) { ... }
```

### Grid system
- **Container**: `max-width: 1280px`
- **Padding**: `clamp(1rem, 5vw, 3rem)`
- **Gap**: `1rem` (mobil), `1.5rem` (tablet), `2rem` (desktop)

## 🎯 UI-komponenter

### Knapper
```css
.btn-primary {
  background: #2563eb;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #1e40af;
  transform: translateY(-1px);
}
```

### Kort og skyggar
```css
.shadow-effect {
  background: linear-gradient(145deg, #edeff1, #ffffff);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 4px 6px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(0, 0, 0, 0.04),
    -8px -8px 16px #ffffff;
}
```

### Navigasjon
- **Aktiv tilstand**: Blå underline (`border-bottom: 2px solid #2563eb`)
- **Hover**: Grå underline (`border-bottom: 2px solid #94a3b8`)
- **Mobile meny**: Dropdown med skygge og fade-in

## 🚗 Branding

### Merkeidentitet
- **Namn**: Norsk Franklinregister
- **Kort namn**: Franklin NO
- **Tagline**: "Et samlingssted for entusiaster av H. H. Franklin biler i Norge"
- **Tone of voice**: Profesjonell, vennleg, kunnskapsrik

### Bildebruk
- **Stil**: Historiske og moderne fotografier
- **Kvalitet**: Høg oppløysing, god lighting
- **Format**: 16:9 for hero-bilder, kvadratisk for thumbnails
- **Alt-tekst**: Detaljerte beskrivingar for tilgjenge

## 📊 Performance mål

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse scores
- **Performance**: > 95
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

---

*Designspesifikasjon sist oppdatert: 6. oktober 2025*

