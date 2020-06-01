const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word.slice(1,2)), ['r', 'o', 'o', 'a', 'o']);
// assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

