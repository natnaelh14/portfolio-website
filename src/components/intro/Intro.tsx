import HeroImage from "~/assets/images/hero-image.png";
import { Fade } from "react-awesome-reveal";
import { OutlineLink } from "~/components/Styled-Components/Links";
import Typewriter from "typewriter-effect";
import { roles } from "~/constants";
import "./intro.css";

const Intro = () => {
	return (
		<Fade triggerOnce>
			<div className="intro" id="intro">
				<div className="intro-image-mobile">
					<img className="hero-image-mobile" src={HeroImage} alt="hero" />
				</div>
				<div className="intro-desc">
					<p className="intro-msg">Hey, my name is</p>
					<h1 className="intro-head">Natnael Haile.</h1>
					<h1 className="intro-text">
						<Typewriter
							options={{
								strings: roles,
								autoStart: true,
								loop: true,
								deleteSpeed: 50,
							}}
						/>
					</h1>
					<OutlineLink href="#about" >More About Me</OutlineLink>
				</div>
				<div className="intro-image">
					<img className="hero-image" src={HeroImage} alt="hero" />
				</div>
			</div>
		</Fade>
	);
};

export default Intro;
