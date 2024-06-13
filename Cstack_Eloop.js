// Part one of the assignment

//Declaring a Global counter variable to track the depth of the call stack
let counter = 0;

//Create a simple function that increments the variable, and then calls itself recursively.
//So the Recursive function to increment the counter and call itself
function recursiveFunction(){
    counter++;              // here the variable is incremented
    recursiveFunction();    // here it will call itself
}


// Wrap the initial function call in a try/catch block to handle stack overflow error
try {
    recursiveFunction();        // Now trying running the function
} catch (error) {
    console.log("Hey Ahmed > Stack Overflow Error:", error);
    console.log("Hey Ahmed > Maximum call stack size:", counter);
}
//===========================================================================================
// This code defines a recursive function recursiveFunction() that continuously calls itself,
// incrementing a global counter variable counter with each call. It then wraps the
// initial function call in a try/catch block to catch the "stack overflow" error.
// When the error is caught, it logs the error message and the value of the counter variable,
// effectively measuring the maximum size of the call stack before it overflows.