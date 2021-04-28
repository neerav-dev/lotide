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


// Middle function implementation
let middle = function(arrayNumbers) {

  let lengthOfArray = arrayNumbers.length;
  //Return empty array, if less than 3 elements
  return lengthOfArray <= 2 ? [] : lengthOfArray % 2 === 0 ? ([arrayNumbers[lengthOfArray / 2 - 1], arrayNumbers[(lengthOfArray / 2)]]) : ([arrayNumbers[Math.floor(lengthOfArray / 2)]]);
};


//Return empty array, if less than 3 elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

//Return single element, if odd number of elements
assertArraysEqual(middle([1, 2, 3]) , [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);

//Return two elements, if even number of elements
assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);


