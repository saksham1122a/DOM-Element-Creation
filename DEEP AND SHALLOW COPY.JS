// OBJECT COPY

let obj={
    name:"Saksham"   // Name is assigned to a key
};

let user = obj;   // obj is now assigned to the user also means user = Saksham
user.name="Samakash";   // We changed the value of the user from Saksham to Samakash
console.log(obj);   // Now we're calling obj where name is assigned as Saksham but when we console it it will return Samakash

// Because when we copy object to another object, it doesn't copy the value but copy memory reference

// But this isn't the result with variable Let's try with an example

let x="Saksham";
let y=x;   // Now x and y have the same values which is Saksham
y="Samakash";   // changed the value of y from Saksham to Samakash
console.log(x);  // It will return the same value it is assigned before.

// SHALLOW COPY
let obj1={
    name:"Saksham"   
};

// let user1 = Object.assign({},obj1);   // 1st method to change the values of the objects
let user1 = {...obj1}  // 2nd method using Spread function
user1.name="Samakash";   
console.log(obj1); 
console.log(user1); 

// But this method is applicable to one level only

// Here use the concept of Deep Copy because we have more than one level of objects
let obj2 ={
    name:"Saksham",
    address:{
        city:"noida",
        state:"UP"
    }
};
let user2 = JSON.parse(JSON.stringify(obj2));  // First way of doing this, we converted the object into string and later into object again to get the same results we want
user2.address.city="Gurgaon";

console.log(obj2);
console.log(user2);

//Limitations - Deep Copy wouldn't work when we are dealing with function and dates inside the code
let obj3 ={
    name:"Saksham",
    address:{
        city:"noida",
        state:"UP"
    },
    getData:function(){
        return "all data is here"      // this will run for obj3 but couldn't run for user3
    }
};
let user3 = JSON.parse(JSON.stringify(obj3));  // First way of doing this, we converted the object into string and later into object again to get the same results we want
user3.address.city="Gurgaon";

console.log(obj3);
console.log(user3);