// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//tail function
const tail = function(params) {
  return params.slice(1,params.length);
};

// TEST CODE
//number array test
let result = tail([1,2,3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

//string array test
result = tail(['hi','this','is','test']);
assertEqual(result.length, 3);
assertEqual(result[0], 'this');
assertEqual(result[1], 'is');
assertEqual(result[2], 'test');

//empty array test
result = tail([]);
assertEqual(result.length, 0);

//one element array test
result = tail(['test']);
assertEqual(result.length, 0);
