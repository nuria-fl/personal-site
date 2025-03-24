module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
  rules: {
    "no-console": ["error"],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-inline-html": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
