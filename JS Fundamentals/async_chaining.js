// Asynchronous operation 1
function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('First result');
      }, 1000);
    });
  }
  
  // Asynchronous operation 2
  function asyncOperation2(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Second result using ${data}`);
      }, 1500);
    });
  }
  
  // Chaining async/await operations
  async function chainedOperations() {
    try {
      const result1 = await asyncOperation1();
      console.log(result1); // Logs: "First result"
  
      const result2 = await asyncOperation2(result1);
      console.log(result2); // Logs: "Second result using First result"
  
      // You can continue chaining more async operations here if needed
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Calling the async function
  chainedOperations();
  