let marks = 85;

let result = new Promise(function (resolve, reject) {
  if (marks >= 35) {
    resolve("Pass");
  } else {
    reject("Fail");
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
    console.log("Result Published");
  });
