import React, { useState } from 'react';
import cv from '../../assets/cv.pdf';
import './header.css'

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
          <div className='iframe-wrapper'>
          <iframe src={cv} title='Resume' className='resume-frame' width="100%"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTA;
