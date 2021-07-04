import React from "react";
import "./projects.css";
import Project from "../project/project";
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="section__heading">Projects</h1>

      <div className="projects__projectCont">
        {/* Instagram clone project */}
        <Project
          title="Instagram Clone"
          desc="A instagram clone made using react,redux and firebase. In this i have build a chatroom using real time snapshot listening in firebase.
                Converted it into PWA. I have also added error controller pages for better error handling. 
                It is deployed on firebase."
          langs={["React", "Redux", "Firebase"]}
          liveLink="https://instagram-clone-4ed61.web.app/"
          githubLink="https://github.com/tanishgupta-git/instagram-clone"
        />

        {/* Fitwithsid project */}
        <Project
          title="FitWithSid"
          desc="A fitness blogging website for fitness instructor Siddharth Sharma.  
             I have added Intersection Observer api and animations for better user experience."
          langs={["Php", "Mysql", "Javascript"]}
          liveLink="https://instagram-clone-4ed61.web.app/"
          githubLink="https://github.com/tanishgupta-git/Fitwithsid"
        />

        {/* Crown Clothing Project */}
        <Project
          title="Crown Clothing"
          desc="Developed an e-commerce website using firebase at backend and added redux-saga for better handling
             of asynchrounous tasks. In this i have built a server using Express to handle the payment by stripe.
             It is deployed on heroku."
          langs={["React", "Redux", "Firebase", "Stripe", "Express"]}
          liveLink="https://crown-clothtanish.herokuapp.com/"
          githubLink="https://github.com/tanishgupta-git/Crown-Clothing"
        />
      </div>
    </div>
  );
}

export default Projects;
