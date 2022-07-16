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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((obj) => obj.name);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((obj) => obj.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((obj) => obj.sex);
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let peopleNameWithJOrP = peopleName.filter((name) => {
  if (name.startsWith("J") || name.startsWith("P")) {
    return 1;
  }
});
console.log(peopleNameWithJOrP);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let startsWithAOrC = peopleName.filter((name) => {
  if (name.startsWith("A") || name.startsWith("C")) {
    return 1;
  } else {
    return 0;
  }
});
let nameLength = startsWithAOrC.map((name) => name.length);
console.log(nameLength);

// Log all the filtered male ('M') in persons array
let filterMale = persons.filter((person) => person.sex == "M");
console.log(filterMale);

// Log all the filtered female ('F') in persons array
let filterFemale = persons.filter((person) => person.sex == "F");
console.log(filterFemale);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterFemaleName = persons.filter((person) => {
  return (
    person.sex == "F" &&
    (person.name.startsWith("C") || person.name.startsWith("J"))
  );
});
console.log(filterFemaleName);

// Log all the even numbers from peopleGrade array
let evenGrade = peopleGrade.filter((grade) => grade % 2 === 0);
console.log(evenGrade);

// Find the first name that starts with 'J' in persons array and log the object
let nameWithJ = persons.find((obj) => obj.name.startsWith("J"));
console.log(nameWithJ);

// Find the first name that starts with 'P' in persons array and log the object
let nameWithP = persons.find((obj) => obj.name.startsWith("P"));
console.log(nameWithP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let nameSpecific = persons.find(
  (obj) => obj.name.startsWith("J") && obj.grade > 10 && obj.sex === "F"
);
console.log(nameSpecific);

// Filter all the female from persons array and store in femalePersons array
let females = persons.filter((obj) => obj.sex === "F");
let femalePersons = females.map((obj) => obj.name);
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let males = persons.filter((obj) => obj.sex === "M");
let malePersons = males.map((obj) => obj.name);
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, obj) => acc + obj.grade, 0);
console.log(gradeTotal);

// Find the average grade

let averageGrade = gradeTotal / peopleGrade.length;
console.log(averageGrade);

// Find the average grade of male
let maleGradeSum = filterMale.reduce((acc, obj) => acc + obj.grade, 0);
let maleAverageGrade = maleGradeSum / filterMale.length;
console.log(maleAverageGrade);

// Find the average grade of female
let femaleGradeSum = filterFemale.reduce((acc, obj) => acc + obj.grade, 0);
let femaleAverageGrade = femaleGradeSum / filterFemale.length;
console.log(femaleAverageGrade);

// Find the highest grade
let highestGrade = persons.reduce((acc, obj) => {
  if (obj.grade > acc) {
    acc = obj.grade;
  }
  return acc;
}, 0);
console.log(highestGrade);

// Find the highest grade in male
let highestGradeMale = filterMale.reduce((acc, obj) => {
  if (obj.grade > acc) {
    acc = obj.grade;
  }
  return acc;
}, 0);
console.log(highestGradeMale);

// Find the highest grade in female
let highestGradeFemale = filterFemale.reduce((acc, obj) => {
  if (obj.grade > acc) {
    acc = obj.grade;
  }
  return acc;
}, 0);
console.log(highestGradeFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJOrP = persons.filter(
  (obj) => obj.name.startsWith("J") || obj.name.startsWith("P")
);
let highestGradeJOrP = nameWithJOrP.reduce((acc, obj) => {
  if (obj.grade > acc) {
    acc = obj.grade;
  }
  return acc;
}, 0);
console.log(highestGradeJOrP);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
//Yes, the elements of people grade changed

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);
console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
console.log(peopleName);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
