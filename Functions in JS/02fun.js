/* write a function named `make tea` that takes one parameter type of tea and returns a string like `making green tea`
 when called with `green tea` when called with green tea store the result in a variable name `tea order`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("greenTea")
console.log(teaOrder)
/*create a function named order tea that takes one parameter `teaType` inside this function create another 
function named `confirmOrder` that returns a message like  `order confirmed for chai`.
call `confirmOrder`from within `orderTea`and return the result
*/
// javascript execution context

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    }
    return confirmOrder()
}
let order = orderTea("lemon tea")
console.log(order)

/* write an arrow function named `calculateTotal` that takes two parameters `price`and 
`quantity`the function should return the total cost by multiplying the `price` and `quantity`
 store the result in a variable named totalCost
*/
// arrow function
// const greet=()=>`hello`
// console.log(greet())
const calculateTotal=(price,quantity)=> price*quantity
let totalCost=calculateTotal(499,10000)
console.log(`total cost is ${totalCost}`)
/*Write a function named `processTeaOrder`that takes another function `makeTea`as a  parameter 
and calls it with the argument `"earl grey"`.
return the result of calling makeTea
*/
// higher order function
function makeTea(typeOfTea){
    return `MakeTea ${typeOfTea}`

}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}
let Order=processTeaOrder(makeTea)
console.log(Order)
/*Write a function named `createTeaMaker` that returns another function .the returned function should 
take one parameter ,`teaType`,and return a message like `making green tea` .
store the returned function in a variable named `teaMaker` and call it with green tea
*/

function createTeaMaker(){
    return function (TeaType){
        return `Making ${TeaType}`
    }
}
let teaMaker=createTeaMaker()
console.log(teaMaker("greenTea"))