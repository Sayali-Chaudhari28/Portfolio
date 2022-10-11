import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__options'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sayalinc2001@gmail.com</h5>
          </article>
          
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/snc28/' target={'_blank'} rel="noopener noreferrer">Connect with me on LinkedIn</a>
          </article>
        </div>
      </div>
      
    </section>
  )
}
