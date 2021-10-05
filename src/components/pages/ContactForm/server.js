// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3000, () => console.log("Server Running"));

// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 8000,
//     auth: {
//       user: "203ea88d146438",
//       pass: "4f3adf06e42d7e"
//     }
//   });
  
//   transport.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "a369f033f6-8b1aa4+1@inbox.mailtrap.io",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     transport.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });