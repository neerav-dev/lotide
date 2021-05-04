const { expect } = require('chai');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it('Should return an object that represent the stats i.e.{Jason: 1, Fang: 2}', () => {
    expect(result).to.be.deep.equal({Jason: 1, Fang: 2});
  });
});
