let paymentSuccess = true;

let payment = new Promise(function (resolve, reject) {
  if (paymentSuccess) {
    resolve("Payment Successful");
  } else {
    reject("Payment Failed");
  }
});

payment
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("Thank you for visiting.");
  });
