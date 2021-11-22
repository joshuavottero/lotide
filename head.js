const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(items) {
  if (items.length === 0) {
    return undefined;
  }
  return items[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
assertEqual(head(["Hello","Lighthouse","Labs"]), "Lighthouse");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), "Hello");

