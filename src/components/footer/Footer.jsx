import React from 'react'
import './Footer.css'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Niy</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#extra">Extra Curricular</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer_socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><RiInstagramFill size={20}/></a>
      </div> */}

      <div className="footer_copyright">
        <small>&copy; Niy's Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
