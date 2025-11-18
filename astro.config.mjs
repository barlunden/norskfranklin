// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify({}),
  site: "https://norskfranklinregister.no",
  
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  image: {
    domains: ['norskfranklinregister.no', 'www.norskfranklinregister.no']
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
