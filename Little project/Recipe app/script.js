// 275d58779ccf4e22af03e792e8819fff
// https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}

const API_KEY = '275d58779ccf4e22af03e792e8819fff';
const recipeListEl = document.getElementById('recipe-list');

function displayRecipes(recipesValue) {
  recipesValue.forEach((recipe) => {
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');

    const recipeImgEl = document.createElement('img');
    recipeImgEl.src = recipe.image;

    const recipeTitleEl = document.createElement('h2');
    recipeTitleEl.innerText = recipe.title;

    const recipeIngredientEl = document.createElement('p');
    recipeIngredientEl.innerHTML = `<strong>Ingredients : </strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(',')}`;

    recipeListEl.appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function initialRecipes() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

initialRecipes();
