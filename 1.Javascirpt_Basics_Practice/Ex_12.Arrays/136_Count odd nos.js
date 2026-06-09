// Count odd nos
let arr = [10, 15, 22, 7, 8, 13];
let count = 0;

for (let num of arr) {
    if (num % 2 !== 0) {
        count++;
    }
}

console.log("Odd numbers count:", count);

