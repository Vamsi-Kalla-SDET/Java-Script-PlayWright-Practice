
// Callback Approach

function square(num, callback) {
    let result = num * num;
    callback(result);
}

square(10, function(result) {
    console.log(result);
});

// Synchronous Approach

let a = 10;
let sq = a * a;
console.log(sq);