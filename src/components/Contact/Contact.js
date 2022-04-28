import React, { useState } from "react";
import Swal from 'sweetalert2';


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

  handleFormSubmit = (event) => {

    event.preventDefault();

    console.log('Sending')

    let data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(data);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      Swal.fire(
        'Thank you!',
        'Your message has been received. I will get back to you as soon as possible.',
        'success'
      )


    }
  })
      }
    })

    
  };
  

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
