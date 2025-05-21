let score = "33ab"

//console.log(typeof (score) );

let valueInNumber = Number(score)

// console.log(typeof (valueInNumber) );

// console.log(valueInNumber);  // o/p => NaN as it is not pure number and in case of undefined also
                             //  o/p => 0 in case of null


// "33" => 33
//  "33abc" => NaN
// true => 1
// rishabh =>NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn)

// 1 => true ; 0=> false
// "" => false
// "rishbah" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)      //  => 33
// console.log(typeof stringNumber)   //=> String(Number Converted to String)




// *****************************************************Operations******************************************************************************************************************************

let value = 3;
let negValue = -value
// console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // 2^3
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2= " Rishabh"

let str3 = str1+str2;
// console.log(str3);     // => Hello Rishabh

// console.log("1"+2)   // 12
// console.log(1+"2")   // 12
// console.log("1"+2+2) // 122
// console.log(1+2+"2") // 32

// console.log((3+4)*5%3);


// console.log(+true);  // 1
// console.log(+"");    // 0

let num1,num2,num3;

num1=num2=num3=2+2;

let gameCounter = 100
gameCounter++;   // badme increment ho jati hai
++gameCounter;   // pehle increment ho jati hai
console.log(gameCounter);

