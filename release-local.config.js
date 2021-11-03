// Set engbot as the author of the release commit
process.env.GIT_AUTHOR_NAME = 'engbotdialpad';
process.env.GIT_AUTHOR_EMAIL = 'engbot@dialpad.com';
process.env.GIT_COMMITTER_NAME = 'engbotdialpad';
process.env.GIT_COMMITTER_EMAIL = 'engbot@dialpad.com';

/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: [
    'production',
    'staging',
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
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    ['@semantic-release/git', {
      message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
    }],
  ],
};
