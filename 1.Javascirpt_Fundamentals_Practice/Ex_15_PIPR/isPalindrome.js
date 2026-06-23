function isPalindrome(str) {
    // 1. Lowercase the string and remove non-alphanumeric characters (optional but recommended)
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // 3. Compare them
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("APPLE"));   // false
console.log(isPalindrome("radar")); // true

