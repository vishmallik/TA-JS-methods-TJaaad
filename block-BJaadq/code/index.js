// NOTE: You can not use reduce methods to solve this exercise
console.log(got);
function countAllPeople() {
  let allPeople = 0;
  for (house of got.houses) {
    allPeople += house.people.length;
  }
  return allPeople;
}

function peopleByHouses() {
  let clan = {};
  for (house of got.houses) {
    clan[house.name] = house.people.length;
  }
  return clan;
}

function everyone() {
  // your code goes here
  let everyone = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      everyone = everyone.concat(peoples.name);
    }
  }
  return everyone;
}

function nameWithS() {
  let everyone = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      everyone = everyone.concat(peoples.name);
    }
  }
  return everyone.filter((name) => name.startsWith("S"));
}

function nameWithA() {
  // your code goes here
  let everyone = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      everyone = everyone.concat(peoples.name);
    }
  }
  return everyone.filter((name) => name.startsWith("A"));
}

function surnameWithS() {
  let everyone = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      everyone = everyone.concat(peoples.name);
    }
  }
  return everyone.filter((name) =>
    name.split(" ")[name.split(" ").length - 1].startsWith("S")
  );
}

function surnameWithA() {
  let everyone = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      everyone = everyone.concat(peoples.name);
    }
  }
  return everyone.filter((name) =>
    name.split(" ")[name.split(" ").length - 1].startsWith("A")
  );
}

function peopleNameOfAllHouses() {
  let peopleNameOfAllHouses = {};
  let nameArr = [];
  for (house of got.houses) {
    for (peoples of house.people) {
      peopleNameOfAllHouses[house.name] = nameArr.concat(peoples.name);
    }
  }
  return peopleNameOfAllHouses;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
