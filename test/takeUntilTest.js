const assert = require("chai").assert;
const { expect } = require("chai");
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {

  it("should return an array of numbers up until a point, according to the supplied function", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    expect(results1).to.deep.equal([1, 2, 5, 7, 2]);
  });

  it("should return an array of strings up until a point, according to the supplied function", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    expect(results2).to.deep.equal(['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it("should return the full array if the function is never met", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === '!');
    expect(results2).to.deep.equal(['I\'ve', 'been', 'to', 'Hollywood',',', 'I\'ve', 'been', 'to', 'Redwood']);
  });

  it("should return an empty array if supplied an empty array", () => {
    const data3 = [];
    const results2 = takeUntil(data3, x => x === '55');
    expect(results2).to.deep.equal([]);
  });

});
