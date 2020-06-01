const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (let key in actual) {
      if (actual[key].constructor === Array) {
        if (actual[key].length !== expected[key].length) {
          console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
          return false;
        }
        for (let i = 0; i <= actual[key].length - 1; i++) {
          if (actual[key][i] !== expected[key][i]) {
            console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
            return false;
          }
        }
      } else if (actual[key] !== expected[key]) {
        console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
        return false;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;

// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b: "2", c: "3"};
// const cd =  {c: "1", d: ["2", 3]};
// const dc = {d: ["2", 3], c: "1"};
// assertObjectsEqual(ab,ba);
// assertObjectsEqual(ab,abc);
// assertObjectsEqual(cd,dc);

// const cd2 = {c: "1", d: ["2", 3, 4]};
// const cd3 = {c: "1", d: [2, 3, 4]};
// const cd4 = {d: [2, 3, 4], c: "1"};
// assertObjectsEqual(cd, cd2);
// assertObjectsEqual(cd3, cd4);