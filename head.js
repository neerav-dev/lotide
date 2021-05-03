//head function
const head = function(params) {
  return typeof params !== "undefined" ? params[0] : undefined;
};

module.exports = head;