const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Comparing identical number array
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// Comparing non-identical array
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// Comparing different size array
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
// Comparing identical string array
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// Comparing two different type array
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);