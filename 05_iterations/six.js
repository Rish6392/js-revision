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

// const newNums = myNums.filter((num) => {
//    return num > 4  // return is imp
// })

// for each
// const newNums = []

// myNums.forEach((num)=>{
//    if(num>4){
//       newNums.push(num)
//    }
// })
// console.log(newNums)  // [ 5, 6, 7, 8, 9, 10 ]


const books = [
   {
      title: 'Book One', genre: 'Fiction', publishe: 1981,
      edition: 2004
   },
   {
      title: 'Book Two', genre: 'non-Fiction', publishe: 1983,
      edition: 2006
   },
   {
      title: 'Book Three', genre: 'History', publishe: 1985,
      edition: 2008
   },
   {
      title: 'Book Four', genre: 'Science', publishe: 1987,
      edition: 2009
   },

];

let userBooks = books.filter((bk)=>{
   return bk.genre==='History'
})

userBooks = books.filter((bk)=>{
   return bk.publishe>=1985 && bk.genre==='History'
})

console.log(userBooks);

