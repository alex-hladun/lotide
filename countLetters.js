const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
  // console.assert(actual === expected,"🛑🛑🛑" + actual + " !== " + expected);
};

const countLetters = function(string) {
  const countObject = {};

  for (let i = 0; i <= string.length - 1; i++) {
    let char = string[i].toLowerCase();

    if (char !== " ") {
      if (countObject[char]) {
        countObject[char] += 1;
      } else {
        countObject[char] = 1;
      }
    }
  }
  return countObject;
};

console.log(countLetters("Lighthouse in the house"));
console.log(countLetters("The quick brown fox jumped over the red lazy dog"));
