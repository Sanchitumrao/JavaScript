// Write a do while loop that adds numbers from 1 to 5 and stores the result in a variable named total
let total=0
let i = 1;
do {
    total += i;
    i++;
}
while (i <= 5);
console.log("Sum is:",total); // Output: 15

// for loop
// syntax: for(initialization; condition; increment/decrement) { //code to be executed }
/*Write a for loop that multiplies each elements in the array [2,4,6,8] by 2 and stores 
the result in a new array named doubledArray*/
let originalArray = [2, 4, 6, 8];
let doubledArray = [];
for (let k = 0; k < originalArray.length; k++) {
    doubledArray.push(originalArray[k] * 2);
}
console.log("Doubled Array:", doubledArray); // Output: [4, 8, 12, 16]

/*write a for loop that lists all the cities in the array ['New York', 'Tokyo', 'London', 'Paris'] and stores each
 city in a new array named citiesList*/
let cities = ['New York', 'Tokyo', 'London', 'Paris'];
let citiesList = [];
for (let j = 0; j < cities.length; j++) {
    citiesList.push(cities[j]);
}
console.log("Cities List:", citiesList); // Output: ['New York', 'Tokyo', 'London', 'Paris']
