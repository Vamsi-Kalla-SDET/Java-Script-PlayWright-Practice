function checkEvenOdd(number) {
  return new Promise((resolve, reject) => {
    // Check if the input is actually a valid number
    if (typeof number !== 'number' || Number.isNaN(number)) {
      reject("Error: Please provide a valid number.");
      return;
    }

    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number.`);
    }
  });
}

// --- How to consume the Promise ---

// Example 1: Testing an Even Number
checkEvenOdd(42)
  .then((message) => console.log("Success:", message))
  .catch((error) => console.error("Failed:", error));
// Output: Success: 42 is an even number.

// Example 2: Testing an Odd Number
checkEvenOdd(7)
  .then((message) => console.log("Success:", message))
  .catch((error) => console.error("Failed:", error));
// Output: Failed: 7 is an odd number.

