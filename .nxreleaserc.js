module.exports = {
  changelog: true,
  npm: false,
  github: false,
  git: false,
  repositoryUrl: "https://github.com/yzhylin/react-module-federation.git",
  commitMessage: "chore(release): 🚀 release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
  tagFormat: "${PROJECT_NAME}/v${VERSION}",
  buildTarget: "${PROJECT_NAME}:build",
  outputPath: '${WORKSPACE_DIR}/dist/packages/${PROJECT_NAME}',
  branches: [
    "main"
  ],
}

// module.exports = {
//   changelog: true,
//   npm: false,
//   git: false,
//   github: false,
//   repositoryUrl: "https://github.com/yzhylin/react-module-federation.git",
//   branches: [
//     "main"
//   ],
//   // plugins: [
//   //   "@semantic-release/commit-analyzer",
//   //   "@semantic-release/release-notes-generator",
//   //   "@semantic-release/changelog",
//   // ]
//   // tagFormat: "${PROJECT_NAME}/v${VERSION}",
//   // commitMessage: "chore(release): 🚀 release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
// }
