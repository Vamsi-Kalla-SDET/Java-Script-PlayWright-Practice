let p1 = Promise.resolve(5);
let p2 = Promise.resolve(10);
let p3 = Promise.resolve(15);

Promise.all([p1, p2, p3]).then(function (result) {
  let sum = result[0] + result[1] + result[2];

  console.log(sum);
});

