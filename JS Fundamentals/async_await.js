async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  }
  
  // Using the fetchData function with async/await
  async function getData() {
    try {
      const fetchedData = await fetchData();
      console.log('Fetched data:', fetchedData);
      // Process the fetched data here
    } catch (error) {
      console.error('Error:', error.message);
      // Handle errors here
    }
  }
  
  // Call the function that uses async/await to fetch and handle data
  getData();
  