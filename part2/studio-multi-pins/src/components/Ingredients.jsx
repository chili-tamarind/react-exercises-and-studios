//import recipedata from "./recipe.json";

function IngredientList({ ingredients}) {

  let myIngredientsJSX = ingredients.map((ingredient, index)  => {
    return <li key={index}>{ingredient}</li>
  });

  return (
      <div>
        <h3>Ingredients</h3>
        <ul>{myIngredientsJSX}</ul>            
      </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
