import React from 'react'
import { useNavigate } from 'react-router-dom'


function Projectitem({ image, name, id, skillsimg}) {
  const navigate = useNavigate() //esta func sirve para redireccionar
  return (
    <div 
      className='projectItem'
      onClick={ () => {
        navigate("/project/" + id)
      }} >
      <div style={{backgroundImage: `url(${image})`}} className='bgImage' />
      <h1> {name} </h1>
      <div className='container-iconos'>
      {skillsimg && skillsimg.length > 0    // En caso de que no se manden imagenes de los lenguajes que no haya error y se muestre el <p> No hay imágenes disponibles para mostrar</p>
        ? skillsimg.map(img => {
            return <img src={img} alt='img' className='iconolenguajemini'  />
          })
        : <p>No hay imágenes disponibles para mostrar</p>
      }
      </div>
    </div>
  )
}

export default Projectitem