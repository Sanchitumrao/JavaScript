/* you have two arrays europeanCountries containing "france", "germany", "italy" 
and asianCountries containing "japan", "china", "india".
merge these two arrays into a new array named WorldCountries.
*/
let europeanCountries = ["france", "germany", "italy"];
let asianCountries = ["japan", "china", "india"];
// let WorldCountries = europeanCountries+ asianCountries;
// console.log(WorldCountries); // Output: france,germany,italy,japan,china,india
let WorldCountries = europeanCountries.concat(asianCountries);
console.log(WorldCountries); // Output: ["france", "germany", "italy", "japan", "china", "india"]

/* you have a array named games containing "chess", "football", "cricket".
find the length of the array and store it in a variable named numberOfGames.
*/
let games = ["chess", "football", "cricket"];
let numberOfGames = games.length;
console.log(numberOfGames); // Output: 3

/* you have an array named animals containing "dog", "cat", "rabbit".
check if "cat" is present in the array and store the result in a variable named isCatPresent.
*/
let animals = ["dog", "cat", "rabbit"];
let isCatPresent = animals.includes("cat");
console.log(isCatPresent); // Output: true

