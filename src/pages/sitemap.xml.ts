import carData from '../data/franklins.json';

const baseUrl = 'https://norskfranklinregister.no';

interface SitemapPage {
  url: string;
  priority: number;
  changefreq: string;
  lastmod?: string;
}

// Statiske sider
const staticPages: SitemapPage[] = [
  { url: '', priority: 1.0, changefreq: 'weekly' },
  { url: '/history', priority: 0.8, changefreq: 'monthly' },
  { url: '/franklininnorway', priority: 0.9, changefreq: 'weekly' },
  { url: '/klubber', priority: 0.6, changefreq: 'monthly' },
  { url: '/kontakt', priority: 0.7, changefreq: 'monthly' },
];

// Bil-sider (genererte dynamisk)
const carPages: SitemapPage[] = carData.map((car) => ({
  url: `/cars/${car.id}`,
  priority: 0.8,
  changefreq: 'monthly',
  lastmod: new Date().toISOString().split('T')[0] // Dagens dato
}));

// Album-sider (berre for biler med fleire bilder)
const albumPages: SitemapPage[] = carData
  .filter((car) => car.images && car.images.length > 1)
  .map((car) => ({
    url: `/cars/${car.id}/album`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }));

const allPages = [...staticPages, ...carPages, ...albumPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

export async function GET() {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}