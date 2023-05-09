import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  TDesignResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";

export const getPlugins = () => {
  return [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.d.ts",
      resolvers: [TDesignResolver({ library: "vue-next" }), VantResolver()],
    }),
    Components({
      resolvers: [TDesignResolver({ library: "vue-next" }), VantResolver()],
      dirs: ["src/components"],
      dts: "src/components.d.ts",
      directoryAsNamespace: false,
      globalNamespaces: [],
      directives: true,
      extensions: ["vue"],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
      ],
    }),
  ];
};
