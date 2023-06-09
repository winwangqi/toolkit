module.exports = {
  root: true,

  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    node: true,
    browser: true,
  },

  extends: ['eslint-config-airbnb/base'].map(require.resolve),

  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'class-methods-use-this': 'off',
    'no-undef': 'off',
    'no-empty-function': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
}
