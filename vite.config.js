import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isGitHub = process.env.DEPLOY_TARGET === "GH";

// https://vite.dev/config/
export default defineConfig({
  base: isGitHub ? "/your-repo-name/" : "/",
  plugins: [react(), tailwindcss()],
});
