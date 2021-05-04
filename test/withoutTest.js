const { expect } = require('chai');
const without = require('../without');

describe('#without', () => {
  it('should return ["hello", "world"] for "hello", "world", "lighthouse"', () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    expect(result).to.be.deep.equal(["hello", "world"]);
  });

  it('should return ["hello", "world"] for "hello", "world", 5, "lighthouse"', () => {
    const words = ["hello", "world", 5, "lighthouse"];
    const result = without(words, ["lighthouse" , 5]);
    expect(result).to.be.deep.equal(["hello", "world"]);
  });
  
  it('should not alter original array"', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    expect(words).to.be.deep.equal(["hello", "world", "lighthouse"]);
  });
});