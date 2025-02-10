import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8383,
    host: true,
    watch: {
       usePolling: true,
    },
  },
});