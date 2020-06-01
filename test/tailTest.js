const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe("#tail function", () => {
  it("Should return [ \" Lighthouse \", \"Labs\"] when given [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
  it("Should return empty array when given a blank array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("Should return [6, 7] when given [3, 6, 7]", () => {
    assert.deepEqual(tail([3, 6, 7]), [6, 7]);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// // console.log(tail(words));
// // console.log(tail([]));
// // console.log(tail(["OneWordInArray"]));
// // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // assertEqual(tail([5,6,7]), [6, 7]);
// assertArraysEqual(tail([5,6,7]), [6, 7]);
// assertArraysEqual();
// // assertEqual(tail([]), undefined);