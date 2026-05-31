
let employee = {
    id: 101,
    name: "Vamsi",
    role: "QA Engineer"
};

for (let key in employee) {
    console.log(key);

}


// Print Values
for (let key in employee) {
     console.log(employee[key]);
}

// Print Key and Value Together
for (let key in employee) {
    console.log(key + " : " + employee[key]);
}
