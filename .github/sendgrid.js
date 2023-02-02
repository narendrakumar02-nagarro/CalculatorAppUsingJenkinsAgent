#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(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);

const msg = {
    to: 'rexzoneandothers@gmail.com',
    from: 'narendra.kumar02@nagarro.com',
    subject: 'Hello world',
    text: 'Hello plain world!',
    html: '<p>Hello HTML world!</p>',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
