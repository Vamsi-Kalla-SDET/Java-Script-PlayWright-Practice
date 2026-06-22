function showResult(result) {
    console.log(result);
}

function checkEven(num, callback) {

    if(num % 2 === 0) {
        callback("Even");
    }
    else {
        callback("Odd");
    }
}

checkEven(10, showResult);