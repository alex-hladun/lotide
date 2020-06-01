
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    // console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
    return false;
  } else {
    for (let i = 0; i <= actual.length - 1; i++) {
      if (actual[i] !== expected[i]) {
        // console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
        return false;
      }
    }
    // console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    return true;
  }
};

module.exports = assertArraysEqual;