import React from 'react';
import styles from './Description.module.css';

let recipeTitle = "Blow Ya Mind Caribbean Rum Cake";
let recipeShortDesc = "y’all! During the holidays, my dessert table ain’t complete without it. This beauty is unapologetically rum-soaked, buttery, flavorful, nutty, and extra moist. Rum cake is a traditional holiday dessert in a lot of the Caribbean islands. Served up as a dreamy, golden bundt cake that’s soaked in a rich rum glaze!";

export function RecipeAuthor() {
   // https://www.myforkinglife.com/caribbean-rum-cake/
   const authorLink = "https://www.butterbeready.com/best-rum-cake/";
   const authorPhoto = "https://www.butterbeready.com/wp-content/uploads/2020/06/9917620F-D68A-42FC-B0F5-A7FADE48CB1A-768x1365.jpg";
   const authorName = "Quinn";

   return (
      <div className={styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
         <h3>{authorName}</h3>
         <a href={authorLink}>Butter Be Ready®</a>
      </div>
   );
}

class RecipeDescription extends React.Component {
   render() {
      return (
         <div>
            <div>
               <h1>Blow Ya Mind Caribbean Rum Cake</h1>
               <p><strong>Caribbean Rum Cake</strong>, {recipeShortDesc}</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;