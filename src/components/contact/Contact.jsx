import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncgyaco', 'template_9ef49co', form.current, 'FodKb16bg2D3_LxrP')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elidiane.asb@gmail.com</h5>
            <a href='mailto:elidiane.asb@gmail.com'>Send an email</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkdIn</h4>
            <h5>elidiane-bezerra</h5>
            <a href='https://www.linkedin.com/in/elidiane-bezerra/'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact