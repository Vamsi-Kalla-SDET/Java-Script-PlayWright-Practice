// Copy an Array

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);

// Merge arrays

let a = [1,2];
let b = [3,4];

let c = [...a, ...b];

console.log(c);


// The Spread Operator (...) expands an array, object, or string into individual elements.

// 3. Add Elements to an Array

const numbers = [2, 3, 4];

const result = [1, ...numbers, 5];

console.log(result);

// 4. Find Largest Number in Array
const nums = [10, 25, 8, 40, 15];

console.log(Math.max(...nums));


// Copy an Object

const person = {
    name: "John",
    age: 25
};

const copy = { ...person };

console.log(copy);


// Update Object Values

const user = {
    name: "John",
    age: 25
};

const updatedUser = {
    ...user,
    age: 30
};

console.log(updatedUser);


