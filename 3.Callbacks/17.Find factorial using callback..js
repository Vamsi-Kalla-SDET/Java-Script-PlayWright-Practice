// Function that calculates the factorial and passes the result to a callback
function getFactorial(num, callback) {
    if (num < 0) {
        callback(new Error("Factorial is not defined for negative numbers"), null);
        return;
    }
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    // Pass null for the error, and the calculated result to the callback
    callback(null, result);
}

// Executing the function with a callback to print the result
getFactorial(5, (error, result) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(`The factorial is: ${result}`); // Output: The factorial is: 120
    }
});

