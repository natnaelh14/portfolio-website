import React, { useState } from "react";
import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [showNav, SetshowNav] = useState(false);
  return (
    <div className="navbar-main">
      <img className="navbar-logo" src="./logo.png" alt="" />
      <ul className="navbar-list">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <span
        className="navbar-mobile-icon"
        onClick={() => SetshowNav((prev) => !prev)}
      >
        {showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
      </span>
      <ul
        className={
          showNav
            ? "navbar-list--mobile navbar-list-mobileShow"
            : "navbar-list-mobile"
        }
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
