// Before
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// With ES6
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

// Program 1: Print Array Elements

let numbers = [1, 2, 3, 4, 5];

for (let con of numbers) {
  console.log(con);
}

// Program 2: Find Sum of Array Elements
let ar = [4, 6, 9];
let sum = 0;
for (let bo of ar) {
  sum += bo;
}
console.log(sum);

// Program 3: Find Largest Number

let numbers = [15, 45, 12, 90, 30];

let max = numbers[0];

for(let num of numbers) {
    if(num > max) {
        max = num;
    }
}

console.log(max);

// Program 4: Count Even Numbers

let numbers = [1, 2, 3, 4, 6, 8];

let count = 0;

for(let num of numbers) {
    if(num % 2 === 0) {
        count++;
    }
}

console.log(count);

// Program 5: Print Characters of a String

// A string is iterable, so for...of works on strings too.
let name = "Vamsi";

for(let ch of name) {
    console.log(ch);
}

// Program 6: Count Vowels
let str = "javascript";

let count = 0;

for(let ch of str) {

    if("aeiou".includes(ch)) {
        count++;
    }
}

console.log(count);

// Program 7: Reverse String

let str = "javascript";

let count = 0;

for(let ch of str) {

    if("aeiou".includes(ch)) {
        count++;
    }
}

console.log(count);

