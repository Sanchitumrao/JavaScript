//write a for loop that loops through the array [greenTea, blackTea, oolongTea, whiteTea,chai] and stops the loop when it finds
// 'chai' and stores all the teas before 'chai' in a new array named SelectedTeas
let teas = ['greenTea', 'blackTea', 'oolongTea', 'whiteTea', 'chai'];
let SelectedTeas = [];
for (let i=0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break; // Stop the loop when 'chai' is found
    }
    SelectedTeas.push(teas[i]); // Store all teas before 'chai'
}
console.log("Selected Teas:", SelectedTeas); // Output: ['greenTea', 'blackTea', 'oolongTea', 'whiteTea']
/*Write a for loop that loops through the array ["London","Tokyo","Japan","Paris","Berlin"] and skips 
paris store the other cities in a array
named visited cities*/
let cities=["London","Tokyo","Japan","Paris","Berlin"]
let visitedCities=[]
for(let i=0;i<cities.length;i++){
    if(cities[i]==='Paris'){
        continue;
    }
    visitedCities.push(cities[i])
}
console.log("visited Cities:",visitedCities)

/*Use a for of loop to iterate through the array ["chai","greenTea","herbalTea","blacktea"] and skip herbalTea
store the other teas in a array named preferredTeas
*/
let Teas2=["chai","greenTea","herbalTea","blacktea"]
let prefferedTeas=[]
for (const i of Teas2) {
    if(i==='herbalTea'){
        continue;
    }
    prefferedTeas.push(i)
    
}
console.log("preferredTeas:",prefferedTeas)

/*use a for of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found
store the number before 4 in array named Smallnumbers 
 */
let numbers=[1,2,3,4,5]
let Smallnumbers=[]
for (const num of numbers) {
    if(num===4){
        break;
    }
    Smallnumbers.push(num)
}
console.log("Smllnumbers:",Smallnumbers)


