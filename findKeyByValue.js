const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const findKeyByValue = function(list, key) {
  for (let item in list) {
    if (list[item] === key) {
      return item;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const capitalCities = {
  Alberta: "Calgary",
  "British Columbia": "Victoria",
  Saskatchewan: "Regina",
  Ontario: "Ottawa",
  Manitoba: "Winnipeg"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(capitalCities, "Calgary"), "Alberta");
assertEqual(findKeyByValue(capitalCities, "Winnipeg"), "Manitoba");