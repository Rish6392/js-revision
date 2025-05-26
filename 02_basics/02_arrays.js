const marvel_heroes = ["thor","Ironman","spiderman"];
const dc = ["superman","flash","batman"];

// marvel_heroes.push(dc);

// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);    // flash

// const allHero = marvel_heroes.concat(dc);  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]  ////
// console.log(allHero);

const all_new_hero = [...marvel_heroes,...dc]; // Spread operator //////********************USE THIS
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);  /////
// [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
// console.log(real_another_array);





////////////////////////**********Interview */
// console.log(Array.isArray("Hitesh"))     // false 
// console.log(Array.from("Hitesh"))       // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"hitesh"}))    // []

let score1= 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]


