// Normal Function

function add(a, b) {
    return a + b;
}
console.log (add(5,6))

// Arrow Function

const add = (a, b) => {
    return a + b;
};
console.log (add(5,8))

// Short Form

const add = (a, b) => a + b;
console.log (add(6,6))


// Sum of two numbers
let a = 5, b = 6;
let sum = a + b;
console.log(sum);

const mul = (a, b) => a * b;
console.log (mul(5,6));
console.log (mul(3,6));

// Largest of two numbers

const largest = (a, b) => {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Both are equal";
    }
};

console.log(largest(10, 20));
console.log(largest(10, 50));

// Square of a number

let  a = 4;
let sq = a * a;
console.log(sq);

const sq = (a) => (a * a);
console.log(sq(5));

