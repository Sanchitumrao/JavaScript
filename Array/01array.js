//array methods 

/*declare an array named tea falvours that contains the strings "green tea", "black tea", "oolong tea".
access the first element of the array and store in a variable named firstTea.
*/
let teaFlavours = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavours[0];
console.log(firstTea); // Output: greentea

/*declare an array named cities containing  "london", "paris", "new york", "tokyo".
access the third element in the array  and store in the variable name favouriteCity.
*/

let cities = ["london", "paris", "new york", "tokyo"];
const favouriteCity = cities[2];
console.log(favouriteCity); // Output: new york

/*you have an array named tea types that containing "herbal tea", "white tea", "masala tea".
change the second element of the array to "jasmine tea".
*/
let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes); // Output: ["herbal tea", "jasmine tea", "masala tea"]

/*declare an array named citiesVisited containing "london", "paris","mumbai".
add berlin to the array using the push method.
*/
let citiesVisited = ["london", "paris", "mumbai"];
// citiesVisited[1] = "berlin"; 
// console.log(citiesVisited.length); // Output 3
citiesVisited.push("berlin");
console.log(citiesVisited); // Output: ["london", "paris", "mumbai", "berlin"]
console.log(citiesVisited.length); // Output: 4

/*you have an array named teaOrders that contains "chai", "masala", "iced tea".
remove the last element of the array using the pop method.
*/

let teaOrders = ["chai", "masala", "iced tea"];
teaOrders.pop();
console.log(teaOrders); // Output: ["chai", "masala"]

/*you have an array named usernames that contains "alice", "bob", "charlie".
create a soft copy of this array named copiedUsernames.
*/
let usernames = ["alice", "bob", "charlie"];
let copiedUsernames = usernames
console.log(usernames); // Output: ["alice", "bob", "charlie"]
console.log(copiedUsernames); // Output: ["alice", "bob", "charlie"]

//create a hard copy of the usernames array named hardCopiedUsernames.
// let hardCopiedUsernames = [...usernames]; method 1
let hardCopiedUsernames = usernames.slice();// method 2
usernames.pop();
console.log(usernames); // Output: ["alice", "bob"]
console.log(hardCopiedUsernames); // Output: ["alice", "bob", "charlie"]

