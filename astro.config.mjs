import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ankitaYadav02.github.io",
  base: "/ankita_portfolio",
  integrations: [
    react(),
    tailwind({
      configFile: "./tailwind.config.js",
    }),
  ],
});
