const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  // check with number array
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  // check with string array
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  // check for one element
  it('returns "one" for ["one"]', ()=> {
    assert.strictEqual(head(["one"]), "one");
  });
  
  // check empty array
  it('returns "undefined" for []', ()=>{
    assert.strictEqual(head([]), undefined);
  });
});