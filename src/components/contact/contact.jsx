import { React, Component } from "react";
import { Fade } from "react-reveal";
import "./contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
  };

  render() {
    return (
      <div>
        <h1 className="contact-heading" id="contact">
          Contact
        </h1>
        <Fade bottom duration={1000} distance="40px">
          <form onSubmit={(e) => this.formSubmit(e)}>
            <label>Full Name</label>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              id="full-name"
              name="full-name"
              type="text"
            />
            <label>E-mail Address</label>
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              id="email"
              name="email"
              type="text"
            />
            <label>Message</label>
            <textarea
              onChange={(e) => this.setState({ name: e.target.value })}
              id="message"
              name="message"
              type="message"
            />
            <button type="submit">SUBMIT</button>
          </form>
        </Fade>
      </div>
    );
  }
}
