const {expect} = require('chai');
const middle = require('../middle');

describe('', () => {
  // //Return empty array, if less than 3 elements
  it('Return empty array, if less than 3 elements', () => {
    let result = middle([1]);
    expect(result).to.be.deep.equal([]);
    expect(result).to.be.lengthOf(0);

    result = middle([1, 2]);
    expect(result).to.be.deep.equal([]);
    expect(result).to.be.lengthOf(0);
  });
  
  // //Return single element, if odd number of elements
  it('Return single element, if odd number of elements', () => {
    let result = middle([1, 2, 3]);
    expect(result).to.be.deep.equal([2]);
    expect(result).to.be.lengthOf(1);

    result = middle([1, 2, 3, 4, 5]);
    expect(result).to.be.deep.equal([3]);
    expect(result).to.be.lengthOf(1);
  });
  
  // //Return two elements, if even number of elements
  it('Return two elements, if even number of elements', () => {
    let result = middle([1, 2, 3, 4]);
    expect(result).to.be.deep.equal([2, 3]);
    expect(result).to.be.lengthOf(2);

    result = middle([1, 2, 3, 4, 5, 6]);
    expect(result).to.be.deep.equal([3, 4]);
    expect(result).to.be.lengthOf(2);
  });
});
