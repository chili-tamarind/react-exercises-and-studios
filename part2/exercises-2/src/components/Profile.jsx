import './styles.css';
import Button from './Button';
import oceans from './oceans.json';



const listItem = oceans.map(ocean =>
   <div className="container">
      <div key={ocean.id}  className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <h1>{ocean.name}</h1>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
            < Button /> 
         </ul>
      </div>
      <div key={ocean.id}  className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <img src={ocean.image} alt={ocean.name} className="img"/>
      </div>
   </div>

);

function Profile()
{
   return(
      <>
            {listItem}
            
      </>
   );
}

export default Profile;