const assert = require("chai").assert;

function add(x, y) {
  return x + y;
}

describe("add", function () {
  it("should add two numbers.", function () {
    assert.equal(add(1, 2), 3);
  });
});
