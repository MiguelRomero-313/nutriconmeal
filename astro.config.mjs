import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "miguelrlia117.github.io",
  base: "/MisteryLux-Landing",
});
