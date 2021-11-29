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
    }
  }
  // if code gets here then they are the same
  return true;
};

//Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let i = 0; i < keys1.length; i++) {
      
      // findout if both props are arrays or not
      const isArray1 = Array.isArray(object1[keys1[i]]);
      const isArray2 = Array.isArray(object2[keys1[i]]);

      // if one prop does not have a array and one does the objects are not the same;
      if ((isArray1 !== isArray2)) {
        return false;

      }
      
      // check value of keys1[i] for both objects
      // if object 2 does not have a key from object 1 object2 will return undefind

      // if both props have arrays check array for difference
      if ((isArray1 === true && isArray2 === true)) {
        // if difference found return false
        if (!eqArray(object1[keys1[i]],object2[keys1[i]])) {
          return false;
        }
      } else {
        // if props are not arrays check for a value difference
        if (object1[keys1[i]] !== object2[keys1[i]]) {
          return false;
        }
      }
      
    }
    // return true if all is good
    return true;
  }
  return false;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);

const aa = {c: [], b: ["2", 3]};
const bb = {a: ["2", 3], c: []};
assertEqual(eqObjects(aa, bb), false);

const cc = {c: "1", d: []};
const dd = {d: [], c: "1"};
assertEqual(eqObjects(cc, dd), true);

module.exports = eqObjects;