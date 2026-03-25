import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./_site",
  server: {
    host: true,
    port: 2500
  }
});
