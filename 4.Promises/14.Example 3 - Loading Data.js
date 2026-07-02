let promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Data Loaded");
  }, 2000);
});

console.log("Loading...");

promise
  .then(function (result) {
    console.log(result);
  })
  .finally(function () {
    console.log("Hide Loading Spinner");
  });
