import { FaLink, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";
import "./form.css";

interface IFormProps {
	description: string;
	title: string;
	liveLink: string;
	githubWebLink: string;
	githubApiLink: string;
	langs: { name: string }[];
	logo: string;
	content: string[];
}
export const Form = ({
	description,
	title,
	liveLink,
	githubWebLink,
	githubApiLink,
	langs,
	logo,
	content,
}: IFormProps) => {
	return (
		<div className="modal-container">
			<a href={liveLink} className="modal-image" target="_blank" rel="noopener noreferrer">
				<img className="image" src={logo} alt="logo" />
			</a>
			<h1 className="title">{title}</h1>
			<div className="modal-langs">
				{langs.map((lang, index) => (
					<span key={index} className="modal-lang">
						<Icon className="modal-icon" icon={lang.name} height="30px" width="30px" />
					</span>
				))}
			</div>
			<div className="modal-links">
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
			<div className="modal-description">
				<p>{description}</p>
			</div>
			<div className="modal-content">
				<label>Features:</label>
				<ul>
					{content.map((sen, i) => (
						<li key={i} className="modal-content-item">
							{sen}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Form;
