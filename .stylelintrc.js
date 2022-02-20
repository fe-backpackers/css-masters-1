module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-hudochenkov/order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": null,
    "no-descending-specificity": null,
  },
};
