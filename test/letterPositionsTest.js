const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#countOnly", () => {

  it("should return a single index for a single letter", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("should return an array if the letter appears more than once", () => {
    assert.deepEqual(letterPositions("dude").d, [0, 2]);
  });

  it("should return an array if the letter appears more than once and the string contains more than one word", () => {
    assert.deepEqual(letterPositions("Dani is coding").d, [0, 8]);
  });
  

});