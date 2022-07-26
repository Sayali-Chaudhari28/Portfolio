import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer__logo'></a> */}

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className='footer__socials'>
        <a href='https://twitter.com/SayaliC03632508'><IoLogoTwitter /></a>
      </div> */}

      <div className='footer__copyright'>
        <small>Made by Sayali</small>
      </div>
    </footer>
  )
}
