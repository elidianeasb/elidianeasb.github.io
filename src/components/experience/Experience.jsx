import React from 'react'
import './experience.css'
import { FaAward } from 'react-icons/fa'
import { PiGraduationCap } from 'react-icons/pi'
import { BiWorld } from 'react-icons/bi'
import InnerCard from './InnerCard'
import { useState } from 'react'


function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [{
    icon: <PiGraduationCap />,
    title: 'Education',
    subjects: [{
      name: 'FullStack Web Development - Le Wagon | Lisbon - Jul 2023 - Current',
      content: '9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails.'
    },
    {
      name: 'Step by Tech | Lisbon -  May 2023 - Jun 2023',
      content: "Program promoted by the Lisbon City Council. I was one of the five finalists, out of an initial group of 700, to won a scholarship at Le Wagon's bootcamp."
    },
    {
      name: 'Fullstack Web Development - Lisbon | Oct 2022 - Dez 2022',
      content: 'Web Development Bootcamp program based on MERN Stack: *• Frontend: HTML, CSS, and JavaScript, Bootstrap, React. *• Backend: NodeJS, ExpressJS, MongoDB, NodeJS, MongoDB, Axios.'
    },
    {
      name: 'Bachelor degree in Civil Engineering | Jan 2017 - Jun 2019',
      content: 'UNINASSAU, Brazil '
    },
    {
      name: 'Bachelor of Civil Engineering | Sep 2014 - May 2015',
      content: 'South East Technological University, Ireland'
    },
    {
      name: 'Building and Construction Technology | Jun 2011 - Jun 2017',
      content: 'Federal Institute of Paraíba, Brazil'
    },
    ]
  },
  {
    icon: <FaAward />,
    title: 'Experience',
    subjects: [
      {
        name: 'BIM Modeler - WA Engineering | Lisbon - Oct 2021 - Oct 2022',
        content: 'Worked in diverse civil engineering projects within multidisciplinary teams.'
      },
      {
        name: 'Junior Civil Engineer - Ambar | Mar 2018 - Jan 2019',
        content: 'Provided technical assistance during the construction phase, ensuring the correct implementation of the project.'
      },
      {
        name: 'Engineer Associate - Andrade Marinho LMF | Jan 2016 - Apr 2017',
        content: 'Supervised the quality of project execution.'
      }]
  },
  {
    icon: <BiWorld />,
    title: 'Languages',
    subjects: [{
      name: 'Portuguese:',
      content: 'Native'
    },
    {
      name: 'English:',
      content: 'Professional Working Proficiency'
    }]
  },
  ];

  const handleInnerCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id='experience'>
      <div className="container cards">
        <div className='experience__cards'>
          <div className='experience__container '>
            {cards.map((card, index) => (
              <InnerCard
                key={index}
                icon={card.icon}
                title={card.title}
                isActive={index === activeIndex}
                onClick={() => handleInnerCardClick(index)}
              />
            ))}
          </div>
          <div className="experience__content">
            {activeIndex !== null && cards[activeIndex].subjects.map((subject, subIndex) => (
               <div key={subIndex}>
               <h3>{subject.name}</h3>
                 {subject.content.split('*').map((item, itemIndex) => (
                   <p key={itemIndex}>{item.trim()}</p>
                 ))}
             </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience