const { expect } = require('chai');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe('', () => {
  it('should return ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    const firstLetters = map(words, word => word[0]);
    expect(firstLetters).to.be.deep.equal(['g', 'c', 't', 'm', 't']);
  });

  it('should return ["d", "l", "o", "r", "m"] for ["ground", "control", "to", "major", "tom"]', () => {
    const lastLetters = map(words, word => word[word.length - 1]);
    expect(lastLetters).to.be.deep.equal(['d', 'l', 'o', 'r', 'm']);
  });

  it('should return [6, 7, 2, 5, 3] for ["ground", "control", "to", "major", "tom"]', () => {
    const lengths = map(words, word => word.length);
    expect(lengths).to.be.deep.equal([6, 7, 2, 5, 3]);
  });
});
