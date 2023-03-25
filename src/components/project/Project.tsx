import React, { Component } from "react";
import "./Project.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Tooltip } from "@chakra-ui/react";
import "../Modal-Container/Modal.css";

interface IFormProps {
	desc: string;
	title: string;
	liveLink: string;
	imageLink: string;
	githubWebLink: string;
	githubApiLink: string;
	langs: { name: string }[];
	logo: string;
	content: string[];
}

const Project = ({
	title,
	desc,
	langs,
	liveLink,
	githubWebLink,
	githubApiLink,
	imageLink,
	logo,
	content,
}: IFormProps) => {
	return (
		<div className="project">
			<div className="project-title">
				<h2>{title}</h2>
			</div>
			<a href={liveLink} target="_blank" rel="noopener noreferrer">
				<img className="project-image" src={imageLink} style={{ width: "450px", height: "400px" }} alt="project" />
			</a>
			<br />
			{/* <div className="project-langs">
				{langs &&
					// eslint-disable-next-line
					langs.map((lang, index) => (
						// eslint-disable-next-line
						<Tooltip key={index} label={lang?.label || ""} aria-label="A tooltip" fontSize="md" color="white">
							<span className="project-lang">
								<Icon className="icon" icon={lang.name} height="35px" width="35px" />
							</span>
						</Tooltip>
					))}
			</div> */}
			<div className="project-links">
				{liveLink && (
					<a href={liveLink} target="_blank" rel="noopener noreferrer">
						<FaLink />
					</a>
				)}
				<a href={githubWebLink} target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
				<a href={githubApiLink} target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
			</div>
			<div className="project-detail">
				<p className="project-desc">{desc}</p>
			</div>
			{/* <TriggerButton showModal={this.showModal} buttonRef={(n) => (this.TriggerButton = n)} triggerText="More Info" />
				{this.state.isShown ? (
					<Modal
						onSubmit={this.props.onSubmit}
						modalRef={(n) => (this.modal = n)}
						buttonRef={(n) => (this.closeButton = n)}
						closeModal={this.closeModal}
						onKeyDown={this.onKeyDown}
						onClickOutside={this.onClickOutside}
						description={desc}
						title={title}
						liveLink={liveLink}
						githubWebLink={githubWebLink}
						githubApiLink={githubApiLink}
						langs={langs}
						logo={logo}
						content={content}
					/>
				) : null} */}
		</div>
	);
};

export default Project;
