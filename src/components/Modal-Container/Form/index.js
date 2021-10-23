import React from 'react';
import './form.css';

export const Form = ({ description, title, liveLink, imageLink }) => {
  return (
    <div className='modal-container'>
      <a href={liveLink} className='modal-image' target='_blank' rel='noopener noreferrer'>
        <img
          className='image'
          src={imageLink}
          alt='project'
        />
      </a>
      <h1 className='title'>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Form;
