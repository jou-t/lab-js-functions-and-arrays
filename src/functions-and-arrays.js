// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return number1;
  }
}

console.log(maxOfTwoNumbers(7, 4));
console.log(maxOfTwoNumbers(7, 12));
console.log(maxOfTwoNumbers(13, 13));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (!words.length) return null;

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord(words));
console.log(findLongestWord([]));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (!numbers2.length) return 0;
  let sum = 0;
  for (i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  return sum / numbers2.length;
}
console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, word) {
  if (!words2.length) return null;

  return words2.includes(word);
}
console.log(doesWordExist(words2));
console.log(doesWordExist([]));
console.log(doesWordExist(words2, "hello"));
console.log(doesWordExist([], "eating"));
console.log(doesWordExist(words2, "matter"));
