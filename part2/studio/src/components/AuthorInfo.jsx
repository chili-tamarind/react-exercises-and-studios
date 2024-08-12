import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

  const recipeAurthorName = <div> {recipedata[0].author} </div>;
  const recipeAurthorImage = <img className = "authorImage" src ={recipedata[0].authorImage} alt ={recipedata[0].recipeAurthorName}/>;
  
  let url = recipedata[0].website;
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
