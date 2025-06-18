// object oriented programming in java script
let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`
    }
};
console.log(typeof(car))
console.log(typeof(car.year))
console.log(typeof(car.start))
console.log(car.start())


function person(name,age){
    this.name=name 
    this.age=age
}
let John=new person("John Doe",25)
console.log(John.name)
console.log(John.age)

function animal(type){
    this.type=type
}
animal.prototype.speak=function(){
    return `${this.type} makes a sound`
}
Array.prototype.Sanchit=function name(){
    return`Custom method ${this}`
}
let myArr=[1,2,3]
console.log(myArr.Sanchit())
let myNewArr=[1,2,3,4,5,6]
console.log(myNewArr.Sanchit())

console.log("---------------classes in js-------------------")
class Vehicle {
    constructor(make,model){
        this.make=make
        this.model=model
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }

}
class Car extends Vehicle{
    drive(){
        return `${this.make}:This is an inheritance example`
    }
}

let myCar=new Car("Toyota","Corolla")
// console.log(myCar.start())
// console.log(myCar.drive())
let vehicleOne=new Vehicle("Toyota","Corolla")
console.log(vehicleOne.make)
console.log(vehicleOne.start())
console.log("--------------------------------------------")
// Encapsulation is a restricting direct access to data
class BankAccount{
    #balance=0;
    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account=new BankAccount()
console.log(account.balance);
console.log(account.getBalance());
// Abstraction hides the complex things
class CoffeeMachine{
    start(){
        //call db
        //filter value
        return `Starting the machine...............`
    }
    pressStartButton(){
        let msgOne=this.start();
        let msgTwo=this.brewCoffee();
        return `${msgOne} + ${msgTwo}`
    }
    brewCoffee(){
        //complex calculation
        return `brewing machine`
    }
}
let myMachine=new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());