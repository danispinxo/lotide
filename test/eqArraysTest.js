const assert = require("chai").assert;
const { expect } = require("chai");
const eqArrays = require("../eqArrays");

describe("#eqArray", () => {

  it("should return true when given two equal arrays of numbers", () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });

  it("should return false when given two unequal arrays of numbers", () => {
    expect(eqArrays([1, 2, 3], [3, 2, 1])).to.be.false;
  });

  it("should return true when given two equal arrays of strings", () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.be.true;
  });

  it("should return false when given to unequal mixed arrays", () => {
    expect(eqArrays(["1", "2", 3], [1, "2", 3])).to.be.false;
  });

  it("should return false when arrays are the same at the start, but the second is longer", () => {
    expect(eqArrays(["2", 3], ["2", 3, 4])).to.be.false;
  });

  it("should return true on equal nested arrays", () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
  });

  it("should return false on unequal nested arrays", () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3, 4], [4]])).to.be.false;
  });

  it("should return false if one value is not an array", () => {
    expect(eqArrays([[2, 3], [4]], 4)).to.be.false;
  });
  
});
