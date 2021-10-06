import React, { Component } from 'react';
import classes from './education.module.css';
import { MdSchool } from 'react-icons/md';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <section className={classes.container}>
          <div className={classes.container_content}>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div
                      className={`${classes.timeline_icon}`}
                    >
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Graceland University <span>2010-2014</span>
                      </h2>
                      <p>Bachelor of Science in Nursing</p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Georgia Institute of Technology <span>2021</span>
                      </h2>
                      <p>Full-Stack Web Development Certificate</p>
                    </div>
                  </article>
                  <article>
                    {/* <div
                      className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                    >
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <p>
                        Completed one month Internship in React Js with
                        Internity Foundation
                      </p>
                    </div> */}
                    <div className={classes.timeline_entry_inner}>
                      <div
                        className={
                          classes.timeline_icon_3 || classes.color_none
                        }
                      ></div>
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
