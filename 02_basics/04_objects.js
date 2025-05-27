// object singelton
// const tinderUser = new Object() //o/p>  // {}     // Singlton Object
const tinderUser = {} //  //o/p=> {}      // Non singelton Object 

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email:"somesh@gmail.com",
    fullname:{
        userfullname:{
           firstname:"hitesh",
           lastname:"chaudary"
        }
    }
}

// console.log(regularUser.fullname);  // { userfullname: { firstname: 'hitesh', lastname: 'chaudary' } }

// console.log(regularUser.fullname.userfullname)  // { firstname: 'hitesh', lastname: 'chaudary' }


// Object Combine

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 = {obj1,obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1,obj2);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({},obj1,obj2);   // Correct Syntax { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2};   // Spread Operator 90% useed { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
// console.log(obj3);   


const users = [
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'h@gmail.com'
    },

]

users[1].email
console.log(tinderUser);   // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true