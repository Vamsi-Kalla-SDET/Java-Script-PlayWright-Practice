// Function that checks for a palindrome and passes the outcome to a callback
function checkPalindrome(str, callback) {
    if (typeof str !== 'string') {
        callback(new Error("Input must be a valid string"), null);
        return;
    }

    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Determine if it matches the original cleaned string
    const isPalindrome = cleanStr === reversedStr;

    // Pass null for the error, and the boolean result to the callback
    callback(null, isPalindrome);
}

// Example 1: Valid Palindrome Case
checkPalindrome("A man, a plan, a canal: Panama", (error, isPalindrome) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(`Is palindrome? ${isPalindrome}`); // Output: Is palindrome? true
    }
});

// Example 2: Non-Palindrome Case
checkPalindrome("hello", (error, isPalindrome) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(`Is palindrome? ${isPalindrome}`); // Output: Is palindrome? false
    }
});