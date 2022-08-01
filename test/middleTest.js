const assert = require("chai").assert;
const middle = require("../middle.js");

describe("#middle", () => {

  it("returns [] when given [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] when given [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] when given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [3] when given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] when given [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] when given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
