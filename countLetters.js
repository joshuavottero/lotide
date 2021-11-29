const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

// make function called countLetters
// takes sentence (string) and returns a count of each type of letter
const countLetters = function(sentence) {

  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (letterCount[letter.toLowerCase()]) {
        letterCount[letter.toLowerCase()]++;
      } else {
        letterCount[letter.toLowerCase()] = 1;
      }
    }
  }

  return letterCount;
};

const result1 = countLetters("LHL");

console.log("testing (LHL)");
assertEqual(result1["h"], 1);
assertEqual(result1["l"], 2);


console.log("testing (One More Try)");
const result2 = countLetters("One More try");
assertEqual(result2["o"], 2);
assertEqual(result2["n"], 1);
assertEqual(result2["e"], 2);
assertEqual(result2["m"], 1);
assertEqual(result2["r"], 2);
assertEqual(result2["y"], 1);
assertEqual(result2["t"], 1);
assertEqual(result2[" "], undefined);

module.exports = countLetters;