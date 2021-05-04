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

module.exports = countLetters;