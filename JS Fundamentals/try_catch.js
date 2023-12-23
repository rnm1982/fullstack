function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    } catch (error) {
      console.error('Error:', error.message);
      // Handle the error
    }
  }
  
  // Example usage
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(8, 0)); // Output: Error: Division by zero is not allowed.
  