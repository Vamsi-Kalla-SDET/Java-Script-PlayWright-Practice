let m1 = Promise.resolve(80);
let m2 = Promise.resolve(70);
let m3 = Promise.resolve(90);

Promise.all([m1, m2, m3])

  .then(function (result) {
    let avg = (result[0] + result[1] + result[2]) / 3;

    console.log(avg);
  });
