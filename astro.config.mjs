// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({}),
  site: "https://norskfranklinregister.no",
  
  integrations: [react()],

  image: {
    domains: ['norskfranklinregister.no', 'www.norskfranklinregister.no']
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
