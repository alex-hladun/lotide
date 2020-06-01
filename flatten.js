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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, [2, [3, [4]], 5]]));
