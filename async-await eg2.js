    const API_URL = "https://api.github.com/users/saksham1122a"
    // const API_URL = "https://invalid/user/saksham1122a"
    async function handlePromise(){
    try {
         const data = await fetch(API_URL);
    const jsonValue = await data.json();
        console.log(jsonValue);
    } catch(err){
        console.log(err);
    }
   
    }
    handlePromise();