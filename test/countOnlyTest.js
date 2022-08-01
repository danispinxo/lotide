const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {

  it("should return a count if the name appears in the count object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima","Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Jason"], 1);
  });
  
  it("should return a count if the name appears in the count object more than once", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima","Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Fang"], 2);
  });

  it("should return undefined if the name does not appear in the list", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima","Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result1["Karima"], undefined);
  });

});
