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

module.exports = countLetters;