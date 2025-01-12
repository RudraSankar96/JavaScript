// Factorial: Write a for loop to calculate the factorial of a given number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).

let n=5;
let fact=1;
for( let i=n; i>=1; i--){
    fact= fact*i;
}
console.log(fact);