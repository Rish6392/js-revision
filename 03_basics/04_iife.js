// Immediately Invoked Function Expression (IIFE)

(function chai(){     // named iife
    console.log(`DB connnected`);
})();    // execution call iife ;imp

//()(); // iife  global scope ke pollution se problem hoti hai kai bar 
// tho us global scope ke pollution ko hatane ke liye iife ka use ***************INTERVIEW*****************


((name)=>{    // simple iife with parameter pass
    console.log(`DB connected two ${name}`)
})('hitesh');   // ; imp    0p=>DB connected two hitesh