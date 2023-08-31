// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '2a9a9c88bd524e7aa76cc7ccd2293cbd';
const baseUrl = 'https://api.spoonacular.com/';

// Example endpoint: Get a random food joke
const endpoint = 'food/jokes/random';

// Construct the URL with the API key
const apiUrl = `${baseUrl}${endpoint}?apiKey=${apiKey}`;

let 

// Make the GET request
/*fetch(apiUrl)
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Do something with the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });
*/


function findButton(){
    console.log("find button clicked");
    const includedIngredients = document.getElementById("includedElement").value;
    console.log(includedIngredients);
}

