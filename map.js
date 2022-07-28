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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["Dani", "Jesse", "Karma", "Smalex", "Lisa", "Noodle", "Theo", "Abby"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["D", "J", "K", "S", "L", "N", "T", "A"]);

const numbers = [5, 4, 3, 2, 1];
const results2 = map(numbers, number => number * 5);
assertArraysEqual(results2, [25, 20, 15, 10, 5]);
