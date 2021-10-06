import React, { Component } from 'react';
import './experience.css';

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
        <div>{this.state.showMessage && <div>hello world!</div>}</div>
      </>
    );
  }
}

export default Experience;
