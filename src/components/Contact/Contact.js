import React, { useState } from "react";
import Swal from 'sweetalert2';
import Button from "../../styles/GlobalComponents/Button";


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
      Swal.fire({
        title: 'Processing...',
        width: 600,
        padding: '3em',
      })
      if (res.status === 200) {
        fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
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
      <Section id="contact">
        <SectionDivider />
        <br />
    <br />
    <br />
        <SectionTitle>Contact</SectionTitle>
        <SectionText>Use the form below to contact me.</SectionText>
        <div>
          <form action="/api/contact">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              required
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />

            <label>Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write something.."
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <Button type="submit"
              onClick={(e) => this.handleFormSubmit(e)}
              value="Submit">
                Submit
              </Button>
          </form>
        </div>
      </Section>
    );
  }
}

export default contact;
