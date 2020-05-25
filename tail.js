const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  if (array[0]) {
    return array.slice(1);
  } else {
    return [];
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(tail([]));
console.log(tail(["OneWordInArray"]));
// no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail([5,6,7]), 5);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail([]), undefined);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");