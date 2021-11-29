const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1], [1, 2]);
assertArraysEqual(["hi", "there"], ["hi", "there"]);