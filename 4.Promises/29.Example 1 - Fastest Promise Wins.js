let p1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 1");
  }, 3000);
});

let p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 2");
  }, 1000);
});

let p3 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 3");
  }, 2000);
});

Promise.race([p1, p2, p3]).then(function (result) {
  console.log(result);
});
