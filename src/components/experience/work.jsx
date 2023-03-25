import React, { Component } from "react";
import classes from "./education.module.css";
import { MdWork } from "react-icons/md";

class Work extends Component {
	render() {
		return (
			<div className={classes.box} id="education">
				<section className={classes.container}>
					<div className={classes.container_content}>
						<div className={classes.row}>
							<div className={classes.row_md_12}>
								<div className={classes.timeline_centered}>
									<article className={classes.timeline_entry}>
										<div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
											<MdWork />
										</div>
										<div className={classes.label}>
											<h2>Tide Cleaners (Software Engineer)</h2>
											<h2>
												<span>Jan 2022 - Present</span>
											</h2>
											<p>Designed and developed a client-side application using NextJS, Typescript, and Tailwind.</p>
											<p>Implemented automation tests to ensure high-quality software solutions.</p>
											<p>Maintained an ASP.NET core product while debugging and resolving client and server issues.</p>
										</div>
									</article>{" "}
									<article className={classes.timeline_entry}>
										<div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
											<MdWork />
										</div>
										<div className={classes.label}>
											<h2>Wellstar Hospital (ICU Registered Nurse)</h2>
											<h2>
												<span>Aug 2019 - Jan 2022</span>
											</h2>
											<p>Delivered critical patient care in a dedicated COVID unit.</p>
											<p>Collaborated with an interdisciplinary team to ensure the desired patient outcomes.</p>
										</div>
									</article>
									<article className={classes.timeline_entry}>
										<div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
											<MdWork />
										</div>
										<div className={classes.label}>
											<h2>Northside Hospital (ICU Registered Nurse)</h2>
											<h2>
												<span>Aug 2015 - Mar 2020</span>
											</h2>
											<p>
												Effectively supervised a team of 12-16 nursing staff and implemented several performance
												improvement activities.
											</p>
											<p>
												Served a leadership role by providing the highest quality of patient care and by precepting new
												nurses.
											</p>
										</div>
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

export default Work;
