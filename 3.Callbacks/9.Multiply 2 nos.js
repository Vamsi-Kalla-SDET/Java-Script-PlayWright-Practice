// Multiply Two Numbers

function mulNumbers(num1, num2, callback) {
  let mul = num1 * num2;
  callback(mul);
}

mulNumbers(8, 9, function (result) {
  console.log("The Product is: " + result);
});
