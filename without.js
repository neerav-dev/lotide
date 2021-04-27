
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


//without function implementation
let without = function(words, itemToRemove) {
  let source = Array.from(words);
  itemToRemove.forEach(item => {
    source.splice(source.indexOf(item),1);
  });
  return source;
};

let words = ["hello", "world", "lighthouse"];
//capture return value for this test case
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

words = ["hello", "world", 5, "lighthouse"];
//capture return value for this test case
assertArraysEqual(without(words, ["lighthouse" , 5]), ["hello", "world"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", 5, "lighthouse"]);