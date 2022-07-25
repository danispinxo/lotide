const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  if (arr === []) {
    return "This array is empty!";
  } else {
    return arr[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Jello");
assertEqual(head([5]), 5);
assertEqual(head([]), "NOTHING?");