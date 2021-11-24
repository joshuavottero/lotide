const assertArraysEqual = function(items1, items2) {
  if (eqArray(items1, items2) === true) {
    console.log(`👍Both Arrays are the same: ${items1} === ${items2}`);
  } else {
    console.log(`👎The Arrays are not the same: ${items1} !== ${items2}`);
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
// middle function takes a array an returns the middle element(s)
const middle = function(arr) {
  // if array is less then 3 elements no middle can be found
  let length = arr.length;
  if (length < 3) {
    // return emppty array
    return [];
  }
  // let middle array to store middle elements
  let middleArray = [];
  // check if arr length is ood or even
  if ((length % 2) !== 0) {
    // if odd push one element into the middle array
    middleArray.push(Math.ceil(length / 2));
  } else if ((length % 2) === 0) {
    // if even return the two middle elements
    middleArray.push(Math.ceil(length / 2));
    middleArray.push(Math.ceil((length / 2) + 1));
  } else {
    // else return empty array
    return [];
  }
  // return middle array elements if any
  return middleArray;
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);