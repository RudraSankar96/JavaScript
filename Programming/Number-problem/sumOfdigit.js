// Given a number n. Find the sum of all the digits of n.

// Examples:

// Input: n = 12
// Output: 3
// Explanation: Sum of 12's digits: 1 + 2 = 3
// Input: n = 23
// Output 5
// Explanation: Sum of 23's digits: 2 + 3 = 5

function sumOfDigits(n) {
    let sum=0;
    while( n !== 0){
        let last = n % 10;
        sum= sum+last;
        n=Math.floor(n / 10)
    }
    return sum;
  }
  let answer= sumOfDigits(4567);
  console.log(answer);
  