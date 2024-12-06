function foo(a, b) {
  if (b === 0) {
    // Handle division by zero appropriately
    // throw new Error('Division by zero'); //Option 1: Throw an error 
    return Infinity; // Option 2: Return Infinity
    // return NaN; //Option 3: Return NaN
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: Infinity