// # Primitive

// 7 Categories : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')  // Symbol -(Datatype)
const anotherId = Symbol('123')

// console.log(id===anotherId);  // false

const bigNumber  = 555555555555555n




//*********************************// Reference (Non primitive)
//******************// Array,Objects,Functions   ************(datatype-functions)**********


const heroes = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"hitesh",
    age:22,
}

const myFunction = function(){
   console.log("Hello World");
}


// how to know datatype of any

// console.log(bigNumber) // undefined





////// ***************************************************Memory

//Stack (Primitive)
//Heap (Non-Primitive)

let myYoutubenmae = "hiteshchaudary"

let anothername = myYoutubenmae;
anothername="chai aur code"

// console.log(myYoutubenmae)  // o/p=>hiteshchaudary  //copy
// console.log(anothername)    //  chai aur code

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email="hitesh@google.com"

console.log(userOne.email);  // o/p =>hitesh@google.com   // reference
console.log(userTwo.email);  // o/p =>hitesh@google.com
