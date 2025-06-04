//var c= 300

let a= 300  // global scope

if(true){    // block scope only on block use 
    let a= 10
    const b=20
    //console.log("INNER:",a);
}


//console.log(a);  //=>INNER: 10  300

//console.log(b);
//console.log(c);   // => 30 still  var ko avoid karna hai

//*******************************Console aur vs code ka code alag hai scope ke mamale main **************  interview************************* */


// 2 lec

//Nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);  //error : because inner scope main hai uska scope khatam hogya hai

    two();   // =>hitesh
}

//one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website = "youtube"
        //console.log(username+website);   // hitesh youtube
    }
   // console.log(website);   // error : scope se bahar access kar rahe hai
}

//console.log(username); // error : scope se bahar access kar rahe hai


///+++++++++++++++++++++++++++++++ interesting  ++++++++++++++++++++++
// hoesting in js
console.log(addone(6));// 7  // here can access
function addone(num){
    return num+1;
}

//addone(5);


addTwo(5);   // error : cant access
const addTwo = function(num){
    return num+2;
}

