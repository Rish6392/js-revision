// for loop

for (let index = 0; index <10; index++) {
    const element = index;
    if(element==5){
        //console.log("5 is best number")
    }
    //console.log(element);
}

//console.log(element);

for(let i=0;i<=10;i++){
   // console.log(`Outer loop value:${i}`);
    for( j=0;j<10;j++){
       //console.log(`Inner loop value ${j} and inner loop ${i}`);
      // console.log(i+'*'+j+'='+i*j);
    }
}

let myArray = ["flash","batman","superman"]

for(let i=0;i<myArray.length;i++){
    const element=myArray[i];
    //console.log(element);
}


// break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);

    
}

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;   // ek barke liye skip
    }
    console.log(`Value of i is ${index}`);

    
}

