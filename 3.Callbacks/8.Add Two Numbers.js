// Add Two Numbers

// 1. Define the function that accepts numbers and a callback
function addNumbers(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum); // 2. Pass the result to the callback function
}

// 3. Call the function and define what the callback should do
addNumbers(12, 8, function (result) {
  console.log("The sum is: " + result);
});

function add(a, b) {
  let sum = a + b;
  console.log(sum);
}
add(5, 7);
