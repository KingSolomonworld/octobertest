module.exports = {
branches: "main",
repositoryUrl: "https://github.com/KingSolomonworld/octobertest",
plugins: [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/git',
  '@semantic-release/github']
 }