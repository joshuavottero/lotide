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

const letterPositions = function(sentence) {
  const results = {};
  let letterElement = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter.toLowerCase()]) {
        results[letter.toLowerCase()].push(letterElement);
      } else {
        results[letter.toLowerCase()] = [letterElement];
      }
    }
    letterElement++;
  }

  return results;
};

console.log("tests for (SOS)");
const result1 = letterPositions("SOS");

assertArraysEqual(result1["s"],[0, 2]);
assertArraysEqual(result1["o"],[1]);

console.log("tests for (Try This ty)");
const result2 = letterPositions("Try This ty");

assertArraysEqual(result2["t"],[0, 4, 9]);
assertArraysEqual(result2["r"],[1]);
assertArraysEqual(result2["y"],[2, 10]);
assertArraysEqual(result2["h"],[5]);
assertArraysEqual(result2["i"],[6]);
assertArraysEqual(result2["s"],[7]);

console.log("tests for (hello)");
const result3 = letterPositions("Hello");
assertArraysEqual(result3["h"],[0]);
assertArraysEqual(result3["e"],[1]);
assertArraysEqual(result3["l"],[2, 3]);
assertArraysEqual(result3["o"],[4]);
module.exports = letterPositions;

