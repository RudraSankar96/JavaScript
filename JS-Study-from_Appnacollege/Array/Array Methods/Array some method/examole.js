// Array some() Method
// The Array some() method checks if at least one element of the array satisfies the condition implemented by the provided function.

// Example: To demonstrate the use of the Array some() method.
// JavaScript to illustrate
// lastIndexOf() method

function isGreaterThan5(element, index, array) {
    return element > 5;
}

function func() {
    // Original array
    let array = [2, 5, 8, 1, 4];

    // Checking for condition in array
    let value = array.some(isGreaterThan5);

    console.log(value);
}

func();



