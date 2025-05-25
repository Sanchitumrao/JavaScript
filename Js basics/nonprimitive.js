//nonprimitive data types
const username={
    "name": "sanchit",
    isloggedIn: true,
};//const reserves one memory location for the object
console.log(username); 
console.log(typeof username); 
console.log(username.name); // Accessing property of object
console.log(typeof username.name);``
username.name = "sanchit umrao"; // Updating property of object
console.log(username);
console.log(username.name); // Accessing updated property of object
console.log(username["name"]); // Accessing property using bracket notation

let today = new Date(); // Creating a new Date object
console.log(today);
console.log(typeof today); 
//properties of Date object
console.log("Current Date:",today.getDate());
console.log("Current Month:",today.getMonth() + 1); 
console.log("Current Year:",today.getFullYear());

// Array
let anotheruser = ["Mohan",true]; // Array can hold multiple types of data
console.log("USER:",anotheruser[0]);

// type conversion

console.log("'1'+1:","1"+1); //'1'+1:11
console.log("1+'1':",1+"1"); // 1+'1':11
console.log("true+1:",true + 1);// true+1:2 
console.log("true+'1':",true + "1");// true+'1':true1
console.log("false+1:",false + 1);// false+1:1
console.log("false+'1':",false + "1");// false+'1':false1


// let value = "2";
// console.log("String to Number:",Number(value),typeof Number(value)); // String to Number:2  number
let value = "2abc";
console.log(Number(value),typeof Number(value)); // NaN (Not a Number) Number

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Boolean(0)); // false

