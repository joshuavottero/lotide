
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

// make function that returns a array with items removed based of a sccond array
const without = function(items, itemsToRemove) {
  // make an array to store items on item array that are not also on the to be removed array
  let goodItems = [];
  // make a loop that goes through all the items in the item array
  for (const item of items) {
    // make a flag called isGood and set it to true
    let isGood = true;
    // make a loop to go through all the itemsToRemove array
    for (const badItem of itemsToRemove) {
      // if item not also in badItem add it to goodItems array
      if (item === badItem) {
        // if item is found in badItem set isGood flag to false
        isGood = false;
      }
    }
    // if isGood is still true push to good Items
    if (isGood) {
      goodItems.push(item);
    }
    
  }
  // return goodItems that has all bad items removed
  return goodItems;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2], [1, 2]), []);

// checking to make sure pasesed array is not changed
let words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;




