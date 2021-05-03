const assertArraysEqual = require('../assertArraysEqual');

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