import React from 'react';
import './projects.css';
import Project from '../project/project';
import FeaturedProduct from '../FeaturedProject/featured-project';
import smartMoney from './img/smart-bank.png';
import EmptyPantry from './img/empty-pantry.png';
import eCommerce from './img/e-commerce.png';
import techBlog from './img/tech-blog.png';
import jboard from './img/jboard.png';
import quiz from './img/quiz-app.png';
import cryptoConnect from './img/crypto-connect.png';
import cryptoConnectLogo from './img/logo.svg';
import smartMoneyLogo from './img/smart-bank-logo.png';
import EmptyPantryLogo from './img/empty-pantry-logo.png';
import eCommerceLogo from './img/e-commerce-logo.png';
import techBlogLogo from './img/tech-blog-logo.png';
import jboardLogo from './img/jboard-logo.png';
import quizLogo from './img/quiz-app-logo.png';
import projectContent from './content';
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
    bootstrap: {
      name: 'logos:bootstrap',
      label: 'Bootstrap',
    },
    bulma: {
      name: 'logos:bulma',
      label: 'Bulma',
    },
    javascript: {
      name: 'logos:javascript',
      label: 'JavaScript',
    },
    typescript: {
      name: 'vscode-icons:file-type-typescript',
      label: 'TypeScript',
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
    docker: {
      name: 'logos:docker-icon',
      label: 'Docker',
    },
    styled: {
      name: 'vscode-icons:file-type-styled',
      label: 'Styled Components',
    },
    handlebars: {
      name: 'vscode-icons:file-type-handlebars2',
      label: 'Handlebars',
    },
    material: {
      name: 'logos:material-ui',
      label: 'Material UI',
    },
    redux: {
      name: 'logos:redux',
      label: 'Redux',
    },
    paypal: {
      name: 'logos:paypal',
      label: 'PayPal',
    },
    firebase: {
      name: 'logos:firebase',
      label: 'Firebase',
    },
    jquery: {
      name: 'fontisto:jquery',
      label: 'jQuery',
    },
    twitter: {
      name: 'logos:twitter',
      label: 'Twitter API',
    },
    crypto: {
      name: 'logos:bitcoin',
      label: 'CoinGecko API',
    },
    jest: {
      name: 'logos:jest',
      label: 'Jest',
    },
    chai: {
      name: 'logos:chai',
      label: 'Chai',
    },
    actions: {
      name: 'logos:github-octocat',
      label: 'Github Actions',
    },
    blank: {
      name: '',
      label: '',
    }
  };

  return (
    <div className='projects' id='projects'>
      <h1 className='section-heading'>Projects</h1>
      <div className='project-spotlight'>
        {/* Crypto Connect */}
        <Fade bottom duration={1000} distance='40px'>
          <FeaturedProduct
            title='Crypto Connect'
            desc='A full stack social media application based on cryptocurrency.'
            content={projectContent.cryptoConnect}
            logo={cryptoConnectLogo}
            langs={[
              skillLangs.styled,
              skillLangs.material,
              skillLangs.firebase,
              skillLangs.javascript,
              skillLangs.typescript,
              skillLangs.react,
              skillLangs.redux,
              skillLangs.node,
              skillLangs.graphql,
              skillLangs.mysql,
              skillLangs.sequelize,
              skillLangs.docker,
              skillLangs.twitter,
              skillLangs.crypto,
              skillLangs.actions,
              skillLangs.jest,
              skillLangs.chai,
            ]}
            liveLink='http://crypto-connect-app.herokuapp.com'
            githubLinkOne='https://github.com/natnaelh14/social-media-app'
            githubLinkTwo='https://github.com/natnaelh14/social-media-api'
            imageLink={cryptoConnect}
          />
        </Fade>
      </div>
      <div className='projects_wrapper'>
        {/* SpiceLand & Co. */}
        <Fade bottom duration={1000} distance='40px'>
          <Project
            title='SpiceLand & Co.'
            desc='A full stack e-commerce application that provides an easy platform to sell and buy spices.'
            content={projectContent.eCommerce}
            logo={eCommerceLogo}
            langs={[
              skillLangs.bootstrap,
              skillLangs.javascript,
              skillLangs.react,
              skillLangs.redux,
              skillLangs.node,
              skillLangs.mongodb,
              skillLangs.paypal,
              skillLangs.actions,
              skillLangs.jest,
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
            content={projectContent.jboard}
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
            content={projectContent.smartBank}
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
            content={projectContent.emptyPantry}
            logo={EmptyPantryLogo}
            langs={[
              skillLangs.html,
              skillLangs.css,
              skillLangs.bulma,
              skillLangs.bootstrap,
              skillLangs.javascript,
              skillLangs.jquery,
            ]}
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
            content={projectContent.techBlog}
            logo={techBlogLogo}
            langs={[
              skillLangs.css,
              skillLangs.bulma,
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
            content={projectContent.quizApp}
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
