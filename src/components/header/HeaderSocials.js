import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './header.css'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sayali-chaudhari-2801/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Sayali-Chaudhari28' target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  )
}
