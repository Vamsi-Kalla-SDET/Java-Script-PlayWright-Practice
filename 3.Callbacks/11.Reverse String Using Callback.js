// Reverse String Using Callback

function reverseString(str, callback) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  callback(rev);
}

reverseString("hello", function (result) {
  console.log(result);
});
