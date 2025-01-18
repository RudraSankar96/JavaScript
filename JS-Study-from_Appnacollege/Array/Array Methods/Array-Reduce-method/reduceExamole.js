// Array reduce() Method
// The array reduce() method reduces an array to a single value by executing a provided function for each value from left to right.

// Example: Use the reduce() method to accumulate values, such as subtracting numbers.

// Original array
let numbers = [88, 50, 25, 10];

// Performing reduce method
let sub = numbers.reduce(geeks);

function geeks(total, num) {
    return total - num;
}

console.log(sub);