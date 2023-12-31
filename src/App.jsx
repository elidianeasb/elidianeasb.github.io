import React from 'react-dom'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'


const App = () => {
  return (
    
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default App