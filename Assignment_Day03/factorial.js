const prompt=require('prompt-sync')();
/* 
// Approach:1
function factorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Example usage:
  const num = parseInt(prompt("Enter number to calculate factorial: ")); // Replace with any number for which you want to find the factorial
  const result = factorial(num);
  console.log(`The factorial of ${num} is: ${result}`); */

  // Approach:2
  // program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
  