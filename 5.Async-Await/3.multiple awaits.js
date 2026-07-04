function task1() {
  return Promise.resolve("Task 1");
}

function task2() {
  return Promise.resolve("Task 2");
}

function task3() {
  return Promise.resolve("Task 3");
}

async function execute() {
  let r1 = await task1();
  console.log(r1);

  let r2 = await task2();
  console.log(r2);

  let r3 = await task3();
  console.log(r3);
}

execute();



