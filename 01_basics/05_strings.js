const name = "Rishabh"
const repoCount = 50

// console.log(name+repoCount+" Value");  // Rishabh50 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc');

// console.log(gameName[0]);  // h
// console.log(gameName.__proto__);  //{}

// console.log(gameName.length);  // 8
// console.log(gameName.toUpperCase()); //  HITESHHC

// console.log(gameName.charAt(2));  // t

// console.log(gameName.indexOf('t'));  // 2


const newString = gameName.substring(0,4);
console.log(newString);  // hite

const anotherString = gameName.slice(-8,4); //-8 is treated as 0, so same as slice(0, 4)
console.log(anotherString);  //hite

const newStringOne = "  hitesh  ";  
console.log(newStringOne);         //  hitesh
console.log(newStringOne.trim());  //hitesh (remove space)

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));  //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'));  // true

const Myname = new String('hitesh-hc-com');

console.log(Myname.split('-'));  // [ 'hiteh', 'hc', 'com' ]

