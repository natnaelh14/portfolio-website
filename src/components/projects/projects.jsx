import React from "react";
import "./projects.css";
import Project from "../project/project";
import smartMoney from "./get-money.png";
import EmptyPantry from "./empty-pantry.png";
import eCommerce from "./e-commerce.png";
import { Fade } from 'react-reveal';

function Projects() {
  return (
    <div className="projects" >
      <h1 className="section-heading">Projects</h1>
      <div className="projects_wrapper">
        {/* Get Money Smart  */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            desc="Get Money Smart - an application that simulates the functionality of a mobile bank for educational purposes."
            langs={["Node.js", "Express.js", "MySQL", "Sequelize", "Handlebar.js", "Heroku"]}
            liveLink="https://polar-river-76787.herokuapp.com/"
            githubLink="https://github.com/mlward639/Get_Money_Smart"
            imageLink={smartMoney}
          />
        </Fade>
        {/* Empty Pantry */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            desc="Empty Pantry - an application that lets users find recipes using ingredients they have on hand"
            langs={["HTML5/CSS3", "Bootstrap", "Bulma", "jQuery", "JavaScript"]}
            liveLink="https://natnaelh14.github.io/empty-pantry/"
            githubLink="https://github.com/natnaelh14/empty-pantry"
            imageLink={EmptyPantry}
          />
        </Fade>
        {/* E-Commerce Back-End */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            desc="E-Commerce Back-End - an application that provides employee management system."
            langs={["Node.js", "Express.js", "MySQL", "Sequelize"]}
            liveLink=""
            githubLink="https://github.com/natnaelh14/e-commerce-back-end"
            imageLink={eCommerce}
          />
        </Fade>
        {/* E-Commerce Back-End */}
        <Fade bottom duration={1000} distance="40px">
          <Project
            desc="E-Commerce Back-End - an application that provides employee management system."
            langs={["Node.js", "Express.js", "MySQL", "Sequelize"]}
            liveLink=""
            githubLink="https://github.com/natnaelh14/e-commerce-back-end"
            imageLink={eCommerce}
          />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
