let student = {
    id: 1,
    name: "Sam",
    marks: 90
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
