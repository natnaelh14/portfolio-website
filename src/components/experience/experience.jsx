import React, { Component } from 'react';
import './experience.css';
import Education from './education';

class Experience extends Component {
  constructor() {
    super();
    this.state = { showMessage: false };
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool,
    });
  };

  render() {
    return (
      <>
        <div className='button-container'>
          <button
            className='experience-button'
            onClick={this._showMessage.bind(null, true)}
          >
            Education
          </button>
          <button
            className='experience-button'
            onClick={this._showMessage.bind(null, false)}
          >
            Work Experience
          </button>
        </div>
        <div>{this.state.showMessage && <Education/>}</div>
      </>
    );
  }
}

export default Experience;
