let balance = 5000;

let withdraw = new Promise(function (resolve, reject) {
  if (balance >= 2000) {
    resolve("Money Withdrawn");
  } else {
    reject("Insufficient Balance");
  }
});

withdraw
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("Collect your card.");
  });
