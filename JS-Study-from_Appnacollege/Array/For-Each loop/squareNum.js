// for a given array of numbers print the square of each value using foreach loop.


let arr=[2,3,4,5];
arr.forEach((num)=>{
console.log(num*num);
});

// output is 4
//           9
//           16
//           25

// other way
 let int=[50,80,90,60];
 let printSquare=(num)=>{
      console.log(num*num);
 };
 int.forEach(printSquare);
 