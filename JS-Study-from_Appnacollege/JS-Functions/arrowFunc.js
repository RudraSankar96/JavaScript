// we can multiply anything using arrow function.

function mul(a,b){
    return a*b;
}
const arrowMul=(a,b)=>{
   console.log(a*b);
}
let a=45; b=67;
let result= mul(a,b);
console.log('Multiplication of a & b is',result);
// Output is :- Multiplication of a & b is 3015

//  Do substraction using arrow method
function sub(x,y){
    return x-y;
}
const arrSub=(x,y)=>{
    return x-y;
}
let x=900; y=899;
let val= arrSub(x,y);
console.log('The rsult of substraction is',val);
// Output is :- The rsult of substraction is 1

// addition using arrow function
function add(c,d){
    return c+d;
}
const arrAdd=(c,d)=>{
    return c+d;
}
let c=76890; d=9870564;
let val2= arrAdd(c,d);
console.log(val2);