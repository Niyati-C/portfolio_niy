import React from 'react'
import './ExtraC.css'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import sports1 from '../../assets/sports1.jpg'
import sports2 from '../../assets/sports2.jpg'
import sports3 from '../../assets/sports3.jpg'
import sports4 from '../../assets/sports4.jpg'
import sports5 from '../../assets/sports5.jpg'
import sports6 from '../../assets/sports6.jpg'
import sports7 from '../../assets/sports7.jpg'
import sports8 from '../../assets/sports8.jpg'

import art1 from '../../assets/art1.jpg'
import art2 from '../../assets/art2.jpg'
import art3 from '../../assets/art3.jpg'
import art4 from '../../assets/art4.jpg'
import art5 from '../../assets/art5.jpg'
import art6 from '../../assets/art6.jpg'

// import Swiper core and required modules for creating an image carousel using swiperJS
import {Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const sports_images = [
  {img:sports1},
  {img:sports2},
  {img:sports3},
  {img:sports4},
  {img:sports5},
  {img:sports6},
  {img:sports7},
  {img:sports8}

]
const art_images = [
  {img:art1},
  {img:art2},
  {img:art3},
  {img:art4},
  {img:art5},
  {img:art6}
]

const ExtraC = () => {

  return (
    <section id='extra'>
      <h5>Extra Curricular</h5>
      <h2>My Achievements</h2>
      <hr />
      <h3 className='extra_title'>Sports</h3>
      <p className='extra_p'>
     I've been the Gujarat state champion for many years and represented my state in various national level competitions as a 100m hurdler.
     I was the University Athletics and Volleyball girls team captain/co-ordinator. I'm glad that I've had a chance to organize events and lead my teams in many inter university competitions as well.
      </p>
      <div className='container cards'>
        <div>
        <Swiper navigation={true}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      className="container extra_container">
        {
        sports_images.map(({img}, index) => {
          return (
            <SwiperSlide key={index} className='extra_item'>
          <div className='extra-image'>
            <img src={img}/>
          </div>
          <h5 className='extra_content'>Athletics/Volleyball</h5>
            
        </SwiperSlide>
        
          )
        })
        
      }
      </Swiper>
      
        </div>
        <hr />
        <h3 className='extra_title'>Art</h3>
        <p className='extra_p'>
      Drawing is like meditation. I've always found sketching as a stress relieving hobby. Here is some of my work.
      </p>

        <div>
        <Swiper navigation={true}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      className="container extra_container">
        {
        art_images.map(({img}, index) => {
          return (
            <SwiperSlide key={index} className='extra_item'>
          <div className='extra-image'>
            <img src={img}/>
          </div>
          <h5 className='extra_content'>Sketches</h5>
            
        </SwiperSlide>
        
          )
        })
      }
      </Swiper>
        </div>

      </div>

     
      <hr />
    </section>
  
  )

}

export default ExtraC
