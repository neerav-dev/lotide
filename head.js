// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(
    actual === expected
      ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
      : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
};

//head function
const head = function(params) {
  return typeof params !== "undefined" ? params[0] : undefined;
};

// TEST CODE

// check with number array
assertEqual(head([5, 6, 7]), 5);
// check with string array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// check for one element
assertEqual(head(["one"]), "one");
// check empty array
assertEqual(head([]), undefined);
