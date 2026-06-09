let str = "Hello World JavaScript";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log("Spaces:", count);