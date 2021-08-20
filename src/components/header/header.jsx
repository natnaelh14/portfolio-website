import React, { useState } from "react";
import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoImage from "./logo.png";
import Resume from "./resume.pdf";

const Header = () => {
  const [showNav, SetshowNav] = useState(false);
  return (
    <nav className="navbar navbar-background ">
      <div className="navbar-main">
        <a href="#about">
          <img className="navbar-logo" src={LogoImage} alt="logo" href='#intro' />
        </a>
        <ul className="navbar-list-desktop">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href={Resume}>Resume</a>
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
              ? "navbar-list-mobile navbar-list-mobileShow"
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
            <a href={Resume}>Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;