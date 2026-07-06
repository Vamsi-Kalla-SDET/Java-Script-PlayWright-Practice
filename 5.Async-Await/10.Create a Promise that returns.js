// Welcome

async function welcome() {
    return "Welcome";
}

welcome().then(function(result) {
    console.log(result);
});

// await

async function welcome() {
    return "Welcome";
}

async function display() {
    const result = await welcome();
    console.log(result);
}

display();