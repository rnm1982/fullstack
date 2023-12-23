const add = function (a, b) {
    return a + b;
  };
  
  console.log(add(3, 5)); // Output: 8
  
//   Immediately Invoked Function Expression (IIFE)
(function (message) {
    console.log(message);
  })('Hello, this is an IIFE'); // Output: Hello, this is an IIFE


//   Using Arrow Functions as Anonymous Functions
const multiply = (x, y) => x * y;

console.log(multiply(4, 6)); // Output: 24




