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