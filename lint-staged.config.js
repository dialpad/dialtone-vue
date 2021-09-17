module.exports = {
  '*.{js,vue}': [
    'npm run lint-staged:code',
    'esplint --stage-record-file',
  ],
  '*.markdown': [
    'npm run lint-staged:docs',
  ],
};
