const assert = require("chai").assert;
const describe = require("chai").describe;
const it = require("chai").it;

function add(x, y) {
  return x + y;
}

describe("add", function () {
  it("should add two numbers", function () {
    assert.equal(add(1, 2), 3);
  });
});
