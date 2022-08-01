const assertEqual = require("././assertEqual");

const tail = (arr) => {
  let tailArray = [];
  for (let i = 1; i < arr.length; i++) {
    tailArray.push(arr[i]);
  }
  return tailArray;
};

module.exports = tail;