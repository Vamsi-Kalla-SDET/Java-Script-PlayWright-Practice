function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function countdown() {
  for (let i = 5; i >= 1; i--) {
    console.log(i);

    await delay(1000);
  }

  console.log("Go!");
}

countdown();


