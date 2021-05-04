const countOnly = function(allItems, itemsToCount) {
  let result = {};

  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (result[name]) {
        result[name] += 1;
      } else {
        result[name] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;