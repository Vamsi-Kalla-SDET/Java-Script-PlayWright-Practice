login()
  .then(function () {
    console.log("Dashboard Verified");
  })
  .catch(function () {
    console.log("Test Failed");
  })
  .finally(function () {
    console.log("Closing Browser");
  });


//   This is one of the most common real-world uses of .finally().

