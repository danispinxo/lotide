const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  let middleArray = [];

  if (array.length === 1 || array.length === 2) {
    middleArray = [];
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
  }

  return middleArray;
};

module.exports = middle;