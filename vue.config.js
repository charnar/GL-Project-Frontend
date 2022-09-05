const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/assets/sass/color"; 
        @use "@/assets/sass/mixin";`,
      },
    },
  },
});
