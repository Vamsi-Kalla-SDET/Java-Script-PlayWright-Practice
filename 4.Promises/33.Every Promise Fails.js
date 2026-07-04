let p1 = Promise.reject("Error 1");

let p2 = Promise.reject("Error 2");

Promise.any([p1, p2]).catch(function (error) {
  console.log(error);
});

//AggregateError - An AggregateError contains all rejection reasons because none of the Promises succeeded.

