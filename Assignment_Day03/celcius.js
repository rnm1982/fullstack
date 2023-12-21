const prompt=require("prompt-sync")();
/* // Javascript Program to Convert Celsius to Fahrenheit 
const prompt=require("prompt-sync")();
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  // Example usage:
  const celsiusValue = parseInt(prompt("Enter temperature in celcius: ")); // Replace with the Celsius value you want to convert
  const convertedValue = celsiusToFahrenheit(celsiusValue);
  console.log(`${celsiusValue}C Cis equal to ${convertedValue}F`); */

// Approach:2
// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);