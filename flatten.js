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

const flatten = function(array) {
  let totalArray = [];

  for (let nested of array) {
    if (Array.isArray(nested)) {
      for (let item of nested) {
        totalArray.push(item);
      }
    } else {
      totalArray.push(nested);
    }
  }

  return totalArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["chocolate", "candy", ["gummy bears", "jujubes", "gummy worms"], "lollipops", ["toothbrush", "raisins"]]));