import './styles.css';

function Button() {

   function onLearnMore(){
      alert("Splash Splash Love");
   };   

   return ( 
      <button className="learnButton" onClick={onLearnMore}>
         Learn More!
      </button>
   );
}

export default Button;