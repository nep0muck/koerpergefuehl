import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  // Erlaube den Zugriff auf die localhost Umgebung über dev.eichler-lan.de
  server: {
    allowedHosts: ['dev.eichler-lan.de']
  }
});