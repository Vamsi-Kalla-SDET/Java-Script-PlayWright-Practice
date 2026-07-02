let promise = new Promise(function(resolve) {
    resolve(5);
});

promise
.then(function(num) {
    return num * num;
})
.then(function(square) {
    console.log("Square =", square);
});