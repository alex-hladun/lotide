const findKey = function(object, callback) {
  for (const x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
};

// const object = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

module.exports = findKey;

// assertEqual(findKey(object, x => x.stars === 2), "noma");
// assertEqual(findKey(object, x => x.stars > 3), undefined);
// assertEqual(findKey(object, x => x.stars === 3), "Akaleri");