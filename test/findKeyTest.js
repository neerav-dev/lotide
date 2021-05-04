const { expect } = require('chai');
const findKey = require('../findKey');

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  const key = findKey(data, x => x.stars === 2);
  it('should return "noma" for data object when callback function is (x => x.stars === 2)', () => {
    expect(key).to.be.equal("noma");
  });

  it('should return "Akaleri" for data object when callback function is (x => x.stars > 2)', () => {
    const key = findKey(data, x => x.stars > 2);
    expect(key).to.be.equal("Akaleri");
  });

  it('should return "undefined" for data object when callback function is (x => x.stars === 4)', () => {
    const key = findKey(data, x => x.stars === 4);
    expect(key).to.be.undefined;
  });
});
