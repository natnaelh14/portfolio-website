import React from "react";
import "./projects.css";
import Project from "../project/project";
import EmptyPantry from "./empty-pantry.png";
import PassGenerator from "./password-generator.png";
import QuizApp from "./quiz-app.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="section-heading">Projects</h1>

      <div className="projects__projectCont">
        {/* Empty Pantry */}
        <Project
          desc="Empty Pantry - an application that lets users find recipes using ingredients they have on hand"
          langs={["HTML5/CSS3", "Bootstrap", "Bulma", "jQuery", "JavaScript"]}
          liveLink="https://natnaelh14.github.io/empty-pantry/"
          githubLink="https://github.com/natnaelh14/empty-pantry"
          imageLink={EmptyPantry}
        />

        {/* Quiz App */}
        <Project
          desc="Quiz App - an IQ quiz application that lets users store scores in a local storage"
          langs={["HTML5/CSS3", "Bootstrap", "jQuery", "Javascript"]}
          liveLink="https://natnaelh14.github.io/quiz-app/"
          githubLink="https://github.com/natnaelh14/quiz-app"
          imageLink={QuizApp}
        />

        {/* Password Generator */}
        <Project
          desc="Password Generator - an application that generates a secure password using users' choice of characters "
          langs={["HTML5", "CSS3", "jQuery", "Javascript"]}
          liveLink="https://natnaelh14.github.io/password-generator-app/"
          githubLink="https://github.com/natnaelh14/password-generator-app"
          imageLink={PassGenerator}
        />
      </div>
    </div>
  );
}

export default Projects;
