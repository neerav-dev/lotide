const {expect} = require('chai');
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    expect(result).to.be.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});