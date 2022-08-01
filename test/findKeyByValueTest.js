const assert = require("chai").assert;
const { expect } = require("chai");
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {

  it("should return a key name when given a value that appears in the object", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined when given a value that does not appear in the object", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.be.undefined;
  });


});