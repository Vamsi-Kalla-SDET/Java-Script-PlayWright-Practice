function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function start() {
  console.log("Start");

  await delay(3000);

  console.log("End");
}

start();
