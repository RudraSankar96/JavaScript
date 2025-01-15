// Delete an element form the start of a array.

let fruit=['apple','orange','bana','lichi','tomato'];
fruit.shift();
console.log(fruit);
// Output is [ 'orange', 'bana', 'lichi', 'tomato' ] here apple delete.

// 4. JavaScript Array delete Operator
// The delete operator is used to delete the given value which can be an object, array, or anything.

let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
} 

console.log(delete emp.salary); 
console.log(emp);