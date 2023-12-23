// Function returning a Promise (simulating an asynchronous operation)
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulating success or failure (true for success, false for failure)
  
        if (success) {
          resolve('Data successfully fetched!');
        } else {
          reject('Error: Failed to fetch data!');
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using async/await to consume the Promise
  async function fetchData() {
    try {
      const result = await getData(); // Await the Promise to resolve
      console.log(result); // Output if the Promise resolves successfully
    } catch (error) {
      console.error(error); // Output if there's an error in the Promise
    }
  }
  
  // Call the async function
  fetchData();
  