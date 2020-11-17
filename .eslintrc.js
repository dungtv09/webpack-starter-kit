module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {},
}
