// Function Definition

function greet(name) {
    console.log("Hello " + name);
}

// Function Receiving Callback

function processUser(callback) {
    callback("Vamsi");
}
processUser(greet);

