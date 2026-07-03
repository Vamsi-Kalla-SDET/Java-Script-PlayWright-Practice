// Check whether a number is even or odd. Program Finished

let no = 57;

let result = new Promise(function (resolve, reject) {
  if (no % 2 == 0) {
    resolve("Even no");
  } else {
    reject("Odd no");
  }
});

result
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("Program Finished");
  });


