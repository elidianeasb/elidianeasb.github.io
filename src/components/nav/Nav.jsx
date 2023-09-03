import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {useState} from 'react'

function Nav() {
  const [activeNav, setAtiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setAtiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setAtiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setAtiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setAtiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setAtiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav