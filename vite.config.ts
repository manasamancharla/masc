import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import path from "path";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        [remarkFrontmatter as any],
        [remarkMdxFrontmatter as any],
      ],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
