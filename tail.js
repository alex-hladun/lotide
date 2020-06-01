const tail = function(array) {
  if (array[0]) {
    return array.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;
