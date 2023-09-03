import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {BiLogoTypescript} from 'react-icons/bi'
import {BiLogoJava} from 'react-icons/bi'
import {SiRubyonrails} from 'react-icons/si'
import {BiLogoMongodb} from 'react-icons/bi'
import {BiLogoPostgresql} from 'react-icons/bi'
import {FiFigma} from 'react-icons/fi'
import {BiLogoSpringBoot} from 'react-icons/bi'
import {BiGitBranch} from 'react-icons/bi'

function Skills() {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <AiFillHtml5 className='skills__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='skills__details'>
              <DiCss3 className='skills__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='skills__details'>
              <TbBrandJavascript className='skills__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='skills__details'>
              <FaReact className='skills__details-icon'/>
              <h4>React</h4>
            </article>
            <article className='skills__details'>
              <FaBootstrap className='skills__details-icon'/>
              <h4>bootstrap</h4>
            </article>
            <article className='skills__details'>
              <FiFigma className='skills__details-icon'/>
              <h4>Figma</h4>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaNodeJs className='skills__details-icon'/>
              <h4>NodeJS</h4>
            </article>
            <article className='skills__details'>
              <SiExpress className='skills__details-icon'/>
              <h4>ExpressJS</h4>
            </article>
            <article className='skills__details'>
              <BiLogoTypescript className='skills__details-icon'/>
              <h4>Typescript</h4>
            </article>
            <article className='skills__details'>
              <BiLogoJava className='skills__details-icon'/>
              <h4>Java</h4>
            </article>
            <article className='skills__details'>
              <SiRubyonrails className='skills__details-icon'/>
              <h4>Ruby on Rails</h4>
            </article>
            <article className='skills__details'>
              <BiLogoMongodb className='skills__details-icon'/>
              <h4>MongoDB</h4>
            </article>
            <article className='skills__details'>
              <BiLogoPostgresql className='skills__details-icon'/>
              <h4>PostgreSQL</h4>
            </article>
            <article className='skills__details'>
              <BiLogoSpringBoot className='skills__details-icon'/>
              <h4>Springboot</h4>
            </article>
            <article className='skills__details'>
              <BiGitBranch className='skills__details-icon'/>
              <h4>Git</h4>
            </article>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Skills