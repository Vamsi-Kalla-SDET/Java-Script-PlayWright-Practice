
// --------------------------------------------
// Method 1: Using a Loop
// --------------------------------------------

let str = "madam";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str.charAt(i);
}

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// --------------------------------------------
// Method 2: Using Two Pointers (Interview Favorite)
// --------------------------------------------

let str = "madam";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "Palindrome" : "Not Palindrome");

// --------------------------------------------
// Function version
// --------------------------------------------
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str.charAt(i);
    }

    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
