import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // for shadcn/ui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.JPG", "**/*.PNG"],
  base: "./",
});
