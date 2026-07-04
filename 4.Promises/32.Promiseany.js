// Example 1
let p1 = Promise.reject("Server 1 Failed");

let p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Server 2");
  }, 2000);
});

let p3 = Promise.reject("Server 3 Failed");

Promise.any([p1, p2, p3]).then(function (result) {
  console.log(result);
});


