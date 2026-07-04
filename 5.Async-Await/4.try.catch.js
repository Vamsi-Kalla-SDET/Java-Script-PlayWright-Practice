function login() {
  return Promise.reject("Invalid Password");
}

async function test() {
  try {
    let result = await login();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

test();

