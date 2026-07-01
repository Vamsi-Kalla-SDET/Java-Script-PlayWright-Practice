let promise = new Promise(function (resolve, reject) {
  let completed = true;

  if (completed) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
