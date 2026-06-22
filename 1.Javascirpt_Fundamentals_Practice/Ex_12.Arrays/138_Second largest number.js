// Second largest number
let arr = [10, 5, 8, 20];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
