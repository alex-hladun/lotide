const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑" + actual + " !== " + expected);
  }
  // console.assert(actual === expected,"🛑🛑🛑" + actual + " !== " + expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("wth", "wth");

