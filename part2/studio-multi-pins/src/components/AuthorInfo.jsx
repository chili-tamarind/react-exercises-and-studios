//import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo({ recipe }) {

  const recipeAurthorName = <div> {recipe.author} </div>;
  const recipeAurthorImage = <img className = "authorImage" src ={recipe.authorImage} alt ={recipe.AurthorName}/>;
  
  let url = recipe.website;
  const recipeWebsite = <a href={url} target="_blank"> {url} </a>;
  // target="_blank" opens in new browser tab

  return (
    <div>
      {recipeAurthorImage}
      {recipeAurthorName}
      {recipeWebsite}
    </div>
  ); 
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
