// functions in js
/*
 Functions are blocks of reusable code that performs a specific task.
 syntax:
 function fun_name(parameters){
 body of function---
 }
*/

function greet() { }//function declaration

function greet(name) {
    console.log(`Hello ${name}!`);
}//function definition

greet("Sanchit")//function call

// write a function to find the factorial of any number
console.log("----------------------Factorial----------------------------------");
function fact(n) {
    if (n === 0) {
        return 1
    }
    else {
        while (n > 0) {
            return n * fact(n - 1)
        }
    }
}

console.log(`Factorial of 0 is ${fact(0)}.`)
console.log(`Factorial of 1 is ${fact(1)}.`)
console.log(`Factorial of 5 is ${fact(5)}.`)
console.log(`Factorial of 6 is ${fact(6)}.`)
