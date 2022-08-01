const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {

  it("should return an altered array by the criteria provided", () => {
    const words = ["Dani", "Jesse", "Karma", "Smalex", "Lisa", "Noodle", "Theo", "Abby"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["D", "J", "K", "S", "L", "N", "T", "A"]);
  });

});
