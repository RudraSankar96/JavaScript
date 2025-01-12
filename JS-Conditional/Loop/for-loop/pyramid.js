// Pattern Printing: Use a for loop to print a pyramid pattern of stars:

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        // Print spaces
        let spaces = " ".repeat(rows - i);

        // Print stars
        let stars = "*".repeat(2 * i - 1);

        // Combine spaces and stars
        console.log(spaces + stars);
    }
}

// Example: Print a pyramid with 5 rows
printPyramid(5);    //function call itself

// outout is  
//      *
//     ***
//    *****
//   *******
//  *********