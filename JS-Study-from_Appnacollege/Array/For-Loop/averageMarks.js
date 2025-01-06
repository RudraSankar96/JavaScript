// For a given array with  marks of student [85,90,45,65,70,35] find the average mark of class.

let marks=[85,90,45,65,70,35];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg=sum / marks.length;
console.log(avg,'is the total average of student') //The average of student is 65