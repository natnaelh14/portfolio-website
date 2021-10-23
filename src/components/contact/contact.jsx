import { React, Component } from "react";
import { Fade } from "react-reveal";
import emailjs from "emailjs-com";
import "./contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false,
    buttonText: "complete form",
    errorText: "",
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name &&
      this.state.email &&
      this.state.subject &&
      this.state.message
    ) {
      this.setState({
        name: this.state.name,
        message: this.state.message,
        subject: this.state.subject,
        email: this.state.email,
        buttonText: "...sending",
      });

      let templateParams = {
        from_name: this.state.name,
        from_email: this.state.email,
        to_name: "Natnael Haile",
        subject: this.state.subject,
        message: this.state.message,
      };

      emailjs.send(
        "service_nasoi6g",
        "template_18f6zsf",
        templateParams,
        "user_eZV3e0rLSAkwzx3Pvay2V"
      );
      console.log(templateParams);
      this.resetForm();
    } else {
      this.setState({
        errorText: "Please complete the required fields",
      });
      setTimeout(() => {
        this.setState({ errorText: "" });
    }, 2000);
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      subject: "",
      email: "",
      buttonText: "Message Sent",
    });
    setTimeout(() => {
      this.setState({ buttonText: "complete form" });
  }, 4000);
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
    if (
      this.state.name &&
      this.state.email &&
      this.state.subject &&
      this.state.message
    ) {
      this.setState({
        buttonText: "submit",
      });
  };
}

  render() {
    return (
      <div>
        <h1 className="contact-heading" id="contact">
          Contact
        </h1>
        <Fade bottom duration={1000} distance="40px">
          <form onSubmit={(e) => this.formSubmit(e)}>
            <label className='required'>Full Name</label>
            <input
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.name}
              autoComplete="off"
              id="full-name"
              name="full-name"
              type="text"
            />
            <label className='required'>E-mail Address</label>
            <input
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.email}
              autoComplete="off"
              id="email"
              name="email"
              type="email"
            />
            <label className='required'>Subject</label>
            <input
              onChange={this.handleChange.bind(this, "subject")}
              value={this.state.subject}
              autoComplete="off"
              id="subject"
              name="subject"
              type="text"
            />
            <label className='required' >Message</label>
            <textarea
              onChange={this.handleChange.bind(this, "message")}
              value={this.state.message}
              autoComplete="off"
              id="message"
              name="message"
              type="message"
            />
            <p style={{color: '#e64861', textAlign: 'center'}}>{this.state.errorText}</p>
            <button type="submit">{this.state.buttonText}</button>
          </form>
        </Fade>
      </div>
    );
  }
}
