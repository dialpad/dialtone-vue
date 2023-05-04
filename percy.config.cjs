module.exports = {
  version: 2,
  storybook: {
    queryParams: {
      viewMode: 'docs',
      id: 'visual-testing-inline-components--docs',
    },
  },
  snapshot: {
    enableJavaScript: true,
    widths: [1280],
  },
  discovery: {
    disableCache: true,
  },
};
