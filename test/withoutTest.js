const assert = require("chai").assert;
const { expect } = require("chai");
const without = require("../without");

describe("#without", () => {

  it("should return an array of strings with the supplied item removed", () => {
    const original = ["Yes", "We", "Have", "No", "Bananas"];
    const removed = ["No"];
    expect(without(original, removed)).to.deep.equal(["Yes", "We", "Have", "Bananas"]);
  });

  it("should return an empty array if supplied an empty array", () => {
    expect(without([], [])).to.deep.equal([]);
  });

});
