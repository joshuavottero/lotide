
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// make function findKeyByValue
// finds the first key in a object with the given value undefined if not found
const findKeyByValue = function(items, value) {
  const itemKeys = Object.keys(items);
  //search through items of the array
  for (let i = 0; i < itemKeys.length; i++) {
    // if key has value return key
    if (items[itemKeys[i]] === value) {
      return itemKeys[i];
    }
  }
  return undefined;
};
const keySet1 = {
  a: 2,
  b: 3
};

assertEqual(findKeyByValue(keySet1, 3), "b");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);
const empty = {};
assertEqual(findKeyByValue(empty, undefined), undefined);
assertEqual(findKeyByValue(empty, "not empty"), undefined);
module.exports = findKeyByValue;


