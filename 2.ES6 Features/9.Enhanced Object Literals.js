let name = "Vamsi";
let role = "QA Engineer";

let employee = {
  name,
  role,
};

console.log(employee);

// Program 1: Student Object

let studentName = "Rahul";
let age = 22;
let course = "JavaScript";

let student = {
    studentName,
    age,
    course
};

console.log(student);


// Program 2: Product Object

let productName = "Laptop";
let price = 50000;

let product = {
    productName,
    price
};

console.log(product);

// Program 3: Calculator Object

let calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));

// Program 4: Employee Object with Method

let name = "Vamsi";
let role = "QA Engineer";

let employee = {
    name,
    role,

    showDetails() {
        console.log(this.name);
        console.log(this.role);
    }
};

employee.showDetails();

// Program 5: Dynamic Product Details

let key = "price";

let product = {
    productName: "Mobile",
    [key]: 20000
};

console.log(product);

