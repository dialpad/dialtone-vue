module.exports = {
  branches: [
    'production',
    'staging',
    'vue3-staging',
    'vue3',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', {
      config: '@josedialpad/conventional-changelog-angular',
    }],
    '@semantic-release/github',
  ],
};
