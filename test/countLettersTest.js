const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {

  it("returns a full object for 'Dani'", () => {
    assert.deepEqual(countLetters('Dani'), { d: 1, a: 1, n:1, i: 1 });
  });

});
