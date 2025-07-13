// Falsy Values in JavaScript
console.log(Boolean(0));    // O will always give false
console.log(Boolean(-0));     // -O will always give false
console.log(Boolean(NaN));     // NaN is falsy 
console.log(Boolean(""));     // Empty string return false
console.log(Boolean(undefined));     // Undefined is falsy 
console.log(Boolean(null));      // Null return false


// Except all return true
console.log(Boolean(" "));   // putting even space between empty string results true

console.log(Boolean(8));
console.log(Boolean("Saksham"));  


//  Exclamatory(not operator) symbol use to change the result
console.log(Boolean(!0)); // By default 0 reutrns false using exclamation(not operator) it will return true
console.log(Boolean(!!0)); // Double Not will make it again what it was i.e., false.
