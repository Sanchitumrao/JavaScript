//polymorphism
class Bird{
    fly(){
        return `flying..............`
    }
}
class Penguin extends Bird{
    fly(){
        return`Penguins can't fly`
    }
}
let bird=new Bird()
let penguin=new Penguin()

console.log(bird.fly())
console.log(penguin.fly())
console.log(" -----------static method---------------------")
// static method
class calculator{
    static add(a,b){
        return `${a}+${b}=${a+b}`
    }
}
// let calc=new calculator()
// console.log(calc.add(4,6))
console.log(calculator.add(4,6))
// getters and setters method
console.log("-----------getter and setter method-----------")
class Employee{
    #salary
    constructor(name,salary){ 
        this.name=name;
        this.#salary=salary;
        // if(salary<0){
            // throw new Error("Salary can not be in negative");
        // }
    }
    get salary(){
        return `you are not allowed to see salary`
    }
    set salary(value){
        if (value<0){
            console.error("Invalid Salary");

        }
        else{
            this._salary=value;
        }

    }
}
let emp=new Employee("Alice",-50000)
// console.log(emp.name)
console.log(emp._salary)
emp.salary=-50000
// console.log(emp.salary)


