import { resolve } from "path";

export const getBuild = () => {
  return {
    emptyOutDir: true,
    cssCodeSplit: true,
    target: "es2015",
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false,
    esbuild: {
      pure: ["console.log"],
      minify: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
          if (id.includes(resolve(__dirname, "/src/store/index.ts"))) {
            return "vendor";
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  };
};
