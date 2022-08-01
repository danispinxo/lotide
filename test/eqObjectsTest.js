const assert = require("chai").assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true when given two equal objects in different orders", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual((eqObjects(ab, ba)), true);
  });

  it("returns false when given two unequal objects", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual((eqObjects(ab, abc)), false);
  });

  it("returns true when comparing two equal objects with arrays as values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual((eqObjects(cd, dc)), true);
  });

  it("returns false when comparing two unequal objects with arrays as values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual((eqObjects(cd, cd2)), false);
  });

  it("returns true when comparing two equal objects with objects as values", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false when comparing two unequal objects with objects as values", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false when comparing two unequal objects with objects as values and different numbers of keys/values", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});
