let promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Data Loaded");
  }, 3000);
});

promise.then(function (result) {
  console.log(result);
});

