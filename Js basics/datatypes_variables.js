// datatypes and variables in JavaScript
/*
1.String
2.Number
3.Boolean
4.Bigint

5.Undefined
6.Null

7.Object
8.Symbol

*/
// Variables in JavaScript can be declared using var, let, or const
// var score = 100; this is a global variable this can be accessed anywhere in the code
let score = 100; // this is a block scoped variable this can be accessed only in the block where it is declared
let name = "sanchit"; 
let isloggedIn = false; 

// Object
let teaTypes = ["green tea", "black tea", "lemon tea", "oolong tea"];
let user = {
    firstname: "sanchit",
    lastname: "umrao",
}

let getscore = score;
console.log("score:", score,"type:",typeof score)
console.log("getscore:", getscore);

let gamename = "cricket";
console.log("gamename:", gamename,"type:",typeof gamename)
gamename = "football";
console.log("gamename:", gamename,"type:",typeof gamename)

// const
const username = "sanchit";
// username = "sanchit umrao"; // this will give an error because const variable cannot be reassigned
console.log("username:", username)
