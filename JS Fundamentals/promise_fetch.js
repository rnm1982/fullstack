// Using Fetch API with Promises
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1') // Fetch data from an API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response body as JSON
      })
      .then(data => {
        console.log('Fetched data:', data); // Output fetched data
        return data; // Return the parsed data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error); // Output any errors
      });
  }
  
  // Call the function to fetch data
  fetchData();
  