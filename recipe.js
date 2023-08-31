let recipeData;
let isEmpty = 1;


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
      recipeData = data;
      return data; // Return the data in case you want to use it elsewhere
    })
    .catch((error) => {
      // Handle errors and log them
      console.error('Error:', error);
      throw error; // Re-throw the error for further handling if needed
    });
    
  }


  async function findButton() {
    console.log("find button clicked");
    const includedIngredients = document.getElementById("includedElement").value;
    console.log(includedIngredients);

    try {
        await fetchRecipesByIngredients(includedIngredients);
        populateList();
    } catch (error) {
        console.error('Error:', error);
    }
}


async function populateList(){
    console.log("test button clicked");

    var myList = document.getElementById("listSection");
    
    
    for (var i = 0; i < recipeData.length; i++) {
        // Create a new list item element
        var listItem = document.createElement("li");
      
        // Check if the item is an object, and if so, convert it to a string representation
        var itemText = typeof recipeData[i].title === "object" ? JSON.stringify(recipeData[i].title) : recipeData[i].title;
      
        // Set the text content of the list item to the converted itemText
        listItem.textContent = itemText;
      
        // Append the list item to the <ul> element
        myList.appendChild(listItem);
      }

}

