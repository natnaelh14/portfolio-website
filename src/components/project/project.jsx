import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";

const Project = ({ desc, langs, liveLink, githubLink, imageLink }) => {
  return (
    <div className="project">
      <img className="project-image" src={imageLink} style={{ width: "300px", height: "250px" }} alt=""/>

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
