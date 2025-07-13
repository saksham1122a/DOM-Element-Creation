// FOR LOOP
 for(let i=0; i< 10; i++) {
    console.log(`For Loop Numbers: ${i}`);
}  
// WHILE LOOP
 let i= 0;
 while (i< 10) {
     console.log(`While Loop Numbers: ${i}`);
     i++;
 }

 for(let i=1; i<=10; i++){
    console.log(`5 X ${i} = ${5*i}`);  // Multiplication
 }


for(let i=1; i<=5; i++){
    console.log(`${i} X  ${i} = ${i*i}`);   // Square
}


 for(let i=1; i<=100; i=i+2){
    console.log(i);   // ODD
 }




    let name = "Saksham";
    for(i=0; i<name.length; i++){
        console.log(name[i]);
    }

let names = ['Saksham', 'Tejveer', 'Sanjeev', 'zxkjvna'];
for(i=0; i<names.length; i++){
    console.log(names[i]);
}


let namess = ['Saksham', 'Tejveer', 'Sanjeev', 'zxkjvna'];
for( let i=0; i<namess.length; i++ ){
    console.log("Mr." + namess[i]);
}

for(let i=1; i<=10; i++){
  if(i==3){
   continue;
  }
console.log(i);
}


for (let i=1; i<=10; i++){
    if(i==3 || i==5){
        continue;
     }
     console.log(i);
}

let fruits = ['Saksham', 'Tejveer', 'Sanjeev', 'zxkjvna'];
for(i=0; i<fruits.length; i++){
    if(i=='Tejveer' || i=='Sanjeev'){
        continue;
    }
    console.log(fruits);
}