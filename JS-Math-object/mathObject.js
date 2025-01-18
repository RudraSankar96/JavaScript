// JavaScript Math object is used to perform mathematical operations on numbers. All the properties of Math are static and unlike other objects, it does not have a constructor.
// We use Math only on Number data type and not on BigInt
// Example 1: This example uses math object properties to return their values. 

console.log("Math.LN10: " + Math.LN10);
console.log("Math.LOG2E: " + Math.LOG2E);
console.log("Math.Log10E: " + Math.LOG10E);
console.log("Math.SQRT2: " + Math.SQRT2);
console.log("Math.SQRT1_2: " + Math.SQRT1_2);
console.log("Math.LN2: " + Math.LN2);
console.log("Math.E: " + Math.E);
console.log("Math.PI: " + Math.PI);

// Output-:
// Math.LN10: 2.302585092994046
// Math.LOG2E: 1.4426950408889634
// Math.Log10E: 0.4342944819032518
// Math.SQRT2: 1.4142135623730951
// Math.SQRT1_2: 0.7071067811865476
// Math.LN2: 0.6931471805599453
// Math.E: 2.718281828459045
// Math.PI: 3.141592653589793

// Example 2: Math object methods are used in this example. 

console.log("Math.abs(-4.7): " + Math.abs(-4.7)); 
2
console.log("Math.ceil(4.4): " + Math.ceil(4.4)); 
3
console.log("Math.floor(4.7): " + Math.floor(4.7)); 
4
console.log("Math.sin(90 * Math.PI / 180): " + Math.sin(90 * Math.PI / 180)); 
6
console.log("Math.min(0, 150, 30, 20, -8, -200): " + Math.min(0, 150, 30, 20, -8, -200)); 
8
console.log("Math.random(): " + Math.random());

// Output
// Math.abs(-4.7): 4.7
// Math.ceil(4.4): 5
// Math.floor(4.7): 4
// Math.sin(90 * Math.PI / 180): 1
// Math.min(0, 150, 30, 20, -8, -200): -200
// Math.random(): 0.7416861489868538