// ASSERTION FUNCTIONS
const eqArrays = function(actual, expected) {
  let match = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      match = false;
    }
  }
  return match;
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion Passed! ${array1} and ${array2} are equal!`);
  } else {
    console.log(`👎 Assertion Failed. ${array1} and ${array2} are not equal.`);
  }
};

// ACTUAL FUNCTION

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

// TEST CASES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);