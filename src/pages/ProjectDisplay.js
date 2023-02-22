import React from 'react'
import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectDisplay() {
    const { id } = useParams(); //aquí establecemos que la id va a ser la info que va después de "project/" (line 18 de App.js), useParams() sirve para extraer este dato 

    const project = ProjectList[id]; // la id que vamos a pasar a la URL es la pos de un project del array ProjectList
  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} />
        <p>
            <b>Skills: </b>{project.skills}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a> 
    </div>
  )
}

export default ProjectDisplay