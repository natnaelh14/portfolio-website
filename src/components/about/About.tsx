import { useState } from "react";
import "./about.css";
import { Fade } from "react-awesome-reveal";
import { frontEndTech, backEndTech, otherTech } from "~/constants";

const About = () => {
	const [show, setShow] = useState({ type: "front-end" });
	return (
		<div className="about" id="about">
			<h1 className="section-heading">About</h1>
			<Fade triggerOnce>
				<div className="about-section">
					<div className="about-text">
						I am a Full-Stack Software Engineer with a Bachelor&apos;s Degree and two years of professional development
						experience. I am a proactive team player with good adaptability in dynamic environments looking for engaging
						professional development. I am a passionate, detail-oriented, and curious developer using professional and
						technical skills to solve problems. I like to bring unique ideas to life using the tools below.
					</div>
				</div>
				<br />
				<br />
				<div className="about__sideParent">
					<div className="about__buttons">
						<button
							className={show.type === "front-end" ? "about__button about__button--active" : "about__button"}
							onClick={() => setShow({ type: "front-end" })}
						>
							Front-End
						</button>
						<button
							className={show.type === "back-end" ? "about__button about__button--active" : "about__button"}
							onClick={() => setShow({ type: "back-end" })}
						>
							Back-End
						</button>
						<button
							className={show.type === "other-tech" ? "about__button about__button--active" : "about__button"}
							onClick={() => setShow({ type: "other-tech" })}
						>
							Other Tech
						</button>
					</div>
					{show.type === "front-end" && (
						<div className="about-subSection">
							<ul>
								{frontEndTech.map((tech, index) => (
									<li key={index} className="about-subSectionitem">
										{tech}
									</li>
								))}
							</ul>
						</div>
					)}
					{show.type === "back-end" && (
						<div className="about-subSection">
							<ul>
								{backEndTech.map((tech, index) => (
									<li key={index} className="about-subSectionitem">
										{tech}
									</li>
								))}
							</ul>
						</div>
					)}
					{show.type === "other-tech" && (
						<div className="about-subSection">
							<ul>
								{otherTech.map((tech, index) => (
									<li key={index} className="about-subSectionitem">
										{tech}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</Fade>
		</div>
	);
};

export default About;
