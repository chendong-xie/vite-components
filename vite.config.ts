import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";
const resolvePath = (str: string) => resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolvePath("src/components/index.ts"),
      name: "web2",
      fileName: (format) => `web2.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
      plugins: [
        typescript({
          target: "es2015", // 这里指定编译到的版本，
          rootDir: resolvePath("components/"),
          declaration: true,
          declarationDir: resolvePath("dist"),
          exclude: resolvePath("node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
  resolve: {
    // alias: {
    //   "@": resolve(__dirname, "src"),
    // },
  },
});
