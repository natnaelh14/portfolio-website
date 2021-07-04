import React from 'react';
import './header.css';


const Header = () => {
    return (
      <div className='navbar__main'>
        <img className="navbar__logo" src="" alt=""/>
        <ul className='navbar__list--desktop'>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    )
}

export default Header;