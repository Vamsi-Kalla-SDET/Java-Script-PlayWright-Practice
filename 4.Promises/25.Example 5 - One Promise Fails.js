let p1 = Promise.resolve("HTML");

let p2 = Promise.reject("CSS Failed");

let p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])

  .then(function (result) {
    console.log(result);
  })

  .catch(function (error) {
    console.log(error);
  });


  