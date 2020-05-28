const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
    return false;
  } else {
    for (let i = 0; i <= actual.length - 1; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
        return false;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    return true;
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.slice(1,2)), ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

