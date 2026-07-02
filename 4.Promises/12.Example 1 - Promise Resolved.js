let promise = new Promise(function (resolve) {
  resolve("Task Completed");
});

promise
  .then(function (result) {
    console.log(result);
  })
  .finally(function () {
    console.log("Promise Finished");
  });
