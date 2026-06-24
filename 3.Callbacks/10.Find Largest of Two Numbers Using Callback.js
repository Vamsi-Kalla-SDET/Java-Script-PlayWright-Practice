function findLargest(a, b, callback) {
    let largest = a > b ? a : b;
    callback(largest);
}

findLargest(20, 15, function(result) {
    console.log("Largest =", result);
});