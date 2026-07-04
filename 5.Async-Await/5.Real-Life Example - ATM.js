function checkBalance() {
  return Promise.resolve(10000);
}

function withdraw(amount) {
  return Promise.resolve(amount);
}

async function atm() {
  let balance = await checkBalance();

  console.log(balance);

  let money = await withdraw(2000);

  console.log(money);
}

atm();



