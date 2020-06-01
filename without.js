const assertEqual = require('./assertEqual');

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
};

module.exports = without;

// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))
// console.log(without(["1", "2", "3"], ["1", "2", "3"]))
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))
console.log(without([1, 2, 3, 4, 5, 6], [6, 4, 2]))
