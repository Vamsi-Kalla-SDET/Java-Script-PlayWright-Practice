// Check whether a number is even or odd. Program Finished

let age = 21;

let result = new Promise(function (resolve, reject) {
  if (age >= 18) {
    resolve("Eligible to vote");
  } else {
    reject("Not Eligible to vote");
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
    console.log("Thank you");
  });


