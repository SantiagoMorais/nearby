module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native", "prettier", "expo"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "prettier",
    "plugin:expo/recommended",
  ],
  rules: {
    "react-native/no-inline-styles": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
