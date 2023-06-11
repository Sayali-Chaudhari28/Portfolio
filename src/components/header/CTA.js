import React, { useState } from 'react';
import cv from '../../assets/cv.pdf';
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
          <div className='pdf-wrapper'>
            <embed src={cv} type='application/pdf' className='resume-pdf' />
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
