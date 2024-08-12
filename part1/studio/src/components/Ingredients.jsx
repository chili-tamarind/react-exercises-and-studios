import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

   const ingredients = [
      "1/2 cup chopped pecans (or walnuts), for bottom of pan - optional",
      "2 cups all-purpose flour, sifted if lumpy",
      "1 1/2 cups granulated sugar",
      "1 (3.4 ounce) package instant vanilla pudding mix",
      "2 teaspoons baking powder",
      "1 teaspoon kosher salt",
      "1/2 cup (1 stick) unsalted butter, softened",
      "1/2 cup vegetable oil",
      "4 large eggs, at room temperature",
      "1/2 cup whole buttermilk (or whole milk), at room temperature",
      "1/2 cup rum (I use Myers’s Rum)",
      "1 teaspoon vanilla extract",
      "1 teaspoon almond extract"
   ];

   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((ingredient, index) => (
                     <li key={index} className={styles.ingredientList}>{ingredient}</li>
            ))}
         </ul>
      </div>
   );
}