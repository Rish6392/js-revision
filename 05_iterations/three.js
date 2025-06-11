// for of 

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Helo World"

for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

/// Maps

const map = new Map()
map.set('IN',"India")
map.set('UN',"Unitaed nation")
map.set('FR',"France")
map.set('IN',"India")

//console.log(map);  // unique value deta hai
// Map(3) { 'IN' => 'India', 'UN' => 'Unitaed nation', 'FR' => 'France' }

// loop on this map
// op-> IN :- India
//////  UN :- Unitaed nation
//////  FR :- France
for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
//////////// myObject is not iterable
// for(const [key,value] of myObject){
//     console.log(key,':-',value)
// }

