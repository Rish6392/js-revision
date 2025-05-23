// Dates

let myDate = new Date()
// console.log(myDate.toString());  // Fri May 23 2025 12:22:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  ///Fri May 23 2025

// console.log(myDate.toLocaleString());   //5/23/2025, 12:25:04 PM

// console.log(typeof myDate);      // Object  **********(Interview)************

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());  // 1/14/2023, 12:00:00 AM


let myTimeSteamp = Date.now()

// console.log(myTimeSteamp);  // 1748003793073

// console.log(myCreatedDate.getTime());  //1673654400000

// console.log(Math.floor(Date.now()/1000));   /// 1748003958  time in second ************Interview

let newDate= new Date()

console.log(newDate)   // 2025-05-23T12:41:29.314Z
console.log(newDate.getMonth()+1);  // 5
console.log(newDate.getDay());      // 5

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",

})

