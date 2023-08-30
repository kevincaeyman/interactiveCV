import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["Experience"],
  },
  server: {
    host: true,
  },
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
    host: "vite --host",
  },
});
