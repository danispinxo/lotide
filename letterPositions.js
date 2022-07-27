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

const letterPositions = function(str) {
  let lowerCaseString = str.toLowerCase();
  let sentence = "";

  for (let letter of lowerCaseString) {
    if (letter !== " ") {
      sentence += letter;
    }
  }

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]].push(i);
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("dude").d, [0, 2]);
assertArraysEqual(letterPositions("Dani is coding").d, [0,8]);