import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "public/assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
  server: {
  host: "0.0.0.0",
  port: 5173,
  allowedHosts: [
    "9940-154-161-191-254.ngrok-free.app"
  ],
},
  preview: {
    port: 5173,
    host: "localhost",
  },
});