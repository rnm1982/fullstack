// Create a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    const success = false; // Simulating success or failure (true for success, false for failure)
    if (success) {
      resolve("Data successfully fetched!"); // Resolve the promise with a success message
    } else {
      reject("Error: Failed to fetch data!"); // Reject the promise with an error message
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// Consuming the promise using .then() and .catch()
myPromise
  .then((successMessage) => {
    console.log(successMessage); // Output if promise is resolved
  })
  .catch((errorMessage) => {
    console.error(errorMessage); // Output if promise is rejected
  });
