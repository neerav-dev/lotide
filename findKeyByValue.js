const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// FUNCTION IMPLEMENTATION
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let findKeyByValue = function(bestTVShowsByGenre, showName) {
  for (const genre in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[genre] === showName) {
      return genre;
    }
  }

  //Spoiler Tips Implementation
  // let genre = Object.keys(bestTVShowsByGenre);
  // for (const list of genre) {
  //   if (bestTVShowsByGenre[list] === showName) {
  //     return list;
  //   }
  // }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

