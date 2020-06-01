const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle function", () => {
  it("Should return [2,3] when given array [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("Should return [3] when given array [1,2,3,4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("Should return [] when given empty array.", () => {
    assert.deepEqual(middle([]), []);
  });
  it("Should return empty array when given array of 2 elements.", () => {
    assert.deepEqual(middle([2, 3]), []);
  });
  it("Should return empty array when given array of 1 element.", () => {
    assert.deepEqual(middle([2]), []);
  });
});