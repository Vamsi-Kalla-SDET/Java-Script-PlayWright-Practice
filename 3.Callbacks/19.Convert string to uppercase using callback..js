// Callback function
function toUpperCase(str) {
    return str.toUpperCase();
}

// Main function
function processString(input, callback) {
    let result = callback(input);
    console.log(result);
}

// Function call
processString("hello world", toUpperCase);

