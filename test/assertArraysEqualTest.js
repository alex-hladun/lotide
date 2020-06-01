const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const middle = require('../middle');

assertEqual(assertArraysEqual([4, 3, 2], [3, 2, 3]), false);
assertEqual(assertArraysEqual([4, 3, 2], [4, 3, 2]), true);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([6, 9]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);