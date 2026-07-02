let promise = new Promise(function(resolve) {
    resolve(80);
});

promise
.then(function(mark) {
    console.log("Original Marks:", mark);
    return mark + 10;
})
.then(function(mark) {
    console.log("Grace Marks Added:", mark);
});

