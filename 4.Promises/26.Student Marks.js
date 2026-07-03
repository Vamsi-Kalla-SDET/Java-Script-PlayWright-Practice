let math = Promise.resolve(80);
let science = Promise.resolve(75);
let english = Promise.resolve(90);

Promise.all([math, science, english])

  .then(function (result) {
    console.log(result);
  });
