import { ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import { getBuild } from "./config/build";
import { getPlugins } from "./config/plugins";

export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    build: getBuild(),
    server: {
      port: 8080,
      cors: true,
      proxy: {
        "/c4c3": {
          target: "http://3tu3jbzgwfam.guyubao.com",
          secure: true,
          changeOrigin: true,
        },
      },
    },
    plugins: getPlugins(),
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@utils": resolve(__dirname, "src/utils"),
        "@com": resolve(__dirname, "src/components"),
      },
    },
  };
};
