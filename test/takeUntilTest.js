const { expect } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] when callback function (x => x < 0)', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data, x => x < 0);
    expect(results).to.be.deep.equal([ 1, 2, 5, 7, 2 ]);
  });

  it('should return ["I\'ve", "been", "to", "Hollywood"] for ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"]; when callback function (x => x === ",")', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(data, x => x === ',');
    expect(results).to.be.deep.equal([ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});