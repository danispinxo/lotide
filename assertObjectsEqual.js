const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let match = true;

  for (let key1 in object1) {
    for (let key2 in object2) {
      if (
        !object2[key1] ||
        !object1[key2] ||
        object2[key1] !== object1[key1] ||
        object1[key2] !== object2[key2]
      ) {
        match = false;
      }
      if (Array.isArray(object1[key1]) || Array.isArray(object2[key2])) {
        if (eqArrays(object1[key1], object2[key1])) {
          match = true;
        } else {
          match = false;
        }
      }
    }
  }
  return match;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(`👍 Assertion Passed! ${inspect(object1)} and ${inspect(object2)} are equal!`);
  } else {
    console.log(`👎 Assertion Failed. ${inspect(object1)} and ${inspect(object2)} are not equal.`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // should be equal

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // should not be equal

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // should be equal

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // should not be equal