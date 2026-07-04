function fetchData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data Received");
    }, 2000);
  });
}

async function display() {
  console.log("Loading...");

  let result = await fetchData();

  console.log(result);
}

display();

