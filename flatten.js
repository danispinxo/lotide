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

module.exports = flatten;