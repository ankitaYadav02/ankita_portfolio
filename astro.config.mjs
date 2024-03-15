import { defineConfig } from "astro/config";
import react from "@astrojs/react";
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
