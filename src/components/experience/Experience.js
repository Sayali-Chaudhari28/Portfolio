import React from 'react';
import './experience.css';
import FLUTTER from '../../assets/flutter.png';
import REACTJS from '../../assets/reactjs.png';
import JAVA from '../../assets/java.png';
import JAVASCRIPT from '../../assets/javascript.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import ANDROID from '../../assets/android.png';
import MYSQL from '../../assets/mysql.png';
import MONGODB from '../../assets/mongodb.png';
import FIREBASE from '../../assets/firebase.png';

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='row'>

          <div className='column'>
            <div className='card'>
              <img src={JAVA} alt='Java' />
            </div>
            <p>JAVA</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={FLUTTER} alt='Flutter' />
            </div>
            <p>FLUTTER</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={REACTJS} alt='React' />
            </div>
            <p>REACT</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={JAVASCRIPT} alt='Javascript' />
            </div>
            <p>JAVASCRIPT</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={HTML} alt='Html' />
            </div>
            <p>HTML</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={CSS} alt='CSS' />
            </div>
            <p>CSS</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={ANDROID} alt='android' />
            </div>
            <p>ANDROID</p>
          </div>

        </div>
      </div>

      <div className='container experience__backend'>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <img src={MYSQL} alt='mysql' />
            </div>
            <p>MySQL</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={MONGODB} alt='MongoDB' />
            </div>
            <p>MongoDB</p>
          </div>

          <div className='column'>
            <div className='card'>
              <img src={FIREBASE} alt='Firebase' />
            </div>
            <p>FIREBASE</p>
          </div>
        </div>
      </div>
    </section>
  );
};
