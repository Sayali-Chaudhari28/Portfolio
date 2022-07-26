import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/profile1.png'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 months Internship</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>
          <p>
          It is my pleasure to present myself as a positive, enthusiastic, competent and exerienced Web Developer with a wide range
          of skills,qualities, and abalities. My experience includes working both independently and as part of a team on challenging, time-sensitive web development projects that require outstanding creative and technical skills and the ability to ensure everything is optimized for a wide range of platforms.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

        
      </div>
    </section>
  )
}
