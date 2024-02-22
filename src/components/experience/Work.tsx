import { Component } from "react";
import classes from "./education.module.css";
import { MdWork } from "react-icons/md";
import { experience } from "~/constants";

class Work extends Component {
	render() {
		return (
			<div className={classes.box} id="education">
				<section className={classes.container}>
					<div className={classes.container_content}>
						<div className={classes.row}>
							<div className={classes.row_md_12}>
								<div className={classes.timeline_centered}>
									{experience.map((exp) => (
										<article className={classes.timeline_entry} key={exp.title}>
											<div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
												<MdWork />
											</div>
											<div className={classes.label}>
												<h2>
													{exp.title} ({exp.company})
												</h2>
												<h2>
													<span>{exp.date}</span>
												</h2>
												{exp.description.map((desc, i) => (
													<p key={i}>{desc}</p>
												))}
											</div>
										</article>
									))}
									<div className={classes.timeline_entry_inner}>
										<div className={classes.timeline_icon_3 || classes.color_none}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Work;
