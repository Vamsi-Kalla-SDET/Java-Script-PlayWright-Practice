// String Length
let str = "JavaScript", str1 = "Vamsi";
console.log(str.length);
console.log(str1.length);

//toUpperCase()
let str = "hello";
console.log(str.toUpperCase());

// toLowerCase()
let str = "HELLO";
console.log(str.toLowerCase());

// charAt()
let str = "Sachin";
console.log(str.charAt(0));
console.log(str.charAt(3));


// indexOf()
let str = "JavaScript";
console.log(str.indexOf("S"));
console.log(str.indexOf("a"));

// Includes
let str = "JavaScript";
console.log(str.includes("Script"));
console.log(str.includes("Python"));

// startsWith()
let str = "JavaScript";
console.log(str.startsWith("Java"));
console.log(str.startsWith("lava"));

// endsWith()
let str = "JavaScript";
console.log(str.endsWith("Script"));

// slice() - Extracts part of a string.
let str = "JavaScript";
console.log(str.slice(0, 4));

// substring() - Similar to slice.
let str = "JavaScript";
console.log(str.substring(4, 10));

// replace() - Replaces first occurrence.
let str = "I like Java";
console.log(str.replace("Java", "JavaScript"));

// replaceAll() - Replaces all occurrences.
let str = "Hi Hi Hi";
console.log(str.replaceAll("Hi", "Hello"));

// trim() - Removes spaces from start and end.
let str = "   Sachin   ";
console.log(str.trim());

//  split() - Converts a string into an array.
let str = "Apple,Banana,Mango";
console.log(str.split(","));


// concat() - Joins strings.
let first = "Hello";
let second = " Sachin";
console.log(first.concat(second));

//  Repeat() - Repeats a string.
let str = "Hi ";
console.log(str.repeat(3));

