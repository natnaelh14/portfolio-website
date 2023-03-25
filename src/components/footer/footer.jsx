import React from "react";
import { GrLinkedinOption, GrGithub, GrMail, GrTwitter } from "react-icons/gr";
import "./Footer.css";
import Fade from "react-reveal/Fade";

const Footer = () => {
	return (
		<footer className="footer">
			<Fade bottom duration={1000} distance="40px">
				<section className="contact-link">
					<ul className="footer-social">
						<a href="https://www.linkedin.com/in/natnael-haile-b146b41bb/" target="_blank" rel="noopener noreferrer">
							<GrLinkedinOption />
						</a>
						<a href="https://github.com/natnaelh14" target="_blank" rel="noopener noreferrer">
							<GrGithub />
						</a>
						<a href="mailto:haile.natnael@natnaeldev.com" target="_blank" rel="noopener noreferrer">
							<GrMail />
						</a>
						<a href="https://twitter.com/natnaelh" target="_blank" rel="noopener noreferrer">
							<GrTwitter />
						</a>
					</ul>
				</section>
				<section className="contact-copyright">
					<p>Copyright &copy; 2023 Natnael Haile. All Rights Reserved.</p>
				</section>
			</Fade>
		</footer>
	);
};

export default Footer;
