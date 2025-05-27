// singelton
// Object.create

// object literals

const mySym = Symbol("Key1");  ////////////********Interview*** */
const mySymb = Symbol("Key1");  //////Q (Create a symbo and fetch in objects )

const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Chaudary",
    mySym:"mykey1",         ////////////////////////////////interview  not correct syntax
    [mySymb]:"mykey2", ////////////////////////////////////Correct SYntax
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// Two ways to access object values
// console.log(JsUser.email);  //hitesh@google.com
// console.log(JsUser["email"]);  // hitesh@google.com

// // console.log(JsUser.full name)  // Cant by .
// console.log(JsUser["full name"]) // Hitesh Chaudary
// console.log(JsUser.mySym);            // mykey1

// console.log(typeof JsUser.mySym);    // String ?????????/////////////////////////    

// console.log(JsUser[mySymb]);  // mykey2 //        correct syntax


// how to change the value 
// JsUser.email="hitesh@chat.com"
// Object.freeze(JsUser)   // now cant change the JsUser value 
// JsUser.email="hitesh@micro.com"

// console.log(JsUser);

// how to add functions 
JsUser.greetings  =function(){
    console.log("Hello JS user");
}

JsUser.greetings2  =function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greetings);  //[Function (anonymous)]

console.log(JsUser.greetings()); // Hello JS User undefined ??????
console.log(JsUser.greetings2()); //Hello JS user,Hitesh  undefined?????

