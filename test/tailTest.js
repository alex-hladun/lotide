const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// console.log(tail([]));
// console.log(tail(["OneWordInArray"]));
// no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail([5,6,7]), [6, 7]);
assertArraysEqual(tail([5,6,7]), [6, 7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
// assertEqual(tail([]), undefined);