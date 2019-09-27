module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/styles.scss";'
      }
    }
  },
};