import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {RiMedalFill} from 'react-icons/ri'
import {BsChatTextFill} from 'react-icons/bs'
import { useState } from 'react'

// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState)

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /> </a>
      <a href="#about" title='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /> </a>
      <a href="#experience" title='Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkStarFill /> </a>
      <a href="#extra" title='Extra Curricular' onClick={() => setActiveNav('#extra')} className={activeNav === '#extra' ? 'active' : ''}><RiMedalFill /> </a>
      <a href="#contact" title='Contact Me' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatTextFill /> </a>
    </nav>
  )
}

export default Nav
