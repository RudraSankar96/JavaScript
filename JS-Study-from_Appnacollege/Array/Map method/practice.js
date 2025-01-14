// You are given an array of numbers. Write a JavaScript function that uses the map method to perform the following tasks:

// Multiply each number in the array by 2.
// Convert the resulting numbers to strings prefixed with the word "Value: ".
// Return the new array.

let arr=[10,20,30,40,50];

const result= arr.map(val =>'value:'+ (val*2));
console.log(result);

    
// When using an arrow function with a single expression, you can omit the curly braces {} and the return keyword. However, if you use curly braces, you must explicitly use the return keyword to return a value.

let numbers=[2,3,4,5,6];
const result2=numbers.map((number)=>{
    return "Value:" + (number*2)
});
console.log(result2);