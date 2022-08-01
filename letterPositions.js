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

module.exports = letterPositions;