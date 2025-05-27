//while loop
//syntax: while(condition) { //code to be executed }

//find the sum of numbers from 1 to 5 using while loop
let i = 1;
let sum = 0;
while (i <= 5) {
    sum += i; 
    i++;
}
console.log("Sum of numbers from 1 to 5 is: " , sum);

//write a while loop that counts down from 10 to 1 and stores the numbers in an array named countdown
let countdown = [];
let j = 10;
while (j>=1){
    countdown.push(j);
    j--;
}
console.log("Countdown from 10 to 1: ", countdown);


//do while loop
//syntax: do { //code to be executed } while(condition);

/*write a do while loop that prompts a user to enter their favourite tea type until they enter stop
 search each type in an array named teaCollection*/ 
// let teaCollection = [];
// let teaType;
// do {
//     teaType = prompt("Enter your favourite tea type (or type 'stop' to exit):");
//     if (teaType!== 'stop') {
//         teaCollection.push(teaType);
//     }

// } 
// while (teaType !== 'stop');
// this code will not run in node.js as prompt is not defined, it is used in browser environment
