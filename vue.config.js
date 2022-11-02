const path = require('path');

module.exports = {
  lintOnSave: false,
  css: { extract: false },
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
};
