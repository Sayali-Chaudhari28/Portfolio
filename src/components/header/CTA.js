import React, { useState } from 'react';
import cv from '../../assets/cv.pdf';
import resume from '../../assets/cv.jpg';
import './header.css';

const CTA = () => {
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div className='cta'>
      <button className='btn btn-primary' onClick={handleViewResume}>
        {showResume ? 'Close Resume' : 'View Resume'}
      </button>

      {showResume && (
        <div className='resume-container'>
          <div className='scrollable-wrapper'>
            <div className='image-container'>
              <img src={resume} alt='RESUME' className='resume-image' />
            </div>
          </div>
          <a href={cv} download='cv.pdf' className='download-btn'>
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default CTA;