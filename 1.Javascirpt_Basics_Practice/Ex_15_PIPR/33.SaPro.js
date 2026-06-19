// ============================================================
//  JavaScript Practice Programs
//  Source: Handwritten notes — 20 programs across 4 categories
//  How to run: node js_practice_programs.js
// ============================================================


// ============================================================
//  SECTION 1: ARRAY PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 1. Highest & Lowest Number from Array
// -----------------------------------------------------------
let a1 = [10, 20, 50, 5, 55];
var high = a1[0];
var low  = a1[0];

for (let i = 0; i < a1.length; i++) {
  if (a1[i] > high) high = a1[i];
  if (a1[i] < low)  low  = a1[i];
}
console.log("1. Highest:", high); // 55
console.log("1. Lowest :", low);  // 5


// -----------------------------------------------------------
// 2. Find Missing Number from Array
// -----------------------------------------------------------
let a2   = [1, 2, 3, 5];
let sum  = 0;
let sum2 = 0;

for (let i = 0; i < a2.length; i++) sum += a2[i];
for (let i = 0; i <= 5; i++)        sum2 += i;

console.log("2. Missing number:", sum2 - sum); // 4


// -----------------------------------------------------------
// 3. Largest of Three Numbers
// -----------------------------------------------------------
let x = 10, y = 20, z = 30;

if (x >= y && x >= z)      console.log("3. Largest:", x);
else if (y >= x && y >= z) console.log("3. Largest:", y);
else                        console.log("3. Largest:", z); // 30


// ============================================================
//  SECTION 2: NUMBER PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 4. Reverse a Number
// -----------------------------------------------------------
let n4  = 12345;
let rev = 0;

while (n4 > 0) {
  let digit = n4 % 10;
  rev = rev * 10 + digit;
  n4  = Math.floor(n4 / 10);
}
console.log("4. Reversed number:", rev); // 54321


// -----------------------------------------------------------
// 5. Reverse a Negative Number
// -----------------------------------------------------------
let n5   = -12345;
let sign = Math.sign(n5);
let abs  = Math.abs(n5);
let rev5 = 0;

while (abs > 0) {
  rev5 = rev5 * 10 + (abs % 10);
  abs  = Math.floor(abs / 10);
}
console.log("5. Reversed negative:", rev5 * sign); // -54321


// -----------------------------------------------------------
// 6. Palindrome Number Check
// -----------------------------------------------------------
let n6  = 12321;
let n6a = n6;
let r6  = 0;

while (n6a > 0) {
  r6  = r6 * 10 + (n6a % 10);
  n6a = Math.floor(n6a / 10);
}
console.log("6. Palindrome number:", n6 === r6 ? "Yes" : "No"); // Yes


// -----------------------------------------------------------
// 7. Count Digits in a Number
// -----------------------------------------------------------
let n7    = 12456;
let count = 0;

while (n7 > 0) {
  count++;
  n7 = Math.floor(n7 / 10);
}
console.log("7. Digit count:", count); // 5


// -----------------------------------------------------------
// 8. Even & Odd Digits from a Number
// -----------------------------------------------------------
let n8   = 1213456;
let even = 0;
let odd  = 0;

while (n8 > 0) {
  let d = n8 % 10;
  if (d % 2 === 0) even++;
  else             odd++;
  n8 = Math.floor(n8 / 10);
}
console.log("8. Even digits:", even, "| Odd digits:", odd);


// -----------------------------------------------------------
// 9. Sum of Digits in a Number
// -----------------------------------------------------------
let n9   = 1234;
let sum9 = 0;

while (n9 > 0) {
  sum9 += n9 % 10;
  n9    = Math.floor(n9 / 10);
}
console.log("9. Sum of digits:", sum9); // 10


// -----------------------------------------------------------
// 10. Prime Number Check
// -----------------------------------------------------------
let n10    = 7;
let count10 = 0;

for (let i = 1; i <= n10; i++) {
  if (n10 % i === 0) count10++;
}
console.log("10. Prime?", count10 === 2 ? "Yes" : "No"); // Yes


// -----------------------------------------------------------
// 11. Factorial of a Number
// -----------------------------------------------------------
let n11   = 5;
let fact  = 1;

for (let i = 1; i <= n11; i++) {
  fact = fact * i;
}
console.log("11. Factorial:", fact); // 120


// ============================================================
//  SECTION 3: LOGIC / SERIES PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 12. Fibonacci Series (up to nth term)
// -----------------------------------------------------------
let n12 = 8;
let fa  = 0;
let fb  = 1;

process.stdout.write("12. Fibonacci: " + fa + " " + fb + " ");
for (let i = 2; i < n12; i++) {
  let fc = fa + fb;
  fa = fb;
  fb = fc;
  process.stdout.write(fc + " ");
}
console.log();


// -----------------------------------------------------------
// 13. Palindrome String Check
// -----------------------------------------------------------
let s13  = "madam";
let rev13 = s13.split("").reverse().join("");

console.log("13. Palindrome string?", s13 === rev13 ? "Yes" : "No"); // Yes


// -----------------------------------------------------------
// 14. Largest of Three (Extra — same category as logic)
// -----------------------------------------------------------
// Already covered in #3 above


// ============================================================
//  SECTION 4: STRING PROGRAMS
// ============================================================

// -----------------------------------------------------------
// 15. Reverse a String — Method 1 (Array approach)
// -----------------------------------------------------------
let s15 = "Hello";
let rev15 = s15.split("").reverse().join("");
console.log("15. Reversed string (method 1):", rev15); // olleH


// -----------------------------------------------------------
// 16. Reverse a String — Method 2 (Loop approach)
// -----------------------------------------------------------
let s16  = "Hello";
let rev16 = "";

for (let i = s16.length - 1; i >= 0; i--) {
  rev16 += s16[i];
}
console.log("16. Reversed string (method 2):", rev16); // olleH


// -----------------------------------------------------------
// 17. Reverse a Number using String
// -----------------------------------------------------------
let a17 = 12345;
let str17 = a17.toString();
let rev17 = str17.split("").reverse().join("");
console.log("17. Reversed number (string):", rev17); // 54321


// -----------------------------------------------------------
// 18. Remove Spaces from String
// -----------------------------------------------------------
let s18 = "sachin kal";
s18 = s18.replace(/\s+/g, "");
console.log("18. Remove spaces:", s18); // sachinkal


// -----------------------------------------------------------
// 19. Reverse Each Word in a String
// -----------------------------------------------------------
let s19 = "sachin kal";
let r19 = s19.split(" ").map(m => m.split("").reverse().join("")).join(" ");
console.log("19. Reverse each word:", r19); // nihcas lak


// -----------------------------------------------------------
// 20. Remove Duplicate Characters from String
// -----------------------------------------------------------
let s20 = "sachins";
let w20 = "";

for (let i = 0; i < s20.length; i++) {
  if (!w20.includes(s20[i])) w20 += s20[i];
}
console.log("20. Remove duplicates:", w20); // sachin


// -----------------------------------------------------------
// 21. Capitalise First Letter of Each Word
// -----------------------------------------------------------
let s21 = "sachin sk";
let p21 = s21.split(" ").map(m => m[0].toUpperCase() + m.slice(1)).join(" ");
console.log("21. Capitalise words:", p21); // Sachin Sk


// -----------------------------------------------------------
// 22. Substring Present Check
// -----------------------------------------------------------
let s22 = "sa ka";
let p22 = s22.includes("sa");
console.log("22. Substring 'sa' present?", p22); // true


// ============================================================
//  END OF PROGRAMS
//  Next steps:
//  - Try changing input values and re-run with: node js_practice_programs.js
//  - Try solving each without looking at the code
//  - Key Playwright-relevant topics: loops, arrays, string methods
// ============================================================