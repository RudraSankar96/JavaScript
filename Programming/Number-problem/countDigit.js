//121=3

function countDigit(n){
    let count=0;
    while( n !== 0){
        count ++; 
        n = Math.floor(n / 10);
        
    
    }
    return count 
    
}
let answer= countDigit(30045); // Answer is-: 3+0+0+4+5=12
console.log(answer);
