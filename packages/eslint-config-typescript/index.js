module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@winwangqi/eslint-config-core'
  ],

  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never"
      }
    ]
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'ts'],
      },
    },
  },
}
