import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false); /* usamos State para saber cuando la barra extá extendida o no */

  const location = useLocation(); /* da la informacion de en que route estamos */

  useEffect(() => {             /* queremos que se corra esta funcion si la var location cambia */
    setExpandNavbar(false)
  }, [location])                /* cuando la location cambia setExpandNavbar(false) lo que significa que usará el id "close" y se cerrará la navbar */


  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);  /* si estaba en falso conviertase en true, si estaba en true conviertase en falso */
          }}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to="/portfolio/build/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar