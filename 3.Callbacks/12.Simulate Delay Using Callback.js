// Simulate Delay Using Callback

function fetchData(callback) {
    setTimeout(function() {
        callback("Data received");
    }, 2000);
}

fetchData(function(data) {
    console.log(data);
});

