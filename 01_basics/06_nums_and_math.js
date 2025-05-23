const score=400;
// console.log(score);  // 400

const balance = new Number(100)
// console.log(balance);   // [Number:100]

// console.log(balance.toString());  // 100 String
// console.log(balance.toFixed(2));  // 100.00

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3));  // 124
// console.log(otherNumber.toPrecision(4));  // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

 





/////////*************************************************MATH     **************** */

// console.log(Math);
// console.log(Math.abs(-4));  /// 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2))   // 5
// console.log(Math.floor(4.9))   // 4
// console.log(Math.min(4,3,5,6))  // 3
// console.log(Math.max(4,3,5,6))  // 6

console.log(Math.random());  // any random no bw 0 and 1
console.log((Math.random()*10)+1);  // any random value bw 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)  // number bw 10 and 20
