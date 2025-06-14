/*use a for in loop to loop through an object containing city populations.
stop the loop when the population of berlin is found and store all previous cities populations in a new object named citypopulations
let citiespopulation={
"london":8900000,
"New York":8400000,
"Paris":2200000,
"Berlin":3500000
};
*/
let citiespopulation={
"london":8900000,
"New York":8400000,
"Paris":2200000,
"Berlin":3500000
};
let cityNewPopulation={}
// console.log(Object.keys(citiespopulation))
// console.log(Object.values(citiespopulation))
for (const city in citiespopulation) {
    // console.log(city)
    // console.log(citiespopulation[city]);
    // key=value
    if(city==='Berlin'){
        break;
    }
        cityNewPopulation[city]=citiespopulation[city];
    }
console.log(cityNewPopulation)


    
    


