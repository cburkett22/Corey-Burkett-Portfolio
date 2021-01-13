const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const compression = require("compression");
const app = express();
const PORT = process.env.PORT || 8080;

// gzip compression
app.use(compression());

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, "./public/assets")));

app.get("/", (req, res) => {
  res.render("index");
});

//Heroku config var
let gmailPassword = process.env.GMAIL_PASS;

app.post("/send", (req, res) => {
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
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "portfolio.email2020@gmail.com",
        pass: gmailPassword,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let info = await transporter.sendMail({
      from: "'Portfolio Contact' <coreyburkett22@gmail.com>",
      to: "coreyburkett22@gmail.com",
      subject: "Portfolio Contact Request",
      html: output
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render(alert("Email has been sent. I will get back to you soon!"));
  }
  main().catch(console.error);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});