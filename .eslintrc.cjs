/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",

    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:compat/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
 parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ['@typescript-eslint', "react", "react-hooks"],
  root: true,
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
};
