import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className='navbar-main'>
        <img className="navbar-logo" src='./logo.png' alt=""/>
        <ul className='navbar-list'>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    )
}

export default Header;