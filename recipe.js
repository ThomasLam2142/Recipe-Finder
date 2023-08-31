// Replace 'YOUR_API_KEY' with your actual API key



function fetchRecipesByIngredients(ingredients) {

    const baseUrl = 'https://api.spoonacular.com/';
    const apiKey = '2a9a9c88bd524e7aa76cc7ccd2293cbd';
    // Join the ingredients into a comma-separated string
    const ingredientsString = ingredients;

    //const ingredientsString = ingredients.join(',');
  
    // Example endpoint: Recipe Search by Ingredients
    const endpoint = `recipes/findByIngredients?ingredients=${ingredientsString}&apiKey=${apiKey}`;
  
    // Construct the URL with the API key
    const apiUrl = `${baseUrl}${endpoint}`;
  
    // Make the GET request and return a Promise
    return fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Log the recipe data to the console
      console.log(data);
      return data; // Return the data in case you want to use it elsewhere
    })
    .catch((error) => {
      // Handle errors and log them
      console.error('Error:', error);
      throw error; // Re-throw the error for further handling if needed
    });
  }


function findButton(){
    console.log("find button clicked");
    const includedIngredients = document.getElementById("includedElement").value;
    console.log(includedIngredients);
    fetchRecipesByIngredients(includedIngredients);
}

