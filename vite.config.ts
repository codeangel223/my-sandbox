import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: ["801d-154-124-73-40.ngrok-free.app"],
  },
  build: {
    outDir: "build",
  },
  base: "/my-sandbox",
});
