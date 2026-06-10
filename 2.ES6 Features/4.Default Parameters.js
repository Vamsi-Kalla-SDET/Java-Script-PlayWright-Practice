function greet(name = "Guest") {
    console.log(name);
}

greet();

// Default parameters allow you to assign a value to a function parameter if no argument is passed.

// Multiply Two Numbers
const multiply = (a = 1, b = 1) => a * b;

console.log(multiply());      // 1
console.log(multiply(5));     // 5
console.log(multiply(5, 4));  // 20

// Greeting User
const greet = (name = "Guest") => {
    return "Welcome " + name;
};

console.log(greet());
console.log(greet("Vamc"));

// Largest of Two Numbers

const largest = (a = 0, b = 0) => {
    return a > b ? a : b;
};

console.log(largest());
console.log(largest(10));
console.log(largest(10, 20));

// Calculate Discount

const calculatePrice = (price, discount = 10) => {
    return price - (price * discount / 100);
};

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 20));

// CRTE

const createUser = (
    name = "Unknown",
    role = "User"
) => {
    console.log(name + " - " + role);
};

createUser();
createUser("John");
createUser("John", "Admin");
