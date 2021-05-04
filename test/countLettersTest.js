const { expect } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return {L: 2, H: 1} for "LHL"', () => {
    let result = countLetters("LHL");
    expect(result).to.be.deep.equal({L: 2, H: 1});
  });
  it('should return {l:1,i:2,g:1,h:4,t:2,o:2,u:2,s:2,e:3,n:1} for "lighthouse in the house"', () => {
    let result = countLetters("lighthouse in the house");
    expect(result).to.be.deep.equal({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});