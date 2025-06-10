// const userEmail = []

// if(userEmail){
//     console.log("Got the User email");
// }
// else{
//     console.log("Dont have user email");
// }


//falsy values

// false, 0 , -0 , BigInt 0n , "" , null , undefined ,NaN

// Truthy Values
// jo bhi falsy nhi hai
// "0" , 'false' , " " , [] , {} , function(){} ,

// Array aa gaya tho kaise cheque kare ki truethy value hai ya falsy
if(userEmail.length===0){
    console.log("Array is empty")
}


// how to hcheque if obj is empty
// const emptyObj = {}

if(Object.keys(emptyObj).length()==0){
    console.log("Object is empty");  // yes
}


// All true
// false ==0
// fasle =''
// 0== ''


// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1= 5 ?? 10  // 5
//val1 = null ?? 10  // 10
//val1 = undefined?? 15 // 15

//val1 = null ? 10 ?? 15  // 10


// console.log(val1);    



// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<=800 ? console.log("less than 80"): console.log("more than 80")

