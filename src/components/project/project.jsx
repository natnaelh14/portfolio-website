import React, { Component } from 'react';
import './project.css';
import { FaLink, FaGithub } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import { Tooltip } from '@chakra-ui/react';
import { Modal } from '../Modal-Container/Modal';
import TriggerButton from '../Modal-Container/TriggerButton';
import '../Modal-Container/Modal.css';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });

    this.toggleScrollLock();
  };

  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  render() {
    const { title, desc, langs, liveLink, githubLink, imageLink } = this.props;

    return (
      <div className='project'>
        <div className='project-title'>
          <h2>{title}</h2>
        </div>
        <a href={liveLink} target='_blank' rel='noopener noreferrer'>
          <img
            className='project-image'
            src={imageLink}
            style={{ width: '300px', height: '250px' }}
            alt='project'
          />
        </a>
        <br />
        <div className='project-langs'>
          {langs.map((lang, index) => (
            <Tooltip
              key={index}
              label={lang.label}
              aria-label='A tooltip'
              fontSize='md'
              color='white'
            >
              <span className='project-lang'>
                <Icon icon={lang.name} height='40px' width='40px' />
              </span>
            </Tooltip>
          ))}
        </div>
        <div className='project-links'>
          {liveLink && (
            <a href={liveLink} target='_blank' rel='noopener noreferrer'>
              <FaLink />
            </a>
          )}
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
        </div>
        <div className='project-detail'>
          <p className='project-desc'>{desc}</p>
        </div>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText='More Info'
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </div>
    );
  }
}

export default Project;
