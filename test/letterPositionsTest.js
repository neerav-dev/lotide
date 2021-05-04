const {expect} = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('return indices of each letter { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for "Hello"', () => {
    const result  = letterPositions('hello');
    expect(result).to.be.deep.equal({ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});
