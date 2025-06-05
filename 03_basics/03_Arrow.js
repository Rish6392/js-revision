const user = {
    username:"hitesh",
    price:99,

    welcomeMessage:function(){   // this is used to refer current context
        console.log(`${this.username},welcome to website`)
        //console.log(this)
    }
}

// user.welcomeMessage(); // hitesh,welcome to website
// user.username="sam"    // context changed
// user.welcomeMessage() // sam,welcome to website

//console.log(this);  // {} in js node terminal  but window(global object) in browser

// function chai(){
//     let username="hitesh"
//     console.log(this.username);  // undefined(o/p) => cant use this in function only on object
// }

// chai();   // so many thing in console

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username);  /// undefined
// }


// Arrow function
// const chai = () =>{
//     let username="hitesh"
//     console.log(this)  // {}
//     console.log(this.username); // undefined
// }


// chai()

// basic arrow function
// const addTwo = (num1,num2)=>{  // {} then return 
//     return num1+num2;
// }

// implicit return 
//const addTwo = (num1,num2)=> num1+num2;   // syntax man lo 
//const addTwo = (num1,num2)=> (num1+num2);  () no return  req


const addTwo = (num1,num2) => ({username:"hitesh"})  /// for onject wrap in parynthesis imp syntax

console.log(addTwo(3,4));
