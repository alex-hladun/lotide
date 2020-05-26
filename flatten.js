// const assertArraysEqual = function(actual, expected) {
//   if (actual.length !== expected.length) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
//     return false;
//   } else {
//     for (let i = 0; i <= actual.length - 1; i++) {
//       if (actual[i] !== expected[i]) {
//         console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
//         return false;
//       }
//     }
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//     return true;
//   }
// };

// const eqArrays = function(actual, expected) {
//   if (actual.length !== expected.length) {
//     return false;
//     // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
//   } else {
//     for (let i = 0; i <= actual.length - 1; i++) {
//       if (actual[i] !== expected[i]) {
//         return false;
//         // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
//       }
//     }
//     return true;
//   }
// };


const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].constructor === Array) {
      for (let j = 0; j <= array[i].length - 1; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
