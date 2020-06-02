const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;

// letterPositions("lighthouse in the house");