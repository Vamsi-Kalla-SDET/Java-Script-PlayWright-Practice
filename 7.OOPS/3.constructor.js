// Constructor

// A constructor initializes object data when the object is created.

class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}

let student1 = new Student("Vamsi", 33);

console.log(student1.name);
console.log(student1.age);

// Whenever new Student(...) is called, the constructor runs automatically.

