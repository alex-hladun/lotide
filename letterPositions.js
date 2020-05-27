const assertArraysEqual = function (actual, expected) {
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

const eqArrays = function (actual, expected) {
  for (let i = 0; i <= expected.length - 1; i++) {
    if (actual[i] !== expected[i]) {
      return false;
      // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
    }
  }
  return true;
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");