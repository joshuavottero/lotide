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

const findKey = function(array, callback) {
  for (const item in array) {
    console.log(item);
    if (callback(array[item]) === true) {
      //console.log(array[item]);
      return item;
    }
  }
};

const test1 = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

assertEqual(findKey(test1, x => x.stars === 2), "noma");


const test2 = {
  "line1": {nums: [1,2,3]},
  "line2": {nums: [2,3,1]},
  "line3": {nums: [3,1,2]},
};

assertEqual(findKey(test2, x => eqArray(x.nums, [2,3,1])), "line2");

module.exports = findKey;