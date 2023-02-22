import React from 'react'
import Projectitem from '../components/Projectitem'
import coinbaseimg from "../assets/coinbaseclon.png"
import carelibro from "../assets/carelibro.png"
import { ProjectList } from '../helpers/ProjectList'

import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return <Projectitem id={index} name={project.name} image={project.image} skillsimg={project.skillsimg} /> //en vez de llamar a Projectitem varias veces llamamos a ProjectList que tiene los atributos de cada proyecto y con map() recorremos ProjectList, luego abstraemos cada atributo para pasarselo al complemento ProjectItem, de esta manera cúando queramos agregar un proyecto sólo tendremos que modificar el ProjectList.js 
        })}
      </div>
    </div>
  )
}

export default Projects