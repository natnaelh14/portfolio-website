import React from "react";
import "./projects.css";
import Project from "../project/project";
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="section-heading">Projects</h1>

      <div className="projects__projectCont">
        {/* Empty Pantry */}
        <Project
          title="Empty Pantry"
          desc=""
          langs={["HTML5/CSS3", "Bootstrap", "Bulma","jQuery" ,"JavaScript"]}
          liveLink="https://natnaelh14.github.io/empty-pantry/"
          githubLink="https://github.com/natnaelh14/empty-pantry"
        />

        {/* Quiz App */}
        <Project
          title="Quiz App"
          desc=""
          langs={["HTML5/CSS3", "Bootstrap","jQuery" ,"Javascript"]}
          liveLink="https://natnaelh14.github.io/quiz-app/"
          githubLink="https://github.com/natnaelh14/quiz-app"
        />

        {/* Password Generator */}
        <Project
          title="Password Generator"
          desc=""
          langs={["HTML5/CSS3", "Javascript"]}
          liveLink="https://natnaelh14.github.io/password-generator-app/"
          githubLink="https://github.com/natnaelh14/password-generator-app"
        />
      </div>
    </div>
  );
}

export default Projects;
