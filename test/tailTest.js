const {expect} = require('chai');
const tail = require('../tail');

describe('#tail', () => {
  
  //number array test
  it('returns [2, 3] for [1, 2, 3]', () => {
    const result = tail([1,2,3]);
    expect(result).to.deep.equal([2,3]);
    expect(result).to.have.lengthOf(2);
  });

  //string array test
  it('returns ["this", "is", "test"] for ["hi", "this", "is", "test"]', () => {
    const result = tail(['hi','this','is','test']);
    expect(result).to.have.deep.equal(['this','is','test']);
    expect(result).to.have.lengthOf(3);
  });

  // //empty array test
  it('returns 0 for []', () => {
    const  result = tail([]);
    expect(result).to.have.deep.equal([]);
    expect(result).to.have.lengthOf(0);
  });
  
  // //one element array test
  it('returns 0 for ["test"]', () => {
    const result = tail(['test']);
    expect(result).to.have.deep.equal([]);
    expect(result).to.have.lengthOf(0);
  });
});

