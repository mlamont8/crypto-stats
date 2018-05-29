module.exports = {
  "extends": ["airbnb", "prettier"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
  },
  "env": {
    "browser": true,
    "jest": true,
  }
};