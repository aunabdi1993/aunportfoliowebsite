import React, { useState } from "react";
import axios from "axios";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

class contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  // HANDLE CHANGE

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  // SUBMIT FORM

  handleFormSubmit(event) {
    // console.log(this.state);

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Get the callback when the server responds
    xhr.addEventListener("load", () => {
      // Update the email Status with the response
      console.log(xhr.responseText);

    });

    xhr.open('GET', 'http://aunabdi.dev/index.php?sendto=' + email + '&fname=' + fname + '&lname=' + lname + '&message=' + message);

    // Send the request
    xhr.send();

    event.preventDefault();
  }

  render() {
    return (
      <Section>
        <SectionTitle>Contact Me</SectionTitle>
        <SectionText>Use the form below to contact me.</SectionText>
        <div>
          <form action="#">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <label>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <input
              type="submit"
              onClick={(e) => this.handleFormSubmit(e)}
              value="Submit"
            />
          </form>
        </div>
      </Section>
    );
  }
}

export default contact;
