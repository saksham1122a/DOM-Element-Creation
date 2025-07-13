/**  Async and Await is used to handle Promises.
 * What is async?
 * 
 * 
*   // async method always returns a promise
    const p = new Promise((resolve, reject)=>{
        resolve("Resolved Successfully");
    });


    async function getData(){
        return p;
    }
    const dataPromise = getData();
    dataPromise.then((res) => console.log(res));

 * what is await?
 // Await is a keyword that can only be used inside a async function

        const p = new Promise ((resolve, reject) =>{
            resolve("Promise resolved!");
        });

        async function handlePromise(){
            const data = await p;
            console.log(data);
        }
        handlePromise();


 * How async await works behind scenes?
 * Examples of using async and await
 * Error Handling
 * Interviews
 * Async await vs Promises.then/.catch 
 */



 const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved successfully!");
    }, 10000);
 })
// JS Engine was waiting for the promise to be resolved in async/await method.
 async function handlePromise(){                                                            // function getData(){
    console.log("Hii"); // this will instantly be printed coz. used before await
    const value = await p;                                                                 // p.then((res) => console.log(res));
    console.log("Saksham Nanda");                                                          // console.log("Saksham Nanda");
    console.log(value);                                                                    // }
 }                                                                                         // getData()
 handlePromise();


 // In above 2 examples we've seen the one and the most important point why we used async/ await methods over normal functions.
// On the left side with async and await method we delayed the resolved promise for 10sec. and below await we console something, as usual
// the output should be first the value consoled below and then the resolved Promise value but in async/await every value have to wait till the time delay happens.

// In the right side with normal function the below console value will get printed and later the delayed value. 