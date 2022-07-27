const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let lowerCaseString = str.toLowerCase();
  let countObject = {};

  for (let letter of lowerCaseString) {
    if (!countObject[letter]) {
      countObject[letter] = 1;
    } else {
      countObject[letter]++;
    }
  }

  return countObject;
};

