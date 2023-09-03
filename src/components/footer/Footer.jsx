import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


function Footer() {
  return (
    <footer>
      <a href='/#' class='footer__logo'>Elidiane Bezerra</a>
      <ul class='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div class='footer__socials'>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/elidiane-bezerra/'><FaLinkedin/></a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/elidiane-bezerra/'><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer