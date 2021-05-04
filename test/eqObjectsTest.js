const { expect } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const result = eqObjects(ab, ba);
    expect(result).to.be.true;
  });
  
  it('should return true for { a: "1", b: "2" }, { a: "1", b: "2", c: "3" }', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const result = eqObjects(ab, abc);
    expect(result).to.be.false;
    
  });
  
  it('should return true for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const result = eqObjects(cd, dc);
    expect(result).to.be.true;
    
  });
  it('should return true for { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4]', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const result = eqObjects(cd, cd2);
    expect(result).to.be.false;
    
  });
});

