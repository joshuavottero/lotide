
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

module.exports = middle;

