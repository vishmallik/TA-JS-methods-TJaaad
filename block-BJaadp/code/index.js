let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let avgGrade =
  persons.reduce((acc, obj) => acc + obj.grade, 0) / persons.length;
console.log(avgGrade);
// Find the average grade of male
let maleAvgGrade =
  persons.reduce((acc, obj) => {
    if (obj.sex === "M") {
      acc = acc + obj.grade;
    }
    return acc;
  }, 0) / persons.length;
console.log(maleAvgGrade);

// Find the average grade of female
let femaleAvgGrade =
  persons.reduce((acc, obj) => {
    if (obj.sex === "F") {
      acc = acc + obj.grade;
    }
    return acc;
  }, 0) / persons.length;
console.log(femaleAvgGrade);

// Find the highest grade
let highestGrade = persons.reduce((acc, obj) => {
  if (obj.grade > acc) {
    acc = obj.grade;
  }
  return acc;
}, 0);
console.log(highestGrade);

// Find the highest grade in male
let maleHighestGrade = persons.reduce((acc, obj) => {
  if (obj.sex === "M") {
    if (obj.grade > acc) {
      acc = obj.grade;
    }
  }
  return acc;
}, 0);
console.log(maleHighestGrade);

// Find the highest grade in female
let femaleHighestGrade = persons.reduce((acc, obj) => {
  if (obj.sex === "F") {
    if (obj.grade > acc) {
      acc = obj.grade;
    }
  }
  return acc;
}, 0);
console.log(femaleHighestGrade);

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradeOfJOrP = persons.reduce((acc, obj) => {
  if (obj.name.startsWith("J") || obj.name.startsWith("P")) {
    if (obj.grade > acc) {
      acc = obj.grade;
    }
  }
  return acc;
}, 0);
console.log(highestGradeOfJOrP);

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((allFruits, fruit) => {
  if (fruit in allFruits) {
    allFruits[fruit]++;
  } else {
    allFruits[fruit] = 1;
  }
  return allFruits;
}, {});
console.log(fruitsObj);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsArr = Object.keys(fruitsObj).reduce((allFruits, fruit) => {
  allFruits = allFruits.concat([[fruit, fruitsObj[fruit]]]);
  return allFruits;
}, []);
console.log(fruitsArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let flat = data.reduce((acc, arr) => {
  return acc.concat(arr);
});
console.log(flat);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let flat2 = flatten(dataTwo);
function flatten(arr2) {
  arr2.reduce((acc, arr) => {
    if (Array.isArray(arr)) {
      return acc.concat(flatten(arr));
    } else {
      return acc.concat(arr);
    }
  }, []);
}
console.log(flat2);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
function increment(num) {
  return num + 1;
}
function double(num) {
  return num * 2;
}
function decrement(num) {
  return num - 1;
}
function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let output = pipeline.reduce((acc, func) => func(acc), 3);
console.log(output);

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
let output2 = pipeline2.reduce((acc, func) => func(acc), 8);
console.log(output2);
