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
  console.log(results);
  return results;
};

module.exports = letterPositions;