let p1 = Promise.resolve("Java");

let p2 = Promise.reject("Python Failed");

let p3 = Promise.resolve("JavaScript");

Promise.allSettled([p1, p2, p3]).then(function (result) {
  console.log(result);
});

