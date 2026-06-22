let employee = {
    id: 101,
    name: "Vamsi",
    role: "QA Engineer"
};

// Print name
console.log(employee.name)

// Print role
console.log(employee.role)

// Change role to "Senior QA Engineer"
employee.role = "Senior QA Engineer"
console.log(employee)

// Add city
employee.city = "Eluru";
console.log(employee)

// Delete city
delete employee.city 
console.log(employee)