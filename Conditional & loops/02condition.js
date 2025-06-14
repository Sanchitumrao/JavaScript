//checking if a variable is number or not
// let score= 44;
let score= "44"; 
if (typeof score === "number") {
    console.log("This is a number");
}
else {
    console.log("This is not a number");
}

// check if a boolean is true or false
let isLoggedIn = false;
if (isLoggedIn== true) {
    console.log("User is logged in");
}
else {
    console.log("User is not logged in");
}

// check if an array is empty or not
// let myArray = [];
let myArray = [1, 2, 3]; 
if (myArray.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array is not empty");
}