let str = "JavaScript";
console.log(str.length);

// Convert string to uppercase
let str = "hello";
console.log(str.toUpperCase());

// Check whether string contains "QA"
let str = "QA Automation Engineer";
console.log(str.includes("QA"));

// 4. Reverse a string
let str = "smile";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i);
}

console.log(rev); 

