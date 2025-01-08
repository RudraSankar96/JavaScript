function calculator(a,b,operation){
    if(operation=== "add"){
        return a+b;
    }
    else if( operation === "sub"){
        return a-b;
    }
    else if(operation === "multiply")
    {
        return a*b;
    }
    else if(operation === "division"){
        if(b === 0){
            return "Error, zero is not divisible"
        }
        return a/b;
    }
    else{
       return "invalid operation";
    }
    
}

let a=45; b=5;
let operation= "sub";
let result=calculator(a,b,operation);
console.log(result);