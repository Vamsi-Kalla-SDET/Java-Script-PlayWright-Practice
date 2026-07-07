// Abstraction (Framework Level) - Abstraction means using something without needing to know its internal implementation.

class CoffeeMachine {
  makeCoffee() {
    console.log("Coffee is ready");
  }
}

let machine = new CoffeeMachine();

machine.makeCoffee();

// You don't need to know how the machine heats water, grinds beans, or brews coffee. You simply call makeCoffee().

