// Methods define the behavior of a class.

class Calculator {

    add(a, b) {

        return a + b;

    }

    subtract(a, b) {

        return a - b;

    }

}

let calc = new Calculator();

console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));