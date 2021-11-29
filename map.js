// define map function returns array based on callback function results

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

const assertArraysEqual = function(items1, items2) {
  if (eqArray(items1, items2) === true) {
    console.log(`👍Both Arrays are the same: ${items1} === ${items2}`);
  } else {
    console.log(`👎The Arrays are not the same: ${items1} !== ${items2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  


  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1,["g", "c", "t", "m", "t"]);

const numbs = [[1, 2, 3], [2, 3, 4] ,[3, 4, 5]];
const results2 = map(numbs, word => word[0]);
console.log(results2);
assertArraysEqual(results2,[1, 2, 3]);

const bools = [[true, false, true], [false, true, false] ,[true, true, true]];
const results3 = map(bools, word => word[0]);
console.log(results3);
assertArraysEqual(results3,[true, false, true]);

const notSoEmptty = [[], [] ,["something"]];
const results4 = map(notSoEmptty, word => word[0]);
console.log(results4);
assertArraysEqual(results4,[undefined, undefined, "something"]);
module.exports = map;
