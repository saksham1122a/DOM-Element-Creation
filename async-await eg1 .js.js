const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
         resolve("Promise Resolved Successfully!");
    }, 10000);                                // Runs after 10 sec.
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
         resolve("Promise Resolved Successfully!");
    }, 5000);                                // Runs after 5 sec.
});


async function handlePromise(){
    console.log("Hii");
    const val1 = await p1;
    console.log("Saksham Nanda1");
    console.log(val1);

   
    const val2 = await p2;
    console.log("Saksham Nanda2");
    console.log(val2);
}
handlePromise();
// This is a bit tricky question. According to us, the value consoled over await will get printed and then after 5 seconds the promise2 will get printed and later promise one
// But here, call stack will print the console value first and wait for full ten sec. and print promise 2 and then promise one immediately.


// const pr1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//          resolve("Promise Resolved Successfully!");
//     }, 5000);                                // Runs after 10 sec.
// });

// const pr2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//          resolve("Promise Resolved Successfully!");
//     }, 10000);                                // Runs after 5 sec.
// });


// async function handlePromise(){
//     console.log("Hii");

//     const val1 = await pr1;
//     console.log("Saksham Nanda1");
//     console.log(val1);

   
//     const val2 = await pr2;
//     console.log("Saksham Nanda2");
//     console.log(val2);
// }
// // But here pr1 will execute and then pr2

// handlePromise();