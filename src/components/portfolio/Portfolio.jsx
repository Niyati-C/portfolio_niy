import React from 'react'
import './Portfolio.css'
import {BsGithub} from 'react-icons/bs'
import portfolio1 from '../../assets/portfolio1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>NiyYelpCamp</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a title</h3>
          <div className='portfolio_item-content'>
            
            <a href="https://github.com/Niyati-C" className='btn' target="_blank" rel="noreferrer"><BsGithub /> </a>
            <a href="https://niyyelpcamp.onrender.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
