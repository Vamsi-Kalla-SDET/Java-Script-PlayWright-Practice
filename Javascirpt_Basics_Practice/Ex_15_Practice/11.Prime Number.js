// A prime number is a number greater than 1 that is divisible only by 1 and itself.

// Prime: 2, 3, 5, 7, 11,33
// Not Prime: 4, 6, 8, 9, 10

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


// Print Prime Numbers from 1 to 20

for (let num = 2; num <= 20; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

