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
    return  "Value:" + (number*2)
});
console.log(result2);

// Another example

let a = [2, 5, 6, 3, 8, 9];
// Using map to transform elements
let res = a.map(function (val, index) {
    return { key: index, value: val * val };
})

console.log(res)

// 15. JavaScript Array map() Method
// The map() method creates an array by calling a specific function on each element present in the parent array. 
// It is a non-mutating method.

let x = [4, 9, 16, 25];
let sub = x.map(geeks);

function geeks() {
    return x.map(Math.sqrt);
}
console.log(sub);