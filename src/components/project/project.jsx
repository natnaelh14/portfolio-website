import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";

const Project = ({ title, desc, langs, liveLink, githubLink }) => {
  return (
    <div className="project">
      <div className="project-basicInfo">
        <h2 className="project-title">{title}</h2>
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
      </div>

      <div className="project-detail">
        <p className="project-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Project;
