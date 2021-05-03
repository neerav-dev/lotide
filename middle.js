// Middle function implementation
let middle = function(arrayNumbers) {

  let lengthOfArray = arrayNumbers.length;
  //Return empty array, if less than 3 elements
  return lengthOfArray <= 2 ? [] : lengthOfArray % 2 === 0 ? ([arrayNumbers[lengthOfArray / 2 - 1], arrayNumbers[(lengthOfArray / 2)]]) : ([arrayNumbers[Math.floor(lengthOfArray / 2)]]);
};

module.exports = middle;




