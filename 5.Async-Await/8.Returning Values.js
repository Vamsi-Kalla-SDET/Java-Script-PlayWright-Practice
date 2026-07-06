async function add(a, b) {
  return a + b;
}

async function test() {
  let sum = await add(5, 6);

  console.log(sum);
}

test();


