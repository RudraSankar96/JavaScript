// Print all array number using map method.

let arr=[56,67,78,89,90];
arr.map((val)=>{
    console.log(val);
});

// print the squre of the array numbwr and store it into new array.
let arr1=[56,67,78,89,90];
let newArr = arr1.map((val)=>{
    return val*val;
});
console.log(newArr);