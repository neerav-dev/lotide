let eqLength = function(array1, array2) {
  return array1.length === array2.length;
};

let isEmpty = function(array) {
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

const words = ["ground", "control", "to", "major", "tom"];

// Our map function will take in two arguments (An array to map, A callback function)
// The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }


  return results;
};

const firstLetters = map(words, word => word[0]);
assertArraysEqual(firstLetters, ['g', 'c', 't', 'm', 't']);

const lastLetters = map(words, word => word[word.length - 1]);
assertArraysEqual(lastLetters, ['d', 'l', 'o', 'r', 'm']);

const lengths = map(words, word => word.length);
assertArraysEqual(lengths, [6, 7, 2, 5, 3]);