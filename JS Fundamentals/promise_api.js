function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users1234') // Replace with your API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          return response.json();
        })
        .then(data => {
          resolve(data); // Resolve the Promise with the fetched data
        })
        .catch(error => {
          reject(error); // Reject the Promise if there's an error
        });
    });
  }
  
  // Using the fetchData function
  fetchData()
    .then(data => {
      console.log('Fetched data:', data);
      // Process the fetched data here
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle errors here
    });
  