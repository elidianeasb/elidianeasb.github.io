import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/elidiane-bezerra/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/elidianeasb" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial