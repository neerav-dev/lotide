
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Count Letters function implementation
let countLetters = function(sentence) {
  let result = {};
  for (const character of sentence) {
    if (character !== ' ') {
      if (result[character]) {
        result[character] += 1;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};


console.log(countLetters('lighthouse in the house'));
//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

let result = countLetters("LHL");

assertEqual(result["L"], 2);
assertEqual(result["H"], 1);