import "./project.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

interface IFormProps {
	desc: string;
	title: string;
	liveLink: string;
	imageLink: string;
	githubWebLink: string;
	githubApiLink: string;
	langs: {
		label: string;
		name: string;
	}[];
}

const Project = ({ title, desc, langs, liveLink, githubWebLink, githubApiLink, imageLink }: IFormProps) => {
	return (
		<div className="project rounded-lg ml-auto mr-auto">
			<div className="project-title">
				<h2>{title}</h2>
			</div>
			<a href={liveLink} target="_blank" rel="noopener noreferrer">
				<img className="project-image" src={imageLink} style={{ width: "450px", height: "400px" }} alt="project" />
			</a>
			<br />
			<div className="project-langs">
				<TooltipProvider>
					{langs.map((lang, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<span className="project-lang">
									<Icon className="icon" icon={lang.name} height="25px" width="25px" />
								</span>
							</TooltipTrigger>
							<TooltipContent className="text-white">
								<p>{lang?.label}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</div>
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
			<div className="rounded-lg bg-[#242429] p-2.5">
				<p className="text-base  text-[#bdbdb0] text-[1.2rem] text-center">{desc}</p>
			</div>
		</div>
	);
};

export default Project;
