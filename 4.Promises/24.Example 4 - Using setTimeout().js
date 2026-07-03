let p1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 1");
  }, 1000);
});

let p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 2");
  }, 2000);
});

let p3 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Task 3");
  }, 3000);
});

Promise.all([p1, p2, p3]).then(function (result) {
  console.log(result);
});
