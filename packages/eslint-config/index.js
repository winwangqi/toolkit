module.exports = {
  root: true,
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    node: true,
    browser: true,
  },
  extends: ['@winwangqi/eslint-config-react-typescript', 'eslint-config-prettier'].map(require.resolve),
}
