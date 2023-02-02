// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'rexzoneandothers@gmail.com', // Change to your recipient
  from: 'narendra.kumar02@nagarro.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
