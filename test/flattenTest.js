const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {

  it("should return a flattened array of numbers", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("should return a flattened array of strings", () => {
    assert.deepEqual(flatten(["chocolate", "candy", ["gummy bears", "jujubes", "gummy worms"], "lollipops", ["toothbrush", "raisins"]]), ["chocolate", "candy", "gummy bears", "jujubes", "gummy worms", "lollipops", "toothbrush", "raisins"]);
  });  

});
