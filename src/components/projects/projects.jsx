import React from "react";
import "./projects.css";
import Project from "../Project/Project";
import roastTime from "./img/roast-time.png";
import cryptoConnect from "./img/crypto-connect.png";
import cryptoConnectLogo from "./img/logo.svg";
import roastTimeLogo from "./img/roast-time-logo.png";
import projectContent from "./content";
import { Fade } from "react-reveal";

function Projects() {
	const skillLangs = {
		html: {
			name: "vscode-icons:file-type-html",
			label: "HTML",
		},
		css: {
			name: "vscode-icons:file-type-css",
			label: "CSS",
		},
		bootstrap: {
			name: "logos:bootstrap",
			label: "Bootstrap",
		},
		bulma: {
			name: "logos:bulma",
			label: "Bulma",
		},
		tailwind: {
			name: "vscode-icons:file-type-tailwind",
			label: "Tailwind",
		},
		material: {
			name: "logos:material-ui",
			label: "Material UI",
		},
		styled: {
			name: "vscode-icons:file-type-styled",
			label: "Styled Components",
		},
		javascript: {
			name: "logos:javascript",
			label: "JavaScript",
		},
		typescript: {
			name: "vscode-icons:file-type-typescript",
			label: "TypeScript",
		},
		react: {
			name: "vscode-icons:file-type-reactjs",
			label: "React",
		},
		redux: {
			name: "logos:redux",
			label: "Redux",
		},
		nextjs: {
			name: "file-icons:nextjs",
			label: "Next.js",
		},
		jest: {
			name: "logos:jest",
			label: "Jest",
		},
		node: {
			name: "logos:nodejs-icon",
			label: "Node",
		},
		mysql: {
			name: "vscode-icons:file-type-sql",
			label: "MySQL",
		},
		sequelize: {
			name: "vscode-icons:file-type-sequelize",
			label: "Sequelize",
		},
		mongodb: {
			name: "vscode-icons:file-type-mongo",
			label: "MongoDB",
		},
		postgres: {
			name: "logos:postgresql",
			label: "PostgreSQL",
		},
		prisma: {
			name: "vscode-icons:file-type-light-prisma",
			label: "Prisma",
		},
		graphql: {
			name: "vscode-icons:file-type-graphql",
			label: "GraphQL",
		},
		docker: {
			name: "logos:docker-icon",
			label: "Docker",
		},
		firebase: {
			name: "logos:firebase",
			label: "Firebase",
		},
		jwt: {
			name: "logos:jwt-icon",
			label: "JWT",
		},
		twitter: {
			name: "logos:twitter",
			label: "Twitter API",
		},
		crypto: {
			name: "logos:bitcoin",
			label: "CoinGecko API",
		},
		actions: {
			name: "logos:github-octocat",
			label: "Github Actions",
		},
		husky: {
			name: "vscode-icons:file-type-husky",
			label: "Husky",
		},
		ga: {
			name: "logos:google-analytics",
			label: "Google Analytics",
		},
		prettier: {
			name: "logos:prettier",
			label: "Prettier",
		},
		eslint: {
			name: "logos:eslint",
			label: "Eslint",
		},
		contentful: {
			name: "logos:contentful",
			label: "Contentful",
		},
	};

	return (
		<div className="projects" id="projects">
			<h1 className="section-heading">Projects</h1>
			<div className="projects_wrapper">
				{/* RoastTime  */}
				<Fade bottom duration={1000} distance="40px">
					<Project
						title="RoastTime"
						desc="A full-stack application that reserves coffee shop table."
						content={projectContent.roastTime}
						logo={roastTimeLogo}
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
						content={projectContent.cryptoConnect}
						logo={cryptoConnectLogo}
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
}

export default Projects;
