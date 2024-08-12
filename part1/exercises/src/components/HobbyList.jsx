import React from 'react';
import classes from './CompoList.module.css';

export default function HobbyList() {  
   let hobbyLinks = [
      "https://en.wikipedia.org/wiki/Sleep",
      "https://en.wikipedia.org/wiki/Binge-watching",
      "https://en.wikipedia.org/wiki/Computer_programming"
   ];

   return (
      <div>
      <h3 className = {classes.hobbyHeader} >My Hobbies</h3>
      <ul><a className = {classes.hobbyURL} href = {hobbyLinks[0]}> Sleeping</a></ul>
      <ul><a className = {classes.hobbyURL} href = {hobbyLinks[1]}> Binge-watching</a></ul>
      <ul><a className = {classes.hobbyURL} href = {hobbyLinks[2]}> Computer programming</a></ul>
      </div>      
   );
}