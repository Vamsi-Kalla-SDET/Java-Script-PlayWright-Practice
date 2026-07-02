let marks = 70;

let result = new Promise(function (resolve, reject) {
  if (marks >= 35) {
    resolve("Student Passed");
  } else {
    reject("Student Failed");
  }
});

result
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  });


  