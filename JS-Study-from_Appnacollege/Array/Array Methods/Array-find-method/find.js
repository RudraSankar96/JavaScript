// Array find() Method
// The Array find() method is used to get the value of the first element in the array that satisfies the provided condition. It checks all the elements of the array and whichever the first element satisfies the condition is going to print.

// Example: To demonstrate the use of the Array find() method.
// Input array contain some elements.
let array = [10, 20, 30, 40, 50];

// Function (return element > 10).
let found = array.find(function (element) {
    return element > 20;
});

// Printing desired values.
console.log(found);