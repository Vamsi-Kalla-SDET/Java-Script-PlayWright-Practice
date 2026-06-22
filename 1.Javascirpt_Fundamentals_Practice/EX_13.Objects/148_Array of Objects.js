// Practice Task

let employees = [
    { id: 101, name: "Vamsi", role: "QA" },
    { id: 102, name: "John", role: "Developer" },
    { id: 103, name: "Sam", role: "Manager" }
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " - " + employees[i].role);

}

// Small Improvement: You can also write it using for...of: 
// This is often easier to read when you don't need the index.

for (let employee of employees) {
    console.log(employee.name + " - " + employee.role);
}