import { defineConfig } from "wxt";
import houdini from "houdini/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-svelte"],

  vite: () => ({
    plugins: [houdini()],

    resolve: {
      alias: {
        $houdini: "./$houdini",
      },
    },
  }),
});

