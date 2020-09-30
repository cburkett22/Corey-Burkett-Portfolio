const express = require("express");
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Environmental Variables
require('dotenv').config();
require('./config/prod')

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, './public/assets')));

app.get("/", (req, res) => {
  res.render('index');
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      auth: {
        user: 'coreyburkett22@gmail.com',
        pass: GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Portfolio Contact" <coreyburkett22@gmail.com>', // sender address
      to: "coreyburkett22@gmail.com", // list of receivers
      subject: "Portfolio Contact Request", // Subject line
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render('index', {msg: 'Email has been sent. Corey will get back to you soon!'});
  }
  main().catch(console.error);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});