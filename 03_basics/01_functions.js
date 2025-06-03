// console.log("H")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")

// function syntax
function sayMyName() {
    console.log("H")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}

//call function
//sayMyName()


// function addTwoNumbers(Number1,Number2){
//     console.log(Number1+Number2);
// }
function addTwoNumbers(Number1,Number2){
    // let result = Number1+Number2
    // return result
    return Number1+Number2
}

// addTwoNumbers(3,4);  // =>7
// addTwoNumbers(3,"4"); // =>34 
// addTwoNumbers(3,"a"); // =>3a

const result = addTwoNumbers(3,5);  // 8
//console.log("REsult:",result);  // REsult: undefined
// console.log("Result:",result); // Result:8


function loginUserMessage(username){
    if(username===undefined){
         console.log("Plese enter a username");
         return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) // hitesh just logged in

// console.log(loginUserMessage());   // undefined just logged in




//*************************************************2 lecture

function calculateCartPrice(...num1){// ... Spread(rest) Operator 
      return num1
}

// console.log(calculateCartPrice(200,400,500))  // 200
// // after ...
// console.log(calculateCartPrice(200,400,500)) // [200,400,500]

function calculateCartPrice(val1,val2,...num1){
      return num1
}

// console.log(calculateCartPrice(200,400,500,2000)) // [500,2000]



// how to pass object to function
const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)  // Username is hitesh and price is 199

handleObject({    // Username is sam and price is 399
    username:"sam",
    price:399
})

// how to pass array in function
const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray)); // 400
console.log(returnSecondvalue([200,400,500,1000])); // 400