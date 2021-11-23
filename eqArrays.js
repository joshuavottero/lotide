// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArray = function(items1, items2) {
  // if arrays are differnt lengths they cant be the same
  if (items1.length !== items2.length) {
    return false;
  }
  for (let i = 0; i < items1.length; i++) {
    if (items1[i] !== items2[i]) {
      // if any element is not the same the arrays are differnt
      return false;
    }
  }
  // if code gets here then they are the same
  return true;
};

// TEST CODE
console.log(eqArray([1, 2, 3],[1, 2, 3]));
console.log(eqArray([1, 2, 3],[3, 2, 1]));
console.log(eqArray(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArray(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArray([1, 2, 3],[1, 2, 3]), true);