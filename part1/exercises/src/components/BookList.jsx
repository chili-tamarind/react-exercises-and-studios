import React from 'react';
import classes from './CompoList.module.css';

export default function BookList() {
   let pageTitle = "My Booklist";
   let book1 = "https://m.media-amazon.com/images/I/918YYGY+I5L._SL1500_.jpg";
   let book2 = "https://cdn001.tintin.com/public/tintin/img/static/tintin-and-the-picaros/tintin-and-the-picaros.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61HipoDv-RL._SL1299_.jpg";

   return (
      <div>
      <h3 className = {classes.bookHeader}>My Book List</h3>
      <img className = {classes.bookImage} src={book1} alt="The Famous Five Collection 4" />
      <img className = {classes.bookImage} src={book2} alt="Tintin and the Picaros" />
      <img className = {classes.bookImage} src={book3} alt="Ernest et Célestine" />
      </div>      
   );
}