// Polymorphism means the same method name behaves differently in different classes.

class Animal {

    sound() {

        console.log("Animal makes a sound");

    }

}

class Dog extends Animal {

    sound() {

        console.log("Dog barks");

    }

}

class Cat extends Animal {

    sound() {

        console.log("Cat meows");

    }

}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();

// Each class provides its own implementation of the sound() method.

