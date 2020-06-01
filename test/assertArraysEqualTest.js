const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

assertEqual(assertArraysEqual([4, 3, 2], [3, 2, 3]), false);
assertEqual(assertArraysEqual([4, 3, 2], [4, 3, 2]), true);