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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];

    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }
  return results;
};


//console.log(letterPositions('lighthouse in the house'));
// {
//   l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   n: [ 12 ]
// }

const result  = letterPositions('hello');

assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);
