// array methods

let arr= [1, 2, 3, 4, 5];

//map() //this method is used to transform elements of an array by applying to
//  a function to each element and returns a new array without modifying the original array.
let mappedArr = arr.map(num => num * 2);
console.log("Mapped Array:", mappedArr); // Output: [2, 4, 6, 8, 10]


//filter()
// This method is used to create a new array with all elements that pass the test implemented by the provided function.
let filteredArr = arr.filter(num => num % 3 === 0);
console.log("Filtered Array:", filteredArr); // Output: [3]


//reduce()
//reduces array to a single value by applying a function 
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Array:", sum); // Output: 15



//forEach()
// This method executes a provided function once for each array element.
arr.forEach(num => 
console.log("Element:", num)); // Output: Element: 1, Element: 2, Element: 3, Element: 4, Element: 5



//find()
// This method returns the value of the first element in the array that satisfies the provided testing function.
console.log ("Find Element:", arr.find(num => num > 3)); // Output: 4



//some()
//checks if any element passes a test
let hasEven = arr.some(num => num % 2 === 0);
console.log("Has Even Number:", hasEven); // Output: true


//every()
// This method tests whether all elements in the array pass the test 
let allEven = arr.every(num => num % 2 === 0);
console.log("All Even Numbers:", allEven); // Output: false


//sort()
// This method sorts the elements of an array
let arr2 = [5, 3, 8, 1, 2];
let sortedArr = arr2.sort();
console.log("Sorted Array:", sortedArr); // Output: [1, 2, 3, 5, 8]



//reverse()
let reversedArr = arr2.reverse();
console.log("Reversed Array:", reversedArr); // Output: [8, 5, 3, 2, 1]



//inciudes()
// This method determines whether an array includes a certain value among its entries
let includesThree = arr2.includes(3);
console.log("Includes 3:", includesThree); // Output: true


//push()
// This method adds one or more elements to the end of an array
let newLength = arr2.push(6);
console.log("New Length after Push:", newLength); // Output: 6
console.log("Array after Push:", arr2); // Output: [8, 5, 3, 2, 1, 6]

//pop()
// This method removes the last element from an array 
let poppedElement = arr2.pop();
console.log("Popped Element:", poppedElement); // Output: 6
console.log("Array after Pop:", arr2); // Output: [8, 5, 3, 2, 1]


//shift()
// This method removes the first element from an array
let shiftedElement = arr2.shift();
console.log("Shifted Element:", shiftedElement); // Output: 8
console.log("Array after Shift:", arr2); // Output: [5, 3, 2, 1]


//unshift()
// This method adds one or more elements to the beginning of an array

let newLengthUnshift = arr2.unshift(0);
console.log("New Length after Unshift:", newLengthUnshift); // Output: 5