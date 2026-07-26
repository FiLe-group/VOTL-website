import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export default defineConfig({
  plugins: [
    vike(),
    react()
  ],
  server: { port }
});
