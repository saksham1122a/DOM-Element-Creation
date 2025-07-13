// these are higher order functions in javascript - map(), filter(), reduce()
const arr = [5,3,1,2,6];

const practice = arr.map((x) => x*2);
console.log(practice);
function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}
const output=arr.map(double);
console.log(output);

const result=arr.map(triple);
console.log(result);

const binaryResult = arr.map(binary);
console.log(binaryResult);
 // Another way to do the same by passing the logic as an argument of the map function.
const result1 = arr.map(function binary(x){
    return x.toString(2);
})
console.log(result1);
// one more
const result2 = arr.map((x) =>x.toString(2));
console.log(result2);



// Filter Method - It is used to filter the values from an array

const arra= [5,1,3,2,6];
const odd = arra.filter((x) => {
    return x%2===1}
)
console.log(odd);

const even = arra.filter((x) => {
    return x%2===0;
})
console.log(even);

const ex = arra.filter((x) =>{
    return x>4;
})
console.log(ex);



// reduce - reduce method is used at a place where you have to take all the elements of the arrayand come out with a single value out of them.

const valuess = [5,1,3,2,6];
const outputt = valuess.reduce(function(acc, curr){  // acc is accumulator which is used to iterate over each value of the array where curr is current which represent current value
    acc= acc + curr;     // acc acts as sum here and curr acts as the current independent value
    return acc;
}, 0);   // Here 0 is the current value
console.log(outputt);


const maximum = valuess.reduce(function(max, curr){
    if (curr > max){
        max = curr;
    }
    return curr;
}, 0);   // For now our initial value is 0
console.log(maximum);


const users = [
    {firstName: "Saksham", lastName: "Nanda", age:20},
    {firstName: "Samakash", lastName: "Nanda", age:18},
    {firstName: "Saksham", lastName: "Nanda", age:20},
    {firstName: "Elon", lastName: "Musk", age:54},
    {firstName: "Donald", lastName: "Trump", age:79},
]


// List of full names
const names = users.map(x => x.firstName + " " + x.lastName);
console.log(names);


// To find the users with same age

const age = users.reduce(function(acc, curr){
 if (acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
 } else{
    acc[curr.age] =1;
 }
 return acc;
}, {});
console.log(age);

// First names of the users whoose age is less than 30

const person = users.filter((x)=> x.age<30).map((x) => x.firstName
);
console.log(person);