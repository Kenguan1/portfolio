import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import htmlcssimg from "../assets/htmlcss.png"
import javascriptimg from "../assets/javascript.png"
import reactimg from "../assets/reacttt.png"
import sassimg from "../assets/sass.png"
import flaskimg from "../assets/flask.png"
import bootstrapimg from "../assets/bootstrap.png"


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Camilo</h2>
        <div className='prompt'>
          <p> Junior Front-end Developer, currently in my fifth year of Computer Science degree </p>
          <a href='mailto: camilo.kenguan@utp.edu.co' target="_blank" rel="noopener noreferrer"> <EmailIcon /> </a> {/* rel="noopener noreferrer" arregla una vulnerabilidad del _blank */}
          <a href='https://github.com/Kenguan1' target="_blank" rel="noopener noreferrer"> <GithubIcon /> </a> 
          <a href='https://www.linkedin.com/in/camilo-kenguan-sanchez-202117251/' target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </a> 
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <img src={htmlcssimg} alt='htmlcss' className='iconolenguaje'  />
            <img src={javascriptimg} alt='js' className='iconolenguaje' />
            <img src={reactimg} alt='react' className='iconolenguaje' />
            <img src={sassimg} alt='sass' className='iconolenguaje' /> 
            <img src={flaskimg} alt='flask' className='iconolenguaje' />
            <img src={bootstrapimg} alt='bootstra p' className='iconolenguaje' />
            {/* <span> Sass/Bootstrap/React/Flask, focusing on learn React </span> */}
            
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span> Javascript/Python/MySQL </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span> Javascript/Python/C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home