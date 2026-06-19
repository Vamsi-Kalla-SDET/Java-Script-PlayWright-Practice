// Program 1: Sum of Numbers
function sum(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));


// Program 2: Find Largest Number

function largest(...nums) {
    let max = nums[0];

    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

console.log(largest(10, 50, 20, 90, 40));


// Program 3: Find Smallest Number
function smallest(...nums) {
    let min = nums[0];

    for (let num of nums) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

console.log(smallest(10, 5, 20, 2, 40));


// Program 4: Count Arguments
function countArgs(...values) {
    return values.length;
}

console.log(countArgs(10, 20, 30, 40, 50));

// Program 5: Print All Values
function printValues(...values) {
    for (let value of values) {
        console.log(value);
    }
}

printValues("JavaScript", "Playwright", "API");



// Program 6: Average of Numbers
function average(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum / nums.length;
}

console.log(average(10, 20, 30, 40));

// Program 7: Multiply Numbers
function multiply(...nums) {
    let result = 1;

    for (let num of nums) {
        result *= num;
    }

    return result;
}

console.log(multiply(2, 3, 4));

// Program 8: Separate First Value and Remaining Values

function show(first, ...remaining) {
    console.log("First:", first);
    console.log("Remaining:", remaining);
}

show(10, 20, 30, 40, 50);

// Program 9: Reverse Values
function reverseValues(...values) {
    return values.reverse();
}

console.log(reverseValues(1, 2, 3, 4, 5));

// Program 10: Count Even Numbers
function countEven(...nums) {
    let count = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven(1, 2, 3, 4, 6, 7));



