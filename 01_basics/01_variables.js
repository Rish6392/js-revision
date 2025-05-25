////////////////////////**************************INTERVIEW*******************************************////////////////////////////////////////////

/*Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////**************************************************///////////


const accountId = 144553
let accountEmail = "rishgzp@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  // undefined

// accountId=2  // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "1234566"
accountCity = "Benguluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
