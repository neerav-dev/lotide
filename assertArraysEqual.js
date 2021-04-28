let eqLength = function(array1, array2) {
  return array1.length === array2.length;
};

let isEmpty = function (array){
  return Array.isArray(array) && (array.length === 0);
};

let eqArrays = function(array1, array2) {
  let equals = false;
  
  equals = (isEmpty(array1) && isEmpty(array2))  && true; 

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

// Comparing identical number array
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// Comparing non-identical array
assertArraysEqual([1, 2, 3], [3, 2, 1]);
// Comparing different size array
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// Comparing identical string array
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// Comparing two different type array
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);