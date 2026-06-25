function arraySum(arr, callback) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    callback(sum);
}

arraySum([10, 20, 30, 40], function(result) {
    console.log(result);
});