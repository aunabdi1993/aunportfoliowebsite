require('dotenv').config();

export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "aadevwebsite@gmail.com",
      pass: "aadevwebsite123!",
    },
    secure: true,
  });

  const mailData = {
    from: "aadevwebsite@gmail.com",
    to: "aabdidevelopment@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200)
  res.send()
}
