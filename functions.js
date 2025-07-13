// Table of 2
function saksham(num){
    for(let i =1; i<=10; i++){
        console.log(`${num} X ${i}  = ${num*i}`)
    }
}
saksham(2);

//Table of 3

function table(num){
    for(i=1; i<=10;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
table(3);


function add(num1, num2){
    console.log("Addition of two numbers: ", num1 + num2);
}
add(2,4);

sum = 0
function addition(){
      for(i=1; i<=10;i++){
        sum+=i;
    }
    console.log("Sum is:", sum);
}
addition();
function calculateSum(){
    while(i<=10){
        sum+=i;
     }
     console.log(sum);
}
calculateSum();


function cube(num){
    console.log("Volume of cube:",num*num*num);
}
cube(3);

const findCube = function(a){
return a*a*a;
}
console.log(findCube(2));


// Same sum from 1 to 10 but in different manner

let value = 1;
for(let i =2; i<=10; i++){
    console.log(`${value} + ${i} = ${value + i}`);
    value = value + i;
}

console.log(saksham(10,20));

var saksham = function(a,b){
    return a+b;
}

const calculateTable = (num) =>{
    for (let i =0; i<=10; i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
calculateTable(2);

let name = "Saksham";
const convertUpper = () => console.log(name.toUpperCase());
convertUpper();

// We have to find the sum of the arguments passed to a function

function sayHello(){
    console.log(arguments);
}

sayHello(2,4,87)


function calculateAdd(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        if(typeof arguments[i] === 'number'){
            sum+= arguments[i];
        }
    }
    console.log(sum);
}
calculateAdd(4,3,"Saksham",true,5);


 // Spray method
function names(...args){
    console.log(args);
}
names(4,3,"Saksham",true,5)

// function sum(...args){
//     let sum=0;
//     for(let values of sum){
//         sum+=value;
//     }
//     console.log(sum)
// }
// sum(4,2,6);

function calculateMulti(...args){
    let multi =0;

    for(let values of args){
        if(typeof values ==='number'){
            multi += values;
        }
    }
    console.log(multi);
}
calculateMulti(3,5,1);

function calculate(a,b,func){
    console.log("Hello");
    sum();
}
    function sum(){
        let value = a+b;
        console.log(value);
    }
    
calculate(5,6, sum);