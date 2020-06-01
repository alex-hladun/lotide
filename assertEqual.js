const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    return true;
  } else {
    return false;
    // console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
  // console.assert(actual === expected,"🛑🛑🛑" + actual + " !== " + expected);
};

module.exports = assertEqual;