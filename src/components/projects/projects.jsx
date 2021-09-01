import React from 'react';
import './projects.css';
import Project from '../project/project';
import smartMoney from './img/get-money.png';
import EmptyPantry from './img/empty-pantry.png';
import eCommerce from './img/e-commerce.png';
import techBlog from './img/tech-blog.png';
import jboard from './img/jboard.png';
import quiz from './img/quiz-app.png';
import { Fade } from 'react-reveal';

function Projects() {
  const skillLangs = {
    html: {
      name: 'vscode-icons:file-type-html',
      label: 'HTML',
    },
    css: {
      name: 'vscode-icons:file-type-css',
      label: 'CSS',
    },

    javascript: {
      name: 'logos:javascript',
      label: 'JavaScript',
    },
    react: {
      name: 'vscode-icons:file-type-reactjs',
      label: 'React',
    },
    node: {
      name: 'logos:nodejs-icon',
      label: 'Node',
    },
    mysql: {
      name: 'vscode-icons:file-type-sql',
      label: 'MySQL',
    },
    sequelize: {
      name: "vscode-icons:file-type-sequelize",
      label: "Sequelize"
    },
    mongodb: {
      name: 'vscode-icons:file-type-mongo',
      label: 'Mongodb',
    },
    graphql: {
      name: 'vscode-icons:file-type-graphql',
      label: 'GraphQL',
    },
    styled: {
      name:'vscode-icons:file-type-styled',
      label: 'Styled Components'
    },
    handlebars: {
      name: "vscode-icons:file-type-handlebars2",
      label: "Handlebars"
    },
  };

  return (
    <div className='projects' id='projects'>
      <h1 className='section-heading'>Projects</h1>
      <div className='projects_wrapper'>
        {/* Jboard  */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Jboard'
            desc='A full stack application that empowers job seekers with tools to keep track of job applications.'
            langs={[
              skillLangs.styled,
              skillLangs.javascript,
              skillLangs.react,
              skillLangs.node,              
              skillLangs.mongodb,
              skillLangs.graphql,
            ]}
            liveLink='https://jboard-app-app.herokuapp.com/'
            githubLink='https://github.com/natnaelh14/jboard'
            imageLink={jboard}
          />
        </Fade>
        {/* Get Money Smart  */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Get Money Smart'
            desc='A full stack application that simulates the functionality of a mobile bank for educational purposes.'
            langs={[
              skillLangs.css,
              skillLangs.handlebars,
              skillLangs.javascript,
              skillLangs.node,
              skillLangs.mysql,
              skillLangs.sequelize,
              
            ]}
            liveLink='https://polar-river-76787.herokuapp.com/'
            githubLink='https://github.com/mlward639/Get_Money_Smart'
            imageLink={smartMoney}
          />
        </Fade>
        {/* Empty Pantry */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Empty Pantry'
            desc='An application that lets users find recipes using ingredients they have on hand'
            langs={[skillLangs.html, skillLangs.css, skillLangs.javascript]}
            liveLink='https://natnaelh14.github.io/empty-pantry/'
            githubLink='https://github.com/natnaelh14/empty-pantry'
            imageLink={EmptyPantry}
          />
        </Fade>
        {/* E-Commerce Back-End */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='E-Commerce Back-End'
            desc='An application that provides employee management system.'
            langs={[skillLangs.node, skillLangs.mysql]}
            liveLink=''
            githubLink='https://github.com/natnaelh14/e-commerce-back-end'
            imageLink={eCommerce}
          />
        </Fade>
        {/* Tech Blog */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Tech Blog'
            desc=' A blog site that allows users to post and comment with ability to have individual accounts.'
            langs={[
              skillLangs.css,
              skillLangs.handlebars,
              skillLangs.javascript,
              skillLangs.node,
              skillLangs.sequelize,
              skillLangs.mysql,
            ]}
            liveLink='http://tech-blognh.herokuapp.com/login'
            githubLink='https://github.com/natnaelh14/tech-blog'
            imageLink={techBlog}
          />
        </Fade>
        {/* Quiz App  */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Quiz App'
            desc="A timed quiz app that utilizes local storage to save user's previous tests."
            langs={[skillLangs.html, skillLangs.css, skillLangs.javascript]}
            liveLink='https://natnaelh14.github.io/quiz-app/'
            githubLink='https://github.com/natnaelh14/quiz-app'
            imageLink={quiz}
          />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
