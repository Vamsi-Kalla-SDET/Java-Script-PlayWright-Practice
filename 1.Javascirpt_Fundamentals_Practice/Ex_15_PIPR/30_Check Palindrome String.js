// Check Palindrome String
// A palindrome reads the same forward and backward.
// madam
// racecar
// level

let str = "level";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

