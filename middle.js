const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length/2);

  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    middleArray = array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};

module.exports = middle;