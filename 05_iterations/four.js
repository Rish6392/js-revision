const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

// for in loop

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in in array

const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('UN',"Unitaed nation")
map.set('FR',"France")
map.set('IN',"India")

// mapis not iterable ****************************************************************

for(const key in map){
    console.log(key);
}