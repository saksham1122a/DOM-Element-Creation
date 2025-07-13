// Definition :- A promises is an object representing the eventual completion or failure of an asynchronous operation
/*
 const cart = ["shoes", "pant", "Kurta"];

 createOrder(cart, function(orderId){
     proceedToPayment(orderId);
 });

 const promise = createOrder(cart);

 promise.then(function(orderId){
     proceedToPayment(orderId);
 });

 */

/* const cart = ["shoes", "pant", "Kurta"];
createOrder(cart, function(orderId){
   proceedToPayment(orderId, function(paymentInfo){
    showOrderSummary(paymentInfo,function() {
        updateWalletBalance();
    });
   });
});

// The problem with this code is nothing but due to nesting multiple callback function it is creating a hell called callback hell. Let's resolve it using promises
createOrder(cart)
.then(function (orderId){   // .then(orderId => proceedToPayment(orderId));    Using arrow method
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo);
})
*/


// Creating a Promise on our own


const cart = ["shoes", "pant", "Kurta"];

 const promise = createOrder(cart)    // orderId
 console.log(promise);

 promise.then(function(orderId){
    console.log(orderId);
    return orderId;
 })
 .then(function(orderId){
    return proceedToPayment(orderId);
 })                                               // Promises Chaining
 .then (function(paymentInfo){            
    console.log(paymentInfo);
    
 })
.catch(function(err){      // this catch statement is used to handle the error in the above statements been used.
    console.log(err.message);

});
 // Producer
 function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        
        // Actual logic for orderId
        const orderId = "2322208";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            },5000)
            
        }
        
    });
    return pr;
 }

 function proceedToPayment(orderId){
    return new Promise(function (resolve, reject) {
        resolve("Payment Successfull");
    })
 }
 function validateCart(cart){
    return true;            // If we make this return as false the whole cart will not be accessible for that we'll be going to create a catch method for the promise
 }



