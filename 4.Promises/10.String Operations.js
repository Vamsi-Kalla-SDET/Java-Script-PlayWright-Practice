let promise = new Promise(function(resolve) {
    resolve("JavaScript");
});

promise
.then(function(str) {
    return str.toUpperCase();
})
.then(function(str) {
    console.log(str);
});

