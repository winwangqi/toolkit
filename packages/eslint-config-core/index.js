module.exports = {
  root: true,

  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    node: true,
    browser: true,
  },

  extends: ['eslint-config-airbnb-base'].map(require.resolve),

  rules: {
    'import/prefer-default-export': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never"
      }
    ],
    "semi": ["error", "never"],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
}
