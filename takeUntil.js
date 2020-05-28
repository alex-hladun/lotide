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

const takeUntil = function(array, callback) {
  const results = [];
  for (let x of array) {
    if (!callback(x)) {
      results.push(x);
    } else {
      break;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);


