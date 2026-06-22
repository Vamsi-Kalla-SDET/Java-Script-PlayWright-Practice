// Create an Object

let person = {
  name: "Medhasri",
  age: 2,
  gender: "Female",
};
console.log(person);

// Access Object Values - Dot Notation

console.log(person.name);
console.log(person.age);
console.log(person.gender);

// Access Object Values - Bracket Notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);

// Update Existing Value
person.age = 3;
console.log(person);

// Add New Property
person.city = "eluru";
console.log(person);

// Delete Property
delete person.city;
console.log(person);

