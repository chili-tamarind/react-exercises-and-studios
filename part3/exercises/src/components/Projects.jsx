import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length-1)
    {
      setIndex(index + 1);
    }
    else
    {
      setIndex(0);
    }
  }

  let projects = data.projects;
  let project = projects[index];

  return (
    <div>
      <button 
        className='leButton' onClick={handleClick}> Next Seogi 
      </button>

      <div className='picDiv'>
        <h2> {project.name} </h2>
        <p> <span className='bolder'>Technique:</span> {project.technique}</p>    
        <img src={project.photoUrl} alt={project.alt} height="350px"/>
      </div>
      
    </div>
  );
}
