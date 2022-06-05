module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-airbnb/hooks', '@winwangqi/eslint-config-core'].map(require.resolve),
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never"
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
