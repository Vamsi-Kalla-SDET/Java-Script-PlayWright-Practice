// -------------------------------------------Example 1

// Function Definition

function greet(name) {
    console.log("Hello " + name);
}

// Function Receiving Callback

function processUser(callback) {
    callback("Vamsi");
}
processUser(greet);

// -------------------------------------------
// Callback example 2:

// The Callback Function
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// The Higher-Order Function
function processUser(username, callback) {
    console.log("Validating user...");
    // Executing the callback function that was passed in
    callback(username); 
}

// Passing sayHello as an argument to processUser
processUser("Alice", sayHello);


// -------------------------------------------
// Example 3

function myFunc(val){
    console.log(val(), 'Practiced Programs Yesterday');
}
function callBack(){
    console.log('I am callback function message');
    return 'Vamsi';
}
myFunc(callBack);




