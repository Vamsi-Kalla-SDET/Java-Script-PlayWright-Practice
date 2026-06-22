function welcome(name) {
  console.log("Welcome " + name);
}

function registerUser(callback) {
  callback("Ram");
}

registerUser(welcome);
