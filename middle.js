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

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
    // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
  } else {
    for (let i = 0; i <= actual.length - 1; i++) {
      if (actual[i] !== expected[i]) {
        return false;
        // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
      }
    }
    return true;
  }
};

const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length/2);

  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    middleArray = array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([6, 9]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);