import React from "react";
import "./projects.css";
import Project from "../project/project";
import smartMoney from "./get-money.png";
import EmptyPantry from "./empty-pantry.png";
import eCommerce from "./e-commerce.png";
import { Fade } from 'react-reveal';





function Projects() {
  const skillLangs = {
  html: "vscode-icons:file-type-html",
  css: "vscode-icons:file-type-html",
  javascript: "logos:javascript",
  react: "vscode-icons:file-type-reactjs",
  node: "logos:nodejs-icon",
  npm: "vscode-icons:file-type-npm",
  mysql: "vscode-icons:file-type-sql",
  mongoDB: "vscode-icons:file-type-mongo",
  git: "logos:git-icon",
  }

  return (
    <div className="projects" >
      <h1 className="section-heading">Projects</h1>
      <div className="projects_wrapper">
        {/* Get Money Smart  */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="Get Money Smart"
            desc="An application that simulates the functionality of a mobile bank for educational purposes."
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink="https://polar-river-76787.herokuapp.com/"
            githubLink="https://github.com/mlward639/Get_Money_Smart"
            imageLink={smartMoney}
          />
        </Fade>
        {/* Empty Pantry */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="Empty Pantry"
            desc="An application that lets users find recipes using ingredients they have on hand"
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink="https://natnaelh14.github.io/empty-pantry/"
            githubLink="https://github.com/natnaelh14/empty-pantry"
            imageLink={EmptyPantry}
          />
        </Fade>
        {/* E-Commerce Back-End */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="E-Commerce Back-End"
            desc="An application that provides employee management system."
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink=""
            githubLink="https://github.com/natnaelh14/e-commerce-back-end"
            imageLink={eCommerce}
          />
        </Fade>
        {/* E-Commerce Back-End */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="E-Commerce Back-End"
            desc="An application that provides employee management system."
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink=""
            githubLink="https://github.com/natnaelh14/e-commerce-back-end"
            imageLink={eCommerce}
          />
        </Fade>
        {/* Get Money Smart  */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="Get Money Smart"
            desc="An application that simulates the functionality of a mobile bank for educational purposes."
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink="https://polar-river-76787.herokuapp.com/"
            githubLink="https://github.com/mlward639/Get_Money_Smart"
            imageLink={smartMoney}
          />
        </Fade>
        {/* Get Money Smart  */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            title="Get Money Smart"
            desc="An application that simulates the functionality of a mobile bank for educational purposes."
            langs={["vscode-icons:file-type-html", "logos:javascript", "vscode-icons:file-type-reactjs"]}
            liveLink="https://polar-river-76787.herokuapp.com/"
            githubLink="https://github.com/mlward639/Get_Money_Smart"
            imageLink={smartMoney}
          />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
