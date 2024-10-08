module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended', 'plugin:import/recommended',
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      "eqeqeq": 1,
      "strict": 1,
      "no-undef": 2,
      "no-unused-vars": 1,
      "import/no-unresolved": 1
    }
  };
  