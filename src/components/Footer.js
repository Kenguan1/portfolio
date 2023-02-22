import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2023 Kenguan1.github.io</p>
    </div>
  )
}

export default Footer