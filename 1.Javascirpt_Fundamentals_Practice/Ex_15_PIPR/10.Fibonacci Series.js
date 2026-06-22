// A Fibonacci Series is a sequence of numbers where each number is the sum of the previous two numbers.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Using Recursion

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

// 
function fibonacci(n) {
  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series.slice(0, n);
}

console.log(fibonacci(10)); 

// Fibonacci Series is a sequence of numbers in which each number is obtained by adding the two preceding numbers, starting from 0 and 1.