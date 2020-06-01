const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#EqArrays Function", () => {
  it("Should return true when given two equal arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("Should return true when given two equal arrays", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("Should return false when given two non-equal arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("Should return true when given two equal arrays with nested arrays", () => {
    let arrA = [4, [5, 6, [5, 4, [4, 3, 2, [1]]]]];
    let arrB = [4, [5, 6, [5, 4, [4, 3, 2, [1]]]]];
    assert.strictEqual(eqArrays(arrA, arrB), true);
  });
});