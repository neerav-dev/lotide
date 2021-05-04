const {expect} = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('should return "drama" for the key "The Wire"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    expect(result).to.be.equal('drama');
  });

  it('should return "undefined" for the key "That \'70s Show"', () => {
    const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    expect(result).to.be.undefined;
  });
});
