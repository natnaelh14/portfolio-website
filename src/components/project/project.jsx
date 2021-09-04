import React from "react";
import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { Icon } from '@iconify/react';
import { Tooltip } from "@chakra-ui/react"
import ShowMore from "./ShowMore";

const Project = ({ title, desc, langs, liveLink, githubLink, imageLink }) => {
  return (
    <div className="project">
      <div className="project-title">
        <h2>{title}</h2>
      </div>
      <a href={liveLink} target="_blank" rel="noopener noreferrer" ><img className="project-image" src={imageLink} style={{ width: "300px", height: "250px" }} alt="project"/></a>
      <br/>
      <div className="project-langs">
        {langs.map((lang, index) => (
          <Tooltip key={index} label={lang.label} aria-label="A tooltip" fontSize="md" color="white" >
            <span className="project-lang"><Icon icon={lang.name} height = '40px' width = '40px'/></span>
          </Tooltip>
        ))}
      </div>
      <div className="project-links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" >
            <FaLink />
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" >
          <FaGithub />
        </a>
      </div>
      <div className="project-detail">
        <p className="project-desc">{desc}</p>
        <ShowMore />
      </div>
    </div>
  );
};

export default Project;
