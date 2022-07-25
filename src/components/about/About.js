import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'

export const About = () => {
  return (
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 months Internship</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 months Internship</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 months Internship</small>
            </article>
          </div>

          <p>
            
          </p>
        </div>
      </section>
  )
}
