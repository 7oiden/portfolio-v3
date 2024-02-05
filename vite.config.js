import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//remove this before production
  server: {
    https: false,
    host: "0.0.0.0",
    port: 5173, // Specify your preferred port
  },
});
