// functional constructor
// simple function
// function greet(name){
//     console.log(`Hello${name}`)
// }
function Person(name,age){
    this.name=name
    this.age=age


}
function Car(make,model){
    this.make=make
    this.model=model
}
let myCar=new Car("Toyota","Camry")
console.log(myCar)
let myNewCar=new Car("Tata","Safari")
let my_Car= Car("Tata","Safari")
console.log(myNewCar)
console.log(my_Car)

function Tea(type){
    this.type=type
    this.describe=function(){
        return`This is a cup of ${this.type}`
    }
}
let lemonTea=new Tea("lemon tea");
console.log(lemonTea.describe());

function animal(species){
    this.species=species
}
animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}
let dog=new animal("dog")
console.log(dog.sound())
let cat=new animal("cat")
console.log(cat.sound())

function drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name=name
}
let tea=new drink("tea")
// let coffee= drink("coffee")
console.log(tea)
// console.log(coffee)