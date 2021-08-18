import { React, Component } from "react";
import axios from "axios";
import { Fade } from "react-reveal";
import "./contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Submit",
  };
  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
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
              onChange={(e) => this.setState({ email: e.target.value })}
              id="email"
              name="email"
              type="email"
            />
            <label>Message</label>
            <textarea
              onChange={(e) => this.setState({ message: e.target.value })}
              id="message"
              name="message"
              type="message"
            />
            <button type="submit">{this.state.buttonText}</button>
          </form>
        </Fade>
      </div>
    );
  }
}
