const nodemailer = require('nodemailer');

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_EMAIL = process.env.TO_EMAIL || 'recipient@example.com';

if (!EMAIL_USER || !EMAIL_PASS) {
  console.log('Please set EMAIL_USER and EMAIL_PASS environment variables before running this file.');
  console.log('Example:');
  console.log('export EMAIL_USER="your-email@gmail.com"');
  console.log('export EMAIL_PASS="your-16-character-gmail-app-password"');
  console.log('export TO_EMAIL="recipient@example.com"');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const mailOptions = {
  from: EMAIL_USER,
  to: TO_EMAIL,
  subject: 'Node.js module exercise email',
  text: 'This email was sent using nodemailer from a Node.js app.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email could not be sent:', error.message);
    return;
  }

  console.log('Email sent successfully!');
  console.log('Message ID:', info.messageId);
});
