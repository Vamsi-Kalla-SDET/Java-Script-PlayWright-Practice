let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Network Error");
  }, 1000);
});

let p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Success");
  }, 3000);
});

Promise.race([p1, p2]).catch(function (error) {
  console.log(error);
});

// Even though p2 succeeds later, the race is already over.
