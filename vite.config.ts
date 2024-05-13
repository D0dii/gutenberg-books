import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      hooks: "/src/hooks",
      components: "/src/components",
      pages: "/src/pages",
      routes: "/src/routes",
      test: "/src/test",
      utils: "/src/utils",
      types: "/src/types",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
