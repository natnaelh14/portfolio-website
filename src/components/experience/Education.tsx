import { Component } from "react";
import classes from "./education.module.css";
import { MdSchool } from "react-icons/md";
import { education } from "~/constants";

class Education extends Component {
	render() {
		return (
			<div className={classes.box} id="education">
				<section className={classes.container}>
					<div className={classes.container_content}>
						<div className={classes.row}>
							<div className={classes.row_md_12}>
								<div className={classes.timeline_centered}>
									{education.map((item) => {
										return (
											<article key={item.degree} className={classes.timeline_entry}>
												<div className={`${classes.timeline_icon}`}>
													<MdSchool />
												</div>
												<div className={classes.label}>
													<div className="lg:flex lg:justify-between mb-5">
														<h3>{item.school}</h3>
														<span>{item.graduation}</span>
													</div>
													<p>{item.degree}</p>
												</div>
											</article>
										);
									})}
									<article>
										<div className={classes.timeline_entry_inner}>
											<div className={classes.timeline_icon_3 || classes.color_none}></div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Education;
