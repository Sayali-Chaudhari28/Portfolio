import React from 'react'
import './header.css'
import CTA from './CTA'
// import cv from '../../assets/cv.pdf'
// import ME from '../../assets/profile.jpg'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Sayali Chaudhari</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA /> 
        <HeaderSocials />
     
        
        {/* <div className='me'>
          <img src={ME} alt='' />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
