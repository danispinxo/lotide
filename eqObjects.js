const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  for (let key1 in object1) {
    for (let key2 in object2) {
      if (!object2[key1] || !object1[key2]) {
        return false;
      }
      if (Array.isArray(object1[key1]) || Array.isArray(object2[key2])) {
        if (!eqArrays(object1[key1], object2[key1])) {
          return false;
        } 
      } else if (typeof object1[key1] === "object" || typeof object2[key2] === "object") {
        if (!eqObjects(object1[key1], object2[key2])) {
          return false;
        } 
      } else {
        if (object2[key1] !== object1[key1] || object1[key2] !== object2[key2]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;