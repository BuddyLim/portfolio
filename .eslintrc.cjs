module.exports = { // eslint-disable-line
  root: true,
  env: { 
    browser: true,
    es6: true,
    jest: true,
    node: true
   },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/jsx-runtime"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
