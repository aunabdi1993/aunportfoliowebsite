const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  resizeBy.send("Welcome to my forma");
});

app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smptpTransport = nodeMailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "aabdidevelopment@gmail.com",
      pass: "Imamhussain20!",
    },
  });

  let mailOptions = {
      from: data.email,
      to: 'aabdidevelopment@gmail.com',
      subject: 'New Message from ' + data.fname + ' ' + data.lname,
      html: `

      <h3>Information</h3>
        <ul>
        <li>Name: ${data.fname} ${data.lname}</li>
        <li>Email: ${data.email}</li>
        </ul>
      
        <h3>Message</h3>
        <p>${data.message}</p>
      
      `
  };

    smptpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log("Message sent: " + response.message);
            res.send("sent");
        }
    })

    smptpTransport.close();


});
