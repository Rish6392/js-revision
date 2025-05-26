// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);  // true
// console.log("02">1);  // true

console.log(null>0);  // false
console.log(null==0); // false
console.log(null>=0); // true
                  //////////////////////////////////// == and >= works differenty in JS //////////////////////////////////////
console.log(undefined==0);  // false
console.log(undefined>0);   // false
console.log(undefined<0);   // false

// === Strict Check checks data type also ( Checks the type of the datatype  also )

console.log("2"===2)  // false
