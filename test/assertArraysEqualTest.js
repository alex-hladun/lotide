const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("Should return false when given un-equal arrays", () => {
    assert.strictEqual(assertArraysEqual([4, 3, 2], [3, 2, 3]), false);
  });
  it("Should return true for 2 equal arrays", () => {
    assert.strictEqual(assertArraysEqual([4, 3, 2], [4, 3, 2]), true);
  });
});