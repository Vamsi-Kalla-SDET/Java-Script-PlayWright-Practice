// Create three Promises returning  Apple,Banana,Orange

let p1 = Promise.resolve("Apple");
let p2 = Promise.resolve("Banana");
let p3 = Promise.resolve("Orange");

Promise.all([p1, p2, p3]).then(function (result) {
  console.log(result);
});