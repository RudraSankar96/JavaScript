//  Reverse print the array

let arr=[1,2,3,4,5,6];
for(i= arr.length-1;i>=0;i--){
console.log(arr[i]);
}

//find the largest nuber in array
let num1=[3,7,2,9,4];
let max= 0;
for(i=0;i<=num1.length;i++){
    if(num1[i]>max){
       max=num1[i]
    }
    console.log(max);
}
