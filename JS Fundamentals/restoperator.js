// Rest parameter collects all remaining arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Usage of the sum function with rest parameter
  console.log(sum(1, 2)); // Output: 3
  console.log(sum(1, 2, 3, 4)); // Output: 10
  