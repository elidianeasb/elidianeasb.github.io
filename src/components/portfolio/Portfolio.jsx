import React from 'react'
import './portfolio.css'


const data = [
  {
    id: 1,
    title: 'SandSpot',
    description: 'Developed a web application, creating a full-stack MVC project using Ruby on Rails.',
    github: 'https://github.com/flaviojsmamede/sandspot',
    demo: 'https://sandspot-311de011306d.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Jump Monkey',
    description: 'Desktop game developed using JavaScript, HTML, CSS, and the Canvas element, with the primary goal of applying DOM manipulation concepts.',
    github: '',
    demo: 'https://elidianeasb.github.io/JumpMonkey/'
  },
  {
    id: 3,
    title: 'IronTracker',
    description: 'Complete Web application developed using Node.js, Express.js, CSS, MongoDB, Mongoose, and Handlebars.',
    github: 'https://github.com/elidianeasb/iron-tracker',
    demo: 'https://project-irontracker.herokuapp.com/'
  },
  {
    id: 4,
    title: 'Spaço Zen',
    description: 'Full-stack application using the MERN stack (MongoDB, Express, React and Node.JS).',
    github: 'https://github.com/elidianeasb/spacozen-server',
    demo: 'https://spacozen.netlify.app'
  },
]


function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div class='container portfolio__container'>
        {data.map(({ id, description, title, github, demo }) => {
          return (
            <article key={id} class='portfolio__item'>
              <h3>{title}</h3>
              <p>{description}</p>
              <div class='portfolio__item-cta'>
                <a href={github} class='btn' rel='noreferrer' target='_blank'>GitHub</a>
                <a href={demo} class='btn btn-primary' rel='noreferrer' target='_blank'>Demo</a>
              </div>
            </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio