import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'

// for sending emails from emailjs
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d38evn9', 'template_vb62ncz', form.current, 'F5dg8PgK7Wc0s1_1a')
    
    e.target.reset()
  };
  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
              <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>chauhanniyati01@gmail.com</h5>
              <a href="mailto:chauhanniyati01@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className='contact_option'>
              <RiWhatsappFill className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+919664601675</h5>
              <a href="https://api.whatsapp.com/send?phone=919664601675" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className='contact_option'>
              <RiInstagramFill className='contact_option-icon'/>
              <h4>Instagram</h4>
              <h5>_niyati_chauhan☘</h5>
              <a href="https://www.instagram.com/direct/t/340282366841710300949128113997822788394" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          {/* ************** end of contact option ************ */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

        {/* emailJS has been used to send email to me */}

        </div>
      </section>
    </div>
  )
}

export default Contact
