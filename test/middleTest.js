const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle" ,() => {
  it("return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([2]), []);
  });

  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});

// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);