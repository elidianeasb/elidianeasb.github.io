import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import HeaderSocial from './HeaderSocial'
import { TypeAnimation } from 'react-type-animation';

import {BsChevronDoubleDown} from 'react-icons/bs'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello world, I'm</h2>
        <h1>Elidiane Bezerra</h1>
        <h2><TypeAnimation
          sequence={[
            "Full Stack Developer",
            "Software Developer",
            "Frontend Developer"
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
          </h2>
        <a href="#about" className='scroll__down arrow'><BsChevronDoubleDown/></a>
        <HeaderSocial/>
        <CTA/>
      </div>  
    </header>
  )
}

export default Header