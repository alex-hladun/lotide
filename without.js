const assertArraysEqual = function (actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
    return false
  } else {
    for (let i = 0; i <= actual.length - 1; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
        return false
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    return true
  }
};

const eqArrays = function (actual, expected) {
  for (let i = 0; i <= expected.length - 1; i++) {
    if (actual[i] !== expected[i]) {
      return false
      // return `🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`;
    }
  }
  return true
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const without = function (array, values) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    let flag = 0;
    for (let j = 0; j <= values.length - 1; j++) {
      if (assertEqual(array[i], values[j])) {
        flag += 1;
      }
    }
    if (flag === 0) {
      newArray.push(array[i]);
    }
  }
return newArray;
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(without(["1", "2", "3"], ["1", "2", "3"]))
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))
console.log(without([1,2,3,4,5,6], [6,4,2]))
