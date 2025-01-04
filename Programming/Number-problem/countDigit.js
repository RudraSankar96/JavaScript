//121=3

function countDigit(n){
    let count=0;
    while( n !== 0){
        count ++; 
        n = Math.floor(n / 10);
        
    
    }
    return count 
    
}
let answer= countDigit(30045); 
console.log(answer);