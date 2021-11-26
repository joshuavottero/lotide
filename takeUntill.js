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

const takeUntil = function(array, callback) {
  const results = [];
  let keys = Object.keys(array);
  let item;
  for (let i = 0; i < array.length; i++) {
    item = array[keys[i]];

    if (callback(item) === true) {
      break;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1,[1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);

const data3 = [true, false, true];
const results3 = takeUntil(data3, x => x === false);
console.log(results3);
assertArraysEqual(results3,[true]);