import React from 'react'
import './about.css'
import ME from '../../assets/me.png'

const About = () => {

  return (
    <section id='about'>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About Image' />
            </div>
        </div>
        <div className='about__content'>
          <p>👋 Hi there!</p>
          <p>I'm a web developer with a civil engineering background, now fully immersed in the exciting world of coding. With prior experience as a civil engineer, I bring a structured and analytical mindset to my coding.</p>
          <p>📚Learning web development is my current focus, and I'm embracing the journey with excitement.</p>
          <p>🐶 When I'm not coding, I'm probably hanging out with my dog, or doing workouts at the gym.🏋️😄</p>
          <p>I aim to become a skilled developer, continuously evolving in this field 🚀🌐</p>

        </div>
      </div>
    </section>
  )
}

export default About