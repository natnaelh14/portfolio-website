import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { Icon } from '@iconify/react';

const Project = ({ title, desc, langs, liveLink, githubLink, imageLink }) => {
  return (
    <div className="project">
      <div className="project-title">
        <h2>{title}</h2>
      </div>
      <a href={liveLink}><img className="project-image" src={imageLink} style={{ width: "300px", height: "250px" }} alt=""/></a>
      <br/>
      <div className="project-langs">
        {langs.map(lang => (
        <span className="project-lang"><Icon icon={lang} /></span>
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
