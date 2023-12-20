//  Primitive

//  (call by Value)7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // null is absence of value
let userEmail;
// console.log(userEmail);
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
    marks: 92
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
// const a=122
// console.log(typeof a)
const name="Reyansh";
console.log(typeof name);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// stack(primitive) , heap(NonPrimitive)
