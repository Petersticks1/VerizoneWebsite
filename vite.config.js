import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  // base: '/real-estate-verification-agency/',
  plugins: [react(), tailwindcss()],
});
