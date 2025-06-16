const coding = ["js", "rb", "java", "py", "cpp"]

// for each dont return a value 
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values); 
// js
//rb
//java
//py
//cpp
//undefined


/// filter it return the values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
   return num > 4  // return is imp
})
console.log(newNums)  // [ 5, 6, 7, 8, 9, 10 ]
