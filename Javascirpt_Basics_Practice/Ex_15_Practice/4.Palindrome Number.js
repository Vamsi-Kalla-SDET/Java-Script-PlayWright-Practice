// A Palindrome Number is a number that reads the same forward and backward.

// --------------------------------------------
// Method 1: Using a Loop
// --------------------------------------------
let num = 150;
let originalNum = num;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

if (originalNum === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// --------------------------------------------
// Method 2: Using String (Shorter)
// --------------------------------------------

let num = 121;

let reversed = num.toString().split('').reverse().join('');

if (num.toString() === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
// --------------------------------------------
// Method - 3 using function
// --------------------------------------------
function isPalindrome(num) {
    let originalNum = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversed;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false