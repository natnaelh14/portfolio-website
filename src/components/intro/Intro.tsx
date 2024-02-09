import HeroImage from "~/assets/images/hero-image.png";
import { Fade } from "react-awesome-reveal";
import { OutlineLink } from "~/components/Styled-Components/Links";
import "./intro.css";

const Intro = () => {
	return (
		<div className="intro" id="intro">
			<Fade cascade>
				<div className="intro-image-mobile">
					<img className="hero-image-mobile" src={HeroImage} alt="hero" />
				</div>
				<div className="intro-desc">
					<p className="intro-msg">Hey, my name is</p>
					<h1 className="intro-head">Natnael Haile.</h1>
					<h1 className="intro-text">
						Full Stack<span className="intro-msg-two"> Software Developer</span>
					</h1>
					<OutlineLink href="#about">More About Me</OutlineLink>
				</div>
				<div className="intro-image">
					<img className="hero-image" src={HeroImage} alt="hero" />
				</div>
			</Fade>
		</div>
	);
};

export default Intro;
