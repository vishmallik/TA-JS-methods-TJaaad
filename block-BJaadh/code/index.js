// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called", "sentance"));
console.log(strings);

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'
strings.forEach((element) => {
  if (element.includes("is")) {
    console.log(element);
  }
});

// - Find all the words that contain 'is' use string method 'indexOf'
allIs = strings.filter((ele) => {
  return ele.indexOf("is") !== -1;
});
console.log(allIs);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((element) => element % 3 === 0));

// -  Sort Array from smallest to largest
let sortedStrings = [...strings].sort();
console.log(sortedStrings);

let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
console.log(
  numbers.reduce((acc, num) => {
    if (num > acc) {
      acc = num;
    }
    return acc;
  }, numbers[0])
);

// - Find longest string in strings
console.log(
  strings.reduce((acc, num) => {
    if (num.length > acc) {
      acc = num;
    }
    return acc;
  }, strings[0].length)
);

// - Find all the even numbers
let evenNumbers = numbers.filter((ele) => {
  if (ele % 2 === 0) {
    return ele;
  }
});
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter((ele) => {
  if (ele % 2 !== 0) {
    return ele;
  }
});
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)
strings.unshift("This");
console.log(strings);

// - Make a subset of numbers array [18,9,7,11]
let subsetNumbers = numbers.slice(3, 7);
console.log(subsetNumbers);

// - Make a subset of strings array ['a','collection']
let subsetStrings = strings.slice(2, 4);
console.log(subsetStrings);

// - Replace 12 & 18 with 1221 and 1881
numbers = numbers.map((ele) => {
  if (ele === 12) {
    return (ele = 1221);
  } else if (ele === 18) {
    return (ele = 1881);
  } else {
    return ele;
  }
});
console.log(numbers);

// - Replace words in strings array with the length of the word
strings = strings.map((ele) => {
  return ele.length;
});
console.log(strings);

// - Find the sum of the length of words using above question
let sumOfLengths = strings.reduce((acc, ele) => {
  return acc + ele;
}, 0);
console.log(sumOfLengths);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
for (index of customers) {
  if (index.firstname.startsWith("J")) {
    console.log(index.firstname);
  }
}

//alternative
startsWithJ = customers.filter((ele) => ele.firstname.startsWith("J"));

console.log(startsWithJ);

// - Create new array with only first name
firstName = customers.map((ele) => {
  return ele.firstname;
});
console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")
fullName = customers.map((ele) => {
  return ele.firstname.concat(" " + ele.lastname);
});
console.log(fullName);

// - Sort the array created above alphabetically
console.log(fullName.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
vowelInFirstName = customers.filter((ele) => {
  if (
    ele.firstname.includes("a") ||
    ele.firstname.includes("e") ||
    ele.firstname.includes("i") ||
    ele.firstname.includes("o") ||
    ele.firstname.includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(vowelInFirstName);
