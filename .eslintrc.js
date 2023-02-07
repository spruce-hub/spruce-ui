module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: 'error',
    'no-template-curly-in-string': 'warn',
    'accessor-pairs': 'warn',
    'consistent-return': 'warn',
    curly: 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'no-alert': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['packages/*/components/**/*.vue', 'docs/**/*.vue'],
      extends: ['@noahyu/vue'],
    },
    {
      files: ['docs/**/*.vue'],
      rules: {
        'no-alert': 0,
      },
    },
  ],
}
