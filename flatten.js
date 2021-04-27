let eqLength = function(array1, array2) {
  return array1.length === array2.length;
};

let eqArrays = function(array1, array2) {
  let equals = false;
  if (eqLength(array1, array2)) {
    for (let i = 0; i < array1.length; i++) {
      equals = array1[i] === array2[i];
    }
  }
  return equals;
};

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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

//test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
