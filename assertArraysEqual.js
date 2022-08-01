const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion Passed! ${array1} and ${array2} are equal!`);
  } else {
    console.log(`👎 Assertion Failed. ${array1} and ${array2} are not equal.`);
  }
};

module.exports = assertArraysEqual;