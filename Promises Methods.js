// 1. Promise.all()

const p1= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("P1 Success"), 3000);   // It took 3sec. to fullfill
})

const p2= new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("P2 Success"), 1000);   // It took 1sec. to fullfill
     setTimeout(() => reject("P2 Fails"), 1000);    // Straight after 1sec. it will through an error
})

const p3= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("P3 Success"), 2000);   // It took 2sec. to fullfill
   // setTimeout(() => reject("P3 Fail"), 2000);      // It will wait for 2 sec. and then fails.
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
                                               // After all the promises fullfilled it will execute after 3 seconds in the form of array.
})
.catch((err)=>{
    console.error(err);   // For catching the error
})
// In this methods all the promises are required to be resolved, else if any of the promise fails to execute, this methods will directly print error.

// 2. Promises.allSettled()
// It will wait for all of the promises whether it fails or succeed, it will collect the data and later display.

const pr1= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Pr1 Success"), 3000);   // It took 3sec. to fullfill
})

const pr2= new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("Pr2 Success"), 1000);   // It took 1sec. to fullfill
     setTimeout(() => reject("Pr2 Fails"), 1000);    // Straight after 1sec. it willn't through an error, it will wait for every promise to settle
})

const pr3= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Pr3 Success"), 2000);   // It took 2sec. to fullfill
   // setTimeout(() => reject("Pr3 Fail"), 2000);      // It will wait for 2 sec. and then fails.
})

Promise.allSettled([pr1,pr2,pr3]).then((res)=>{
    console.log(res);
                                               
})
.catch((err)=>{
    console.error(err);   // For catching the error
})

// In the end it will result an array where the promises that are settled are executed as let's say value1, and the ones that are rejected are returned as error. Eg. [value1, err2, value3]
// It is the safest method amongst all...


// 3. Promises.race()

// It will select the promises will less time and print the result of it. Let's day if after 1 sec. promises is fullfilled it will straight forward print that without waiting for the others.
const pro1= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Pro1 Success"), 3000);   
})

const pro2= new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("Pro2 Success"), 1000);   
     setTimeout(() => reject("Pro2 Fails"), 1000);    // It willn't wait for others to settle, it will print an error
})

const pro3= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Pro3 Success"), 2000);   
   // setTimeout(() => reject("Pro3 Fail"), 2000);      
})

Promise.race([pro1,pro2,pro3]).then((res)=>{
    console.log(res);
})                                           
.catch((err)=>{
    console.error(err);   // For catching the error
})


 // 4. Promise.any()
 // It will wait for the first settled promise

 const prom1= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Prom1 Success"), 3000);   
})

const prom2= new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("Prom2 Success"), 1000);   
     setTimeout(() => reject("Prom2 Fails"), 1000);    
})

const prom3= new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Prom3 Success"), 2000);   
   // setTimeout(() => reject("Prom3 Fail"), 2000);      
})

Promise.race([prom1,prom2,prom3]).then((res)=>{
    console.log(res);
})                                           
.catch((err)=>{
    console.error(err);   // For catching the error
})

// If the very first is rejected, it will still wait and find the successfull one and console it.