/* In JavaScript, a callback function is a function that is passed as an argument to another function
and is executed after some specific action occurs or when a particular task is completed. */

// Example of a function that takes a callback
function performAction(value, callback) {
    console.log(`Performing action with value: ${value}`);
    callback(value); // Invoking the callback function
  }
  
  // Callback function definition
  function callbackFunction(value) {
    console.log(`Callback executed with value: ${value}`);
  }
  
  // Using performAction and passing callbackFunction as a callback
  performAction(10, callbackFunction);
  