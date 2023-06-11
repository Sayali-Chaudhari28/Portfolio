import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './portfolio.css';
import IMG1 from '../../assets/civil_contractors_app.jpg';
import IMG2 from '../../assets/Microsoft_Teams_logo.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Civil contractors app",
    description: "A mobile application developed in Flutter and Firebase that provides a comprehensive platform for managing civil construction projects. The app includes features such as project management, task tracking, document sharing, and communication tools for contractors, clients, and team members. One of the key highlights of the app is the integrated payment gateway, which allows users to make secure and convenient payments for services and materials. The payment gateway ensures smooth and efficient financial transactions within the app, enhancing the overall user experience.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Microsoft Teams Clone",
    description: "A web application created using React and Node.js that replicates the core functionality of Microsoft Teams. The clone allows users to create and join teams, chat in real-time, make audio and video calls. It incorporates features like user authentication and video conferencing using WebRTC. The Microsoft Teams Clone provides a seamless and intuitive collaboration experience, enabling teams to communicate and work together effectively.",
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio-section'>
      <h2>My Recent Work</h2>
    
      <div className='container portfolio__container'>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <div
              key={index}
              className={`custom-indicator ${isSelected ? 'selected' : ''}`}
              onClick={onClickHandler}
            >
              <img src={data[index].image} alt={data[index].title} />
            </div>
          )}
        >
          {data.map(({ id, image, title, description }) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img id='portfolioimg' src={image} alt={title} />
              </div>
              <div className='portfolio__item-content'>
                <h3>{title}</h3>
                <p className='project_description'>{description}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
