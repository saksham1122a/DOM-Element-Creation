// Callback Hell
const cart = ["shoes", "pant", "Kurta"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(

            function(){
                api.updateWallet()
            }
        )
    })
})
// Because of this type of structure it is also known as Pyramid of DOOM
// CallBack Hell :- 
// Callback Hell in JavaScript happens when many nested callback functions are used, making the code look messy and hard to read or maintain. It often occurs when each async task depends on the result of the previous one. This creates a "pyramid" or "staircase" of code.

// 🧠 Real-life Example:
// Imagine you're ordering food:

// First, you call the restaurant.

// After they confirm, you wait for the chef to cook.

// Then the delivery guy picks it up.

// Then you finally get to eat.

// If each of these steps was nested inside the previous one, it would be hard to manage — just like callback hell in JS!


// INVERSION OF CONTROL

//Definition :- It means you are going to loose the control of your code when we're using callbacks.

// Inversion of Control (IoC) in JavaScript is a design principle where the control of flow (execution) is inverted: instead of your code calling a library or function directly, you give control to the external code (e.g., a framework or another function) and it decides when and how to call your code.
const cart1 = ["shoes", "pant", "Kurta"];

api.createOrder(cart1, function(){

    api.proceedToPayment()

})
// Another example  :-
// A common example of IoC in JavaScript is using callbacks — you pass a function to another function and the other function controls when to execute it.

function fetchData(callback) {
  // Simulating data fetching with setTimeout
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { name: "Saksham", age: 21 };
    callback(data); // Control is given to the callback function
  }, 2000);
}

function handleData(data) {
  console.log("Data received:", data);
}

// Passing handleData to fetchData, giving control of execution to fetchData
fetchData(handleData);


// Another example
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
