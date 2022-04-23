import React from 'react';

const ContactForm = () => {
  return (
<form>
  <div class="mb-3">
  <label class="form-label" for="name">Name</label>
      <input class="form-control" id="name" type="text"/>
    <div id="nameHelp" class="form-text">Please enter your full name</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label class="form-label" for="message">Message</label>
  <input class="form-control" id="message" type="text"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default ContactForm