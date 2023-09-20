const { readdirSync } = require('fs');
const path = require('path');

const packageScopes = [
  "smoke",
  ...(readdirSync(path.resolve(__dirname, 'apps'), { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name))
  ];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        // Minor
        'feat',
        // Patch
        'perf',
        'fix',
        // None
        'chore',
        'ci',
        'revert',
        'test',
        'docs',
        'build',
        'refactor'
      ],
    ],
    'scope-empty': [0],
    'scope-enum': [
      2,
      'always',
      // prettier-ignore
      [
        ...packageScopes,
        "release"
      ],
    ],
  },
  ignores: [message => message.toLowerCase().startsWith('wip')],
};
