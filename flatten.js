//flatten function implementation
let flatten = function(array) {
  let flattenedArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(item => flattenedArray.push(item));
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

module.exports = flatten;
