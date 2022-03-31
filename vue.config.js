const path = require('path');
module.exports = {
  lintOnSave: false,
  css: { extract: false },
  chainWebpack: config => {
    config.externals({ '@dialpad/dialtone': '@dialpad/dialtone' });
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          reactivityTransform: true
        }
      });
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '.'),
      },
    },
  },
};
