import React, { useState } from 'react';
import './experience.css';
import Education from './education';
import Work from './work';

const Experience = () => {
  
  const [workMessage, setWorkMessage] = useState(false);
  const [educationMessage, setEducationMessage] = useState(true);
  const [workButton, setWorkButton] = useState('#18181b');
  const [educationButton, setEducationButton] = useState('rgba(24, 186, 189, 0.1)');

  const _workMessage = () => {
      setEducationMessage(false)
      setWorkMessage(true)
      setWorkButton('rgba(24, 186, 189, 0.1)')
      setEducationButton('#18181b')
  }
  const _educationMessage = () => {
    setEducationMessage(true)
    setWorkMessage(false)
    setWorkButton('#18181b')
    setEducationButton('rgba(24, 186, 189, 0.1)')
}

  return (
    <>
      <div className='button-container'>
        <button  style={{backgroundColor:educationButton}} className='experience-button' onClick={() => _educationMessage()}>
          Education
        </button>
        <button style={{backgroundColor:workButton}} className='experience-button' onClick={() => _workMessage()}>
          Work Experience
        </button>
      </div>
      <div>{educationMessage && <Education />}</div>
      <div>{workMessage && <Work />}</div>
    </>
  );
}

export default Experience;
