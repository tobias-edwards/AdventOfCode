module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    // Support jest for test files only
    {
      files: ['**/*.test.js'],
      env: { 'jest/globals': true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {},
};
