import React from "react";
import {
  GrLinkedinOption,
  GrGithub,
  GrMail,
} from "react-icons/gr";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__socialHead">
        &lt;Social /&gt;
        <br />
      </p>
      <ul className="footer__social">
        <a
          href="https://www.linkedin.com/in/tanish-gupta-52b76a19a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://github.com/tanishgupta-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub />
        </a>
        <a
          href="mailto:tanishgupta0315@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail />
        </a>
      </ul>
      <h3 className="footer__head"> Developed By Natnael Haile</h3>
    </div>
  );
};

export default Footer;
