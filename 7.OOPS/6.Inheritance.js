// Inheritance - A child class inherits properties and methods from a parent class.

class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

let dog = new Dog();

dog.eat();

dog.bark();


// Dog inherits the eat() method from Animal and also has its own bark() method.

