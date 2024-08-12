import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import recipedata from "./components/recipe.json";


export default function App() {

  const pinsJSC = recipedata.map((recipe, index) => {
    return (
      <div key={index}> 
        <RecipeImage recipeImage={recipe.recipeImage} name={recipe.name} />
        <RecipeName name={recipe.name}/>
        <RateARecipe rating={4} />
        <Button saveButton={true} />
        <AuthorInfo recipe={recipe}/>
        <IngredientList ingredients={recipe.ingredients}/>
      </div>
    )
  })
  return (
    <>
      {pinsJSC}
    </>
  );
}
