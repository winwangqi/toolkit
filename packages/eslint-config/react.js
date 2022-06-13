module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-airbnb/hooks', './core'].map(
    require.resolve,
  ),
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
