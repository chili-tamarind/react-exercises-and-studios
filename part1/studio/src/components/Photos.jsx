import React from 'react';
import styles from './Description.module.css';

export default function RecipePhoto(){
   
   return (
      <div>
         <h3>Recipe Photo</h3>
         <img src="https://www.butterbeready.com/wp-content/uploads/2022/12/DK6A8761-768x1152.jpg" alt="recipe photo" className = {styles.imageUpdates} />
      </div>
   );
}