function first(callback) {
    console.log("First Function");
    callback();
}

function second() {
    console.log("Second Function");
}

first(second);