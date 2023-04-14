import "./projects.css";
import Project from "../Project/Project";
import roastTime from "assets/images/roast-time.png";
import cryptoConnect from "assets/images/crypto-connect.png";
import { Fade } from "react-reveal";
import { skillLangs } from "components/constants";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<h1 className="section-heading">Projects</h1>
			<div className="projects_wrapper">
				{/* RoastTime  */}
				<Fade bottom duration={1000} distance="40px">
					<Project
						title="RoastTime"
						desc="A full-stack application that reserves coffee shop table."
						langs={[
							skillLangs.tailwind,
							skillLangs.javascript,
							skillLangs.typescript,
							skillLangs.react,
							skillLangs.nextjs,
							skillLangs.jest,
							skillLangs.jwt,
							skillLangs.node,
							skillLangs.postgres,
							skillLangs.prisma,
							skillLangs.ga,
							skillLangs.actions,
							skillLangs.husky,
							skillLangs.prettier,
							skillLangs.eslint,
							skillLangs.contentful,
						]}
						liveLink="https://roast-time.vercel.app/"
						githubWebLink="https://github.com/natnaelh14/roast-time"
						githubApiLink="https://github.com/natnaelh14/roast-time-backend"
						imageLink={roastTime}
					/>
				</Fade>
				{/* Crypto Connect */}
				<Fade bottom duration={1000} distance="40px">
					<Project
						title="Crypto Connect"
						desc="A full-stack social media application based on cryptocurrency."
						langs={[
							skillLangs.styled,
							skillLangs.material,
							skillLangs.javascript,
							skillLangs.typescript,
							skillLangs.react,
							skillLangs.redux,
							skillLangs.node,
							skillLangs.graphql,
							skillLangs.mysql,
							skillLangs.sequelize,
							skillLangs.firebase,
							skillLangs.docker,
							skillLangs.twitter,
							skillLangs.crypto,
							skillLangs.actions,
							skillLangs.jest,
						]}
						liveLink="https://crypto-connect-ten.vercel.app/"
						githubWebLink="https://github.com/natnaelh14/social-media-app"
						githubApiLink="https://github.com/natnaelh14/social-media-api"
						imageLink={cryptoConnect}
					/>
				</Fade>
			</div>
		</div>
	);
};

export default Projects;
