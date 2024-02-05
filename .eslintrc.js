export default {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ['/dist/**/*', '/node_modules/**/*'],
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ]
  }
}
