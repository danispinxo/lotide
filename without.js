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

const without = function(source, itemsToRemove) {
  let keptItems = [...source];
  let i = 0;

  while (i < keptItems.length) {
    let j = 0;
    while (j < itemsToRemove.length) {
      if (keptItems[i] === itemsToRemove[j]) {
        keptItems.splice(i, 1);
        i--;
        break;
      }
      j++;
    }
    i++;
  }
  return keptItems;
};

const original = ["Yes", "We", "Have", "No", "Bananas"];
const removed = ["No"];
console.log(without(original, removed));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);