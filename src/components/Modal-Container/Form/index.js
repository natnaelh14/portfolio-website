import React from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import './form.css';

export const Form = ({
  description,
  title,
  liveLink,
  githubLink,
  langs,
  logo,
  content,
}) => {
  return (
    <div className='modal-container'>
      <a
        href={liveLink}
        className='modal-image'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='image' src={logo} alt='logo' />
      </a>
      <h1 className='title'>{title}</h1>
      <div className='modal-langs'>
        {langs.map((lang, index) => (
          <span key={index} className='modal-lang'>
            <Icon className='modal-icon' icon={lang.name} height='40px' width='40px' />
          </span>
        ))}
      </div>
      <div className='modal-links'>
        {liveLink && (
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>
            <FaLink />
          </a>
        )}
        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </div>
      <div className='modal-description'>
        <p>{description}</p>
      </div>
      <div className='modal-content'>
        <label>Features:</label>
        <ul>
          {content.map((sen, i) => (
            <li key={i} className='modal-content-item'>{sen}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
