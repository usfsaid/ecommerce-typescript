import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import svg from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg(),
    tsconfigPaths(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
