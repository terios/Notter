module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["plugin:react/recommended"],
  plugins: ["react", "react-native", "jsx-a11y", "import"],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
