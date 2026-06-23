/*  
Destructuring is one of the most important ES6 features for Playwright, API testing, React, Node.js, and interviews.
Destructuring means:
Taking values from an Array or Object and storing them directly into variables.



*/

// 1. Array Destructuring

let fruits = ["Apple", "Mango", "Orange"];

let [a, b, c] = fruits;

console.log(a);
console.log(b);
console.log(c);

// Program 1: Print Student Details

let student = ["Vamsi", 25, "QA Engineer"];

let [name, age, role] = student;

console.log(name);
console.log(age);
console.log(role);


// Program 2: Skip Values
let nums = [10, 20, 30, 40];

let [a, , c] = nums;

console.log(a);
console.log(c);

// means skip that position.

// Program 3: First and Remaining Values

let nums = [10, 20, 30, 40, 50];

let [first, ...remaining] = nums;

console.log(first);
console.log(remaining);

// Program 4: Swap Two Numbers

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// 
// swap two numbers usin array destrucutring.
let a = 10;
let b = 35;
[a,b] = [b,a];
console.log(a);
console.log(b);

// using temp
let x = 0;
let y = 2;
let temp = x;
x = y;
y = temp;
console.log(x);
console.log(y);

console.log(object);