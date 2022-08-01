const assert = require("chai").assert;
const { expect } = require("chai");
const findKey = require("../findKey");

describe("#findKey", () => {

  it("should return the first key that meets the criteria provided", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    expect(result).to.equal("noma");
  });

  it("should return undefined if no key meets the criteria provided", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 5);
    expect(result).to.be.undefined;
  });

});

