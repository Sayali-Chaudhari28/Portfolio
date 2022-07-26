import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ecommerce.jpg'
import IMG2 from '../../assets/Microsoft_Teams_logo.jpg'
import IMG3 from '../../assets/covid-helpline.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce Web app",
    github: "",
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "Microsoft Teams Clone",
    github: "https://github.com/Sayali-Chaudhari28/Microsoft_Team_Clone",
    demo: "https://ms-teams-engage21.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Covid Helpline",
    github: "https://github.com/Sayali-sChaudhari28/Covid_Helpline",
    demo: "https://github.com/Sayali-Chaudhari28/Covid_Helpline"
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img id='portfolioimg' src = {image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
