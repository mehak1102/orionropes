const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendApplicationEmail = async (data) => {
  const mailOptions = {
    from: `"Orion Careers" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Job Application Received",
    html: `
      <h2>New Application</h2>
      <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Position:</b> ${data.position}</p>
      <p><b>Resume:</b> <a href="${data.resumeUrl}">View Resume</a></p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendApplicationEmail;