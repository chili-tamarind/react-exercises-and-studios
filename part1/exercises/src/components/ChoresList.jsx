import React from 'react';
import classes from './ChoresList.module.css';

const chores = [
   'Buy new dishwasher',
   'Complete LaunchCode prep work',
   'Buy groceries from Aldi'
];

export default function ChoresList() {
   return (
         <div>
            <h3 className={classes.choresHeading}>My Chores</h3>
            <ul>
               {chores.map((chore, index) => (
                     <li key={index} className={classes.choresText}>{chore}</li>
               ))}
            </ul>
         </div>
   );
}