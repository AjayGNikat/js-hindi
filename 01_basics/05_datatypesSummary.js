// # Primitive  (cannot get Reference)

// 7 types : String, Number, Boolean, null, undefined, Symbol(unique),BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
console.log(id);
const anotherId=Symbol('123')
console.log(anotherId);

console.log(id===anotherId);  //false

const bigNumber=345659416416416486466n


// # Reference  (can get  Reference)

//Array, Objects, Functions.....

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
        console.log("Hello World");
}

console.log(typeof(bigNumber))
console.log(typeof(heros));
console.log(typeof(myFunction));
