import React from 'react';
import './projects.css';
import Project from '../project/project';
import smartMoney from './img/smart-bank.png';
import EmptyPantry from './img/empty-pantry.png';
import eCommerce from './img/e-commerce.png';
import techBlog from './img/tech-blog.png';
import jboard from './img/jboard.png';
import quiz from './img/quiz-app.png';
import smartMoneyLogo from './img/smart-bank-logo.png';
import EmptyPantryLogo from './img/empty-pantry-logo.png';
import eCommerceLogo from './img/e-commerce-logo.png';
import techBlogLogo from './img/tech-blog-logo.png';
import jboardLogo from './img/jboard-logo.png';
import quizLogo from './img/quiz-app-logo.png';
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
      name: 'vscode-icons:file-type-sequelize',
      label: 'Sequelize',
    },
    mongodb: {
      name: 'vscode-icons:file-type-mongo',
      label: 'MongoDB',
    },
    graphql: {
      name: 'vscode-icons:file-type-graphql',
      label: 'GraphQL',
    },
    styled: {
      name: 'vscode-icons:file-type-styled',
      label: 'Styled Components',
    },
    handlebars: {
      name: 'vscode-icons:file-type-handlebars2',
      label: 'Handlebars',
    },
    redux: {
      name: 'logos:redux',
      label: 'Redux',
    },
    paypal: {
      name: 'logos:paypal',
      label: 'PayPal',
    },
    jquery: {
      name: 'fontisto:jquery',
      label: 'jQuery',
    },
  };

  return (
    <div className='projects' id='projects'>
      <h1 className='section-heading'>Projects</h1>
      <div className='projects_wrapper'>
        {/* SpiceLand & Co. */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='SpiceLand & Co.'
            desc='A full-stack e-commerce application that provides an easy platform to sell and buy spices.'
            logo={eCommerceLogo}
            langs={[
              skillLangs.javascript,
              skillLangs.react,
              skillLangs.redux,
              skillLangs.node,
              skillLangs.mongodb,
              skillLangs.paypal,
            ]}
            liveLink='https://spice-land.herokuapp.com'
            githubLink='https://github.com/natnaelh14/ecommerce'
            imageLink={eCommerce}
          />
        </Fade>
        {/* Jboard  */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Jboard'
            desc='A full stack application that empowers job seekers with tools to keep track of job applications.'
            logo={jboardLogo}
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
        {/* Smart Bank  */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Smart Bank'
            desc='A full stack application that simulates the functionality of a mobile bank for educational purposes.'
            logo={smartMoneyLogo}
            langs={[
              skillLangs.css,
              skillLangs.handlebars,
              skillLangs.javascript,
              skillLangs.node,
              skillLangs.mysql,
              skillLangs.sequelize,
            ]}
            liveLink='https://smart-bank-bank-app.herokuapp.com/'
            githubLink='https://github.com/natnaelh14/Get_Money_Smart'
            imageLink={smartMoney}
          />
        </Fade>
        {/* Empty Pantry */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Empty Pantry'
            desc='An application that lets users find recipes using ingredients they have on hand'
            logo={EmptyPantryLogo}
            langs={[skillLangs.html, skillLangs.css, skillLangs.javascript, skillLangs.jquery]}
            liveLink='https://natnaelh14.github.io/empty-pantry/'
            githubLink='https://github.com/natnaelh14/empty-pantry'
            imageLink={EmptyPantry}
          />
        </Fade>
        {/* Tech Blog */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='Tech Blog'
            desc=' A blog site that allows users to post and comment with ability to have individual accounts.'
            logo={techBlogLogo}
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
            logo={quizLogo}
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
