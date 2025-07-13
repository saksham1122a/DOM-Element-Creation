// CallBack Function
// A callback function is a function that is passed as an argument to another function and is executed after that function finishes its task. 
// It helps in running code in sequence, especially for asynchronous tasks like API calls or timers.
setTimeout( function () {   // here the function() is a callback function
    console.log("timer"); 
}, 5000);



function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})

// Callback function is can be passed as an arugment of another function like x() and it will get execute also.
// Asynchronous(execute lines after line) operation aren't possible without these callback functions
