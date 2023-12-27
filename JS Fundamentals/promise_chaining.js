// First asynchronous operation returning a Promise
function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('First result');
      }, 1000);
    });
  }
  
  // Second asynchronous operation receiving the result of the first operation
  function asyncOperation2(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Second result using ${data}`);
      }, 1500);
    });
  }
  
  // Chaining promises
  asyncOperation1()
    .then(result1 => {
      console.log(result1); // Logs: "First result"
      return asyncOperation2(result1); // Return a new promise
    })
    .then(result2 => {
      console.log(result2); // Logs: "Second result using First result"
      // You can continue chaining more operations if needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
  