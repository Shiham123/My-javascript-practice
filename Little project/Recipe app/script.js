const apiKey = '275d58779ccf4e22af03e792e8819fff';
const recipeListEl = document.getElementById('recipe-list');

function getRecipes() {
  fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`)
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getRecipes();
