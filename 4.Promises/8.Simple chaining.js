let promise = new Promise(function(resolve) {
    resolve(10);
});

promise
.then(function(num) {
    console.log("Step 1:", num);
    return num + 5;
})
.then(function(num) {
    console.log("Step 2:", num);
    return num * 2;
})
.then(function(num) {
    console.log("Step 3:", num);
});

