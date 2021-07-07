import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";

const Project = ({ desc, langs, liveLink, githubLink, imageLink }) => {
  return (
    <div className="project">
      <div className="project-basicInfo" style={{ background: `url(${imageLink})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'grayscale(2)' }}>
      </div>
      <br />
      <div className="project-langs">
        {langs.map((lang) => (
          <span key={Math.random()} className="project-lang">
            {lang}
          </span>
        ))}
      </div>
      <div className="project-links">
        {liveLink && (
          <a href={liveLink}>
            <FaLink />
          </a>
        )}
        <a href={githubLink}>
          <FaGithub />
        </a>
      </div>
      <div className="project-detail">
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Project;
