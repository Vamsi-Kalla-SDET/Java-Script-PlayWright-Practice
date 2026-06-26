function calculator(a, b, operation) {
    operation(a, b);
}

calculator(10, 5, function(x, y) {
    console.log("Addition =", x + y);
});

