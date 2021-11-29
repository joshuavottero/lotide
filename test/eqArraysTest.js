const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

// TEST CODE
assertEqual(eqArray([1, 2, 3],[1, 2, 3]), true);
assertEqual(eqArray([1, 2, 3],[3, 2, 1]), false);
assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArray([1, 2, 3],[1, 2, 3]), true);