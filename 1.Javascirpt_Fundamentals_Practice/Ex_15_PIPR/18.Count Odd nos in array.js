let arr = [10, 16, 20, 25, 30, 35];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        count++;
    }
}

console.log("Odd numbers count:", count);
