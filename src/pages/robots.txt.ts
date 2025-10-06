export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://norskfranklinregister.no/sitemap.xml

# Disallow admin paths if any in the future
# Disallow: /admin/

# Allow all search engines to crawl the site
# Priority pages for crawling
Allow: /
Allow: /franklininnorway
Allow: /history
Allow: /cars/
Allow: /klubber
Allow: /kontakt`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400' // Cache for 1 day
    }
  });
}