const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// Comparing identical number array
assertEqual(eqArrays([], []), true);
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