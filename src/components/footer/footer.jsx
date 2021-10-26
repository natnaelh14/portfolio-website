import React from 'react';
import { GrLinkedinOption, GrGithub, GrMail, GrTwitter } from 'react-icons/gr';
import './footer.css';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className='footer'>
      <Fade bottom duration={1000} distance="40px">
        <section className='contact-info'>
          <div>
            <h1>Call</h1>
            <span href='tel:404-918-1727'>404-918-1727</span>
          </div>
          <div id='email-address'>
            <h1>Email</h1>
            <a href='mailto:haile.natnael@natnaeldev.com'>
              haile.natnael@natnaeldev.com
            </a>
          </div>
        </section>
        <section className='contact-link'>
          <ul className='footer-social'>
            <a
              href='https://www.linkedin.com/in/natnael-haile-b146b41bb/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GrLinkedinOption />
            </a>
            <a
              href='https://github.com/natnaelh14'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GrGithub />
            </a>
            <a
              href='mailto:haile.natnael@natnaeldev.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GrMail />
            </a>
            <a
            href='https://twitter.com/natnaelh'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GrTwitter />
          </a>
          </ul>
        </section>
        <section className='contact-copyright'>
          <p>Copyright &copy; 2021 Natnael Haile. All Rights Reserved.</p>
        </section>
      </Fade>
    </footer>
  );
};

export default Footer;
