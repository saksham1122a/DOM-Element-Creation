const score = 400;
console.log(score);


const balance = new Number (100)  // way to assign a value as number, which will return its type as number also on the console
console.log(balance);

console.log(balance.toString().length);    // convert to string
console.log(balance.toFixed(2));    // add decimals till 2 at the end

const otherNumber = 123.8951;
console.log(otherNumber.toPrecision(4));    // modify the last infinity value by increasing the value of the last number by 1 eg. 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-In'));   // to indian precision


/// MATHS
// console.log(Math.abs(-4));    // covert only negative values to positive
// console.log(Math.round(4.3)); // round off to the nearest value i.e 4
// console.log(Math.round(4.6)); // round off to the nearest value i.e 5

// console.log(Math.ceil(4.2)); // always took the bigger value i.e., 4
// console.log(Math.floor(2.9));   // always took smaller values
// console.log(Math.min(2,9,4,6,7));  // return min value from an array
// console.log(Math.max(2,9,5,3,2,4,6)); // return max values

console.log(Math.random());  // always return a random value when runs between 0-1
