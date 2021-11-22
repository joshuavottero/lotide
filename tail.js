const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(items) {
  let tailArray = [];
  if (items.length > 1) {
    tailArray = items.slice(1);
    return tailArray;
  } else if (items.len === 1) {
    return tailArray;
  } else {
    return tailArray;
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result2 = tail(["hi"]);
assertEqual(result2[0], undefined);

const result3 = tail([]);
assertEqual(result3[0], undefined);