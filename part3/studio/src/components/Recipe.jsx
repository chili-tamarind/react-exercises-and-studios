import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.saltfatacidheat.com/fat/ligurian-focaccia";
   let authorPhoto = "https://people.com/thmb/g-iTZUBSjr63HW3AWT9oatkXSPA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(709x0:711x2):format(webp)/samin-nosrat-e1569343352281-572a0f0d782045c4a18462e9cba3c308.jpg";
   let authorName = "Samin Nosrat";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", width:"200px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "2½ cups (600 grams) lukewarm water",
      "½ teaspoon active dry yeast",
      "2½ teaspoons (15 grams) honey",
      "5 1/3 cups (800 grams) all-purpose flour",
      "2 tablespoons (18 grams) Diamond Crystal Kosher salt or 1 tablespoon fine sea salt",
      "¼ cup (50 grams) extra-virgin olive oil, plus more for pan and finishing",
      "Flaky salt for finishing"
   ];
   
   let ingredientsListItems = ingredients.map((ingredient, index) => {
      return <li key={index}> {ingredient}</li>
   });

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientsListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Ligurian Focaccia</h1>
            <p>Making this gorgeously brown and perfectly crisp bread is also pretty damn relaxing — you just stir together a few ingredients, let it sit overnight, then shape and bake until golden. The salt brining step will seem weird at first, but it’s absolutely essential.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img 
         src="https://images.squarespace-cdn.com/content/v1/5ba0290ecc8fedfc087b5594/1538465555190-JORW83WKJMHE7YU0J9E0/Salt_Fat_Acid_Heat_S01E01_12m27s17926f.png?format=500w" 
         alt="Salt, Fat, Acid, Heat" 
         class="imageUpdates" 
      />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
