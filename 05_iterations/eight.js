// reduce
// use in for ex shopping cart total price

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval : ${currval}`);
//     return acc+currval
// },0)

const myTotal= myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
     {
        itemName:"py course",
        price:999
    },
     {
        itemName:"c++ course",
        price:3999
    },
     {
        itemName:"ds course",
        price:12999
    },
]

// add all prices in shopping cart 
// use reduce ******************************************IMP

const pricetopay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetopay);