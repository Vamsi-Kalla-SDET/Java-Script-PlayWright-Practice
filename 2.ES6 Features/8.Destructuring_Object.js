// Employee Details

let employee = {
    id: 101,
    name: "Vamsi",
    role: "QA"
};

let { id, name, role } = employee;

console.log(id);
console.log(name);
console.log(role);


// Program 6: Rename Variables
let person = {
    name: "Vamsi",
    age: 25
};

let { name: userName, age: userAge } = person;

console.log(userName);
console.log(userAge);

// Program 7: Default Values

let person = {
    name: "Vamsi"
};

let { name, age = 30 } = person;

console.log(name);
console.log(age);

// API Response:

let response = {
    status: 200,
    message: "Success",
    data: {
        userId: 101
    }
};


// Without destructuring:
console.log(response.status);
console.log(response.message);

// With destructuring:
let { status, message } = response;
console.log(status);
console.log(message);

