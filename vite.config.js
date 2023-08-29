import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Hier wird das Build-Output-Verzeichnis auf "build" gesetzt
  },
  base: "/vite-deploy/",
});
