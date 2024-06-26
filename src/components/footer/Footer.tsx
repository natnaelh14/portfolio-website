import { GrLinkedinOption, GrGithub, GrMail, GrTwitter } from "react-icons/gr";
import { Fade } from "react-awesome-reveal";
import "./footer.css";

const Footer = () => {
	return (
		<Fade triggerOnce>
			<footer className="footer space-y-5">
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
					<p>Copyright &copy; {new Date().getFullYear()} Natnael Haile. All Rights Reserved.</p>
				</section>
			</footer>
		</Fade>
	);
};

export default Footer;
