// waf that checks if a number is even or odd
const iseven=(num)=>num%2===0 ? true : false;

console.log(iseven(4)); // true

// Waf findmax(a,b) find max of two nos
const findmax=(a,b)=> a>b ? a : b;
console.log(`maximum is ${findmax(5,10)}`); // 10

// waf expression that multiplies two nos
const multiply=(a,b)=> a*b;
console.log(`product is ${multiply(5,10)}`); // 50

// A function expression is very similar to, and has almost the same 
// syntax as, a function declaration. The main difference between a function expression 
// and a function declaration is the function name, which can be omitted in function expressions to 
// create anonymous functions. A function expression can be used as 
// an IIFE (Immediately Invoked Function Expression) which runs 
// as soon as it is defined. See also the chapter about functions for more information.
