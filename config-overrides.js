// Cú pháp common js
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc()
);
