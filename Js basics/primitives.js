//primitive data types
//string,boolean,number,undefined,null,symbol,bigint
//non-primitive data types
//object --> object,array,function


//number
let balance=100;
let anotherbalance=new Number(100);
console.log("balance:",balance,"type:",typeof (balance));//number
console.log("anotherbalance:",anotherbalance,"type:",typeof anotherbalance);//object
//boolean
let isActive=true;
let isReallyActive=new Boolean(true);
console.log("isActive:",isActive,"type:",typeof (isActive));//boolean
console.log("isReallyActive:",isReallyActive,"type:",typeof isReallyActive);//object

//null and undefined
let firstName=null;
let lastName=undefined;
console.log("firstName:",firstName)//null
console.log("lastName:",lastName)//undefined
console.log("type of firstName:",typeof firstName);//object
console.log("type of lastName:",typeof lastName);//undefined

//string
let myString="hello";
let user="Sanchit";
let oldGreet="hello"+" "+user;

let newGreet=`hello ${user} !`;
console.log("oldGreet:",oldGreet);//hello Sanchit
console.log("newGreet:",newGreet);//hello Sanchit !

let demoOne=`value of 2*2= ${2*2} and type is ${typeof (2*2)}`;
console.log("demoOne:",demoOne);//value of 2*2= 4 and type is number

let sm1=Symbol("hello");
let sm2=Symbol("hello");
console.log("sm1:",sm1,"type:",typeof sm1);//symbol
console.log("sm2:",sm2,"type:",typeof sm2);//symbol
console.log("sm1===sm2:",sm1===sm2);//false