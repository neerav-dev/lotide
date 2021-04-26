// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
//Test at least the following scenarios:

// Comparing identical strings
assertEqual("Code", "Code");
// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
// Comparing identical numbers
assertEqual(1, 1);
// Comparing non-identical numbers
assertEqual(1, 12);
