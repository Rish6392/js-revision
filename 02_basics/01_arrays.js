// array
//
//1. Array is written in brackets [  ].
//2.Array data type is an object.
//3.Array can contain different data types . i.e string,number,boolean,array etc.
//4. Array is zero based indexing. It starts with zero.
//5. Once changed its original value will also change beacause it is non primitive (refrence) type.

//ARRAY METHODs :

//1.Push = adds value to last of an array.
//2. Pop = removes last value of an array.
//3. Unshift = adds value at first of an array.
//4.Shift = removes first value of an array.
//5. Includes = checks true or false.
//6. IndexOf = checks the position of value in number form.
//7.Join = converts to string.
//8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
//9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9);  //[9, 0, 1, 2,3, 4, 5]
// myArr.shift();  // [1,2,3,4,5]

// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(3)) // 3

// const newArr = myArr.join()

// console.log(myArr);     // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);    // 0,1,2,3,4,5
// console.log(typeof newArr)  // String 


// slice,spice

console.log("A ",myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);

console.log(myn1);  // [ 1, 2 ]
console.log("B ",myArr);  // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);  // [ 1,2,3 ]   //*********************************INTERVIEW */ DIFF BW SLICE AND SPLICE IS THAT SPLICE CHANGES THE ORIGINAL ARRAY AND SLICE DO NOT 
console.log("B ",myArr);        //   B  [ 0, 4, 5 ]
console.log(myn2);
