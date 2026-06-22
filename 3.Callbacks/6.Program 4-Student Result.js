function displayResult(result) {
    console.log(result);
}

function calculateMarks(m1, m2, m3, callback) {

    let total = m1 + m2 + m3;

    callback(total);
}

calculateMarks(80,90,70,displayResult);