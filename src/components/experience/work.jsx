import React, { Component } from 'react';
import classes from './education.module.css';
import { MdWork } from 'react-icons/md';

class Work extends Component {
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
                      className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                    >
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Northside Hospital <span>Aug 2015 - Mar 2020</span>
                      </h2>
                      <p>
                      Served a leadership role in providing the highest quality of patient care and precepting new nurses.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div
                      className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                    >
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Wellstar Hospital <span>Aug 2019 - 2021</span>
                      </h2>
                      <p>Delivered patient care in a dedicated COVID unit.</p>
                      <p>
                        Collaborated with an interdisciplinary team to ensure
                        the desired patient outcomes.
                      </p>
                    </div>
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

export default Work;
