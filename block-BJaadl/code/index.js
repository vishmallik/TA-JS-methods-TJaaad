let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = function (arr) {
  return words.reduce((acc, word) => {
    if (acc.length < word.length) {
      acc = word;
    }
    return acc;
  });
};
console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((word) => word.length);
console.log(wordsLength);

// - Create a new array that only contains word with atleast one vowel.
let vowel = words.filter(vowelFilter);

function vowelFilter(word) {
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  ) {
    return word;
  }
}
console.log(vowel);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let notStartsWithVowel = words.filter(vowelStartFilter);

function vowelStartFilter(word) {
  if (
    word.startsWith("a") ||
    word.startsWith("e") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u")
  ) {
    return 0;
  } else {
    return word;
  }
}
console.log(notStartsWithVowel);

// - Create a new array that contianse words not ending with vowel
let notEndsWithVowel = words.filter(vowelEndFilter);

function vowelEndFilter(word) {
  if (
    word.endsWith("a") ||
    word.endsWith("e") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u")
  ) {
    return 0;
  } else {
    return word;
  }
}
console.log(notEndsWithVowel);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = function (arr) {
  return arr.reduce(sum, 0);
};
function sum(acc, num) {
  return acc + num;
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.map(arr);

function arr(num) {
  return num * 3;
}
console.log(multipliedBy3);

// - Create a new array that contains only even numbers
let even = numbers.filter(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(even);
// - Create  a new array that contains only odd numbers.
let odd = numbers.filter(function (num) {
  if (num % 2 !== 0) {
    return num;
  }
});

console.log(odd);

// - Create a new array that should have true for even number and false for odd numbers.
let filteredNumber = numbers.map((num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredNumber);

// - Sort the above number in assending order.
console.log([...numbers].sort((a, b) => a - b));

// - Does sort mutate the original array?
//yes, sort mutates the original array

// - Find the sum of the numbers in the array.
console.log(numbers.reduce((acc, num) => acc + num, 0));
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = function (arr) {
  return arr.reduce(sum) / arr.length;
};
function sum(acc, num) {
  return acc + num;
}
console.log(averageNumbers(numbers));

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = function (arr) {
  return arr.reduce(avgLength, 0) / arr.length;
};
function avgLength(acc, word) {
  return acc + word.length;
}
console.log(averageWordLength(strings));
