// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({}),
  site: "https://norskfranklinregister.netlify.app",
  
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
