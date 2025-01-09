//   Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string

function countVowels(str){
    
     let count=0;
     for( let char of str){
        if( char==="a" ||
            char==="e" || 
            char==="i" || 
            char==="o" || 
            char==="u") 
            {
            count++;
        }
     }
   return count;
}
let input="Edouard and Louie aim to acquire an exquisite audio studio"
console.log(countVowels(input));