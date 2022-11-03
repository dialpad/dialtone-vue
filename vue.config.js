const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  lintOnSave: false,
  css: { extract: false },
  chainWebpack: (config) => {
    config.externals(['@dialpad/dialtone', '@dialpad/dialtone-icons']);
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '.'),
      },
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
});
