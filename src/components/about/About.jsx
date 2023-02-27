import React from 'react'
import './About.css'
import ABOUTME from '../../assets/about_me.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {FcReadingEbook}  from 'react-icons/fc'
import {IoIosFitness} from 'react-icons/io'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
          <div className="about_me">
            <div className="about_me-image">
              <img src={ABOUTME} alt="About Image"></img>
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaGraduationCap className='about_icon'/>
                <h5>Undergrad</h5>
                <small>Manipal University Jaipur</small>
              </article>
              <article className='about_card'>
                <FcReadingEbook className='about_icon'/>
                <h5>Work</h5>
                <small>Upcoming Senior Analyst @capgemini</small>
              </article>
              <article className='about_card'>
                <IoIosFitness className='about_icon'/>
                <h5>Part-Time</h5>
                <small>Upcoming Personal Fitness Trainer</small>
              </article>
            </div>

            <p>
            Heyy! That's right. I'm a final-year IT student. <br/> As much as I love my work, I'm not someone who codes all day. I'm someone who loves being around people and making new friends.
              <br/>I'm also a hurdler. Which means I love jumping over obstacles both on and off the track.
              <br/>You might say I have a bit of a social butterfly personality, but don't worry, I promise not to flutter away from you too quickly!<br/>
              So, if you want to,

            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>

      </section>
    </div>
  )
}

export default About
